<?php

use App\Http\Controllers\Api\PatientController;
use App\Http\Controllers\Api\StoryController;
use App\Http\Controllers\Api\ProgramController;
use App\Http\Controllers\Api\CampaignController;
use App\Http\Controllers\Api\DonationController;
use App\Http\Controllers\Api\TeamMemberController;
use App\Http\Controllers\Api\ImpactMetricController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\VolunteerController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\PartnerApplicationController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\SettingsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {
    // Public user submission routes
    Route::post('/campaigns/submit', [CampaignController::class, 'submit']);
    
    Route::get('/patients', [PatientController::class, 'index']);
    Route::get('/patients/{code}', [PatientController::class, 'show']);

    Route::get('/stories', [StoryController::class, 'index']);
    Route::get('/stories/{slug}', [StoryController::class, 'show']);

    Route::get('/programs', [ProgramController::class, 'index']);
    Route::get('/programs/{slug}', [ProgramController::class, 'show']);

    Route::get('/campaigns', [CampaignController::class, 'index']);
    Route::get('/campaigns/{slug}', [CampaignController::class, 'show']);

    Route::get('/testimonials', [TestimonialController::class, 'index']);
    Route::get('/galleries', [GalleryController::class, 'index']);
    Route::get('/galleries/{slug}', [GalleryController::class, 'show']);
    Route::get('/team-members', [TeamMemberController::class, 'index']);
    Route::get('/team-members/{id}', [TeamMemberController::class, 'show']);

    // Route::get('/team-members/{id}', [TeamMemberController::class, 'show']); // Duplicate removed
    
    Route::get('/blogs', [\App\Http\Controllers\Api\BlogController::class, 'index']);
    Route::get('/blogs/{slug}', [\App\Http\Controllers\Api\BlogController::class, 'show']);

    // Public SEO Settings (for frontend)
    Route::get('/settings/seo', [SettingsController::class, 'getSeoSettings']);
    Route::get('/settings/company', [SettingsController::class, 'getCompanySettings']);

    // Callback route for gateway redirect (using GET usually for redirects, POST for IPN/Webhook)
    Route::match(['get', 'post'], '/donations/callback', [DonationController::class, 'callback'])->name('api.donations.callback');

    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    // Rate-limited public endpoints
    Route::middleware('throttle:60,1')->group(function () {
        // Volunteer Route
        Route::post('/volunteers/apply', [VolunteerController::class, 'store']);

        // Contact Routes
        Route::post('/contact', [ContactController::class, 'storeContact']);
        Route::post('/partnership', [PartnerApplicationController::class, 'store']);

        // Donation Routes
        Route::post('/donations/initiate', [DonationController::class, 'initiate']);
    });

    // Protected Routes
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', [AuthController::class, 'user']);
        Route::post('/logout', [AuthController::class, 'logout']);

        // Dashboard
        Route::get('/dashboard/stats', [DashboardController::class, 'stats']);
        Route::get('/dashboard/donations', [DashboardController::class, 'donations']);

        // Admin Routes
        Route::middleware('admin')->prefix('admin')->group(function () {
             Route::get('/stats', [DashboardController::class, 'adminStats']);

             // User Management
             Route::get('/users', [UserController::class, 'index']);
             Route::post('/users', [UserController::class, 'store']);
             Route::put('/users/{id}/role', [UserController::class, 'updateRole']);
              
             // Patient Management
             Route::get('/patients/{id}', [PatientController::class, 'showAdmin']);
             Route::post('/patients', [PatientController::class, 'store']);
             Route::put('/patients/{id}', [PatientController::class, 'update']);
             Route::delete('/patients/{id}', [PatientController::class, 'destroy']);

             // Story Management
             Route::get('/stories/{id}', [StoryController::class, 'showAdmin']);
             Route::post('/stories', [StoryController::class, 'store']);
             Route::put('/stories/{id}', [StoryController::class, 'update']);
             Route::delete('/stories/{id}', [StoryController::class, 'destroy']);

             // Volunteer Management
             Route::get('/volunteers', [VolunteerController::class, 'index']);
             Route::get('/volunteers/{id}', [VolunteerController::class, 'show']);
             Route::put('/volunteers/{id}', [VolunteerController::class, 'update']);
             Route::delete('/volunteers/{id}', [VolunteerController::class, 'destroy']);

             // Campaign Management
             Route::get('/campaigns/{id}', [CampaignController::class, 'showAdmin']);
             Route::post('/campaigns', [CampaignController::class, 'store']);
             Route::put('/campaigns/{id}', [CampaignController::class, 'update']);
             Route::delete('/campaigns/{id}', [CampaignController::class, 'destroy']);

             // Team Member Management
             Route::get('/team-members', [TeamMemberController::class, 'index']);
             Route::post('/team-members', [TeamMemberController::class, 'store']);
             Route::get('/team-members/{id}', [TeamMemberController::class, 'show']);
             Route::put('/team-members/{id}', [TeamMemberController::class, 'update']);
             Route::delete('/team-members/{id}', [TeamMemberController::class, 'destroy']);

             // Impact Metrics Management
             Route::get('/impact-metrics', [ImpactMetricController::class, 'index']);
             Route::post('/impact-metrics', [ImpactMetricController::class, 'store']);
             Route::get('/impact-metrics/{id}', [ImpactMetricController::class, 'show']);
             Route::put('/impact-metrics/{id}', [ImpactMetricController::class, 'update']);
             Route::delete('/impact-metrics/{id}', [ImpactMetricController::class, 'destroy']);

             // Partner Management
             Route::get('/partners', [PartnerApplicationController::class, 'index']);
             Route::put('/partners/{id}', [PartnerApplicationController::class, 'update']);
             Route::delete('/partners/{id}', [PartnerApplicationController::class, 'destroy']);
             Route::put('/partners/{id}/status', [PartnerApplicationController::class, 'updateStatus']);

             // Testimonial Management
             Route::post('/testimonials', [TestimonialController::class, 'store']);
             Route::put('/testimonials/{id}', [TestimonialController::class, 'update']);
             Route::delete('/testimonials/{id}', [TestimonialController::class, 'destroy']);

             // Donation Management
             Route::get('/donations', [DonationController::class, 'index']);
             Route::put('/donations/{id}/approve', [DonationController::class, 'approve']);

             // SEO Settings Management
             Route::put('/settings/seo', [SettingsController::class, 'updateSeoSettings']);
             Route::put('/settings/company', [SettingsController::class, 'updateCompanySettings']);

             // Gallery Management
             Route::get('/galleries', [GalleryController::class, 'index']);
             Route::post('/galleries', [GalleryController::class, 'store']);
             Route::put('/galleries/{id}', [GalleryController::class, 'update']);
             Route::delete('/galleries/{id}', [GalleryController::class, 'destroy']);
             Route::post('/galleries/{id}/images', [GalleryController::class, 'addImages']);
             Route::delete('/galleries/{id}/images/{imageId}', [GalleryController::class, 'removeImage']);

             // Blog Management
             Route::get('/blogs', [\App\Http\Controllers\Api\BlogController::class, 'index']);
             Route::get('/blogs/{id}', [\App\Http\Controllers\Api\BlogController::class, 'show']); // Admin specific if needed, but using public generally
             Route::post('/blogs', [\App\Http\Controllers\Api\BlogController::class, 'store']);
             Route::put('/blogs/{id}', [\App\Http\Controllers\Api\BlogController::class, 'update']);
             Route::delete('/blogs/{id}', [\App\Http\Controllers\Api\BlogController::class, 'destroy']);
        });
    });
// End of Admin Routes
        });

