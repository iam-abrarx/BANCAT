<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Donation;

use App\Models\Patient;
use App\Models\Volunteer;

class DashboardController extends Controller
{
    public function stats(Request $request)
    {
        $user = $request->user();
        
        $totalDonated = Donation::where('email', $user->email)
            ->where('status', 'completed')
            ->sum('amount');
            
        $donationCount = Donation::where('email', $user->email)
            ->where('status', 'completed')
            ->count();
            
        // For now, impact is simple calculation or mock
        $impactCount = $donationCount; 

        return response()->json([
            'total_donated' => $totalDonated,
            'donation_count' => $donationCount,
            'impact_count' => $impactCount,
        ]);
    }

    public function adminStats(Request $request)
    {
        try {
            // Cache dashboard stats for 5 minutes to reduce database load
            return \Illuminate\Support\Facades\Cache::remember('admin_dashboard_stats', 300, function () {
                // Basic counts
                $totalDonated = Donation::where('status', 'completed')->sum('amount');
                $totalPatients = Patient::count();
                $totalCampaigns = \App\Models\Campaign::count();
                $totalPrograms = \App\Models\Program::count();
                
                // Additional metrics
                $pendingVolunteers = Volunteer::where('status', 'pending')->count();
                $totalStories = \App\Models\Story::count();
                $totalBlogs = \App\Models\Blog::count();
                
                // Recent activity (last 7 days)
                $recentDonations = Donation::where('status', 'completed')
                    ->where('created_at', '>=', \Carbon\Carbon::now()->subDays(7))
                    ->sum('amount');
                
                // Calculate monthly growth
                $currentMonthDonations = Donation::where('status', 'completed')
                    ->whereYear('created_at', \Carbon\Carbon::now()->year)
                    ->whereMonth('created_at', \Carbon\Carbon::now()->month)
                    ->sum('amount');
                
                $lastMonthDonations = Donation::where('status', 'completed')
                    ->whereYear('created_at', \Carbon\Carbon::now()->subMonth()->year)
                    ->whereMonth('created_at', \Carbon\Carbon::now()->subMonth()->month)
                    ->sum('amount');
                
                $growthPercentage = $lastMonthDonations > 0 
                    ? (($currentMonthDonations - $lastMonthDonations) / $lastMonthDonations) * 100 
                    : 0;

                // Top Campaigns
                $topCampaigns = \App\Models\Campaign::orderBy('raised_amount', 'desc')
                    ->take(5)
                    ->get(['id', 'name_en', 'raised_amount', 'goal_amount', 'status']);

                // Current Programs
                $currentPrograms = \App\Models\Program::where('is_active', true)
                    ->take(5)
                    ->get(['id', 'name_en', 'is_active']);

                // Donation Trends (Last 6 Months) - Database agnostic
                // Use Laravel's date formatting instead of database-specific functions
                $donationTrends = Donation::where('status', 'completed')
                    ->where('created_at', '>=', \Carbon\Carbon::now()->subMonths(6))
                    ->get()
                    ->groupBy(function($donation) {
                        return \Carbon\Carbon::parse($donation->created_at)->format('Y-m');
                    })
                    ->map(function($donations, $month) {
                        return [
                            'month' => \Carbon\Carbon::parse($month . '-01')->format('M Y'),
                            'total' => $donations->sum('amount')
                        ];
                    })
                    ->values()
                    ->sortBy(function($item) {
                        return \Carbon\Carbon::parse($item['month'])->timestamp;
                    })
                    ->values();

                // Recent donations for activity feed
                $recentDonationsList = Donation::where('status', 'completed')
                    ->with(['patient:id,name_en', 'campaign:id,name_en'])
                    ->orderBy('created_at', 'desc')
                    ->take(5)
                    ->get(['id', 'amount', 'created_at', 'patient_id', 'campaign_id', 'donor_name']);

                return [
                    'total_donated' => $totalDonated,
                    'total_patients' => $totalPatients,
                    'total_campaigns' => $totalCampaigns,
                    'total_programs' => $totalPrograms,
                    'pending_volunteers' => $pendingVolunteers,
                    'total_stories' => $totalStories,
                    'total_blogs' => $totalBlogs,
                    'recent_donations_amount' => $recentDonations,
                    'monthly_growth' => round($growthPercentage, 2),
                    'top_campaigns' => $topCampaigns,
                    'current_programs' => $currentPrograms,
                    'donation_trends' => $donationTrends,
                    'recent_activity' => $recentDonationsList
                ];
            });
        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error('Dashboard stats error: ' . $e->getMessage());
            
            // Return graceful fallback data
            return response()->json([
                'total_donated' => 0,
                'total_patients' => 0,
                'total_campaigns' => 0,
                'total_programs' => 0,
                'pending_volunteers' => 0,
                'total_stories' => 0,
                'total_blogs' => 0,
                'recent_donations_amount' => 0,
                'monthly_growth' => 0,
                'top_campaigns' => [],
                'current_programs' => [],
                'donation_trends' => [],
                'recent_activity' => [],
                'error' => 'Failed to load dashboard statistics'
            ], 500);
        }
    }

    public function donations(Request $request)
    {
        $user = $request->user();

        $donations = Donation::where('email', $user->email)
            ->with(['patient:id,name_en,name_bn', 'campaign:id,name_en,name_bn'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($donations);
    }
}
