import { Box, Grid, Paper, Typography, Card, CardContent, Divider, Chip } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { dashboardService } from '../../services/dashboardService';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';
import {
    People as PeopleIcon,
    Campaign as CampaignIcon,
    Category as ProgramIcon,
    MonetizationOn as DonationIcon,
    VolunteerActivism as VolunteerIcon,
    Article as StoryIcon,
    TrendingUp as GrowthIcon,
    AccessTime as RecentIcon
} from '@mui/icons-material';

export const AdminDashboard = () => {
    const { data: stats, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: dashboardService.getAdminStats,
    });

    if (isLoading) return <LoadingSpinner />;

    const kpiCards = [
        { label: 'Total Patients', value: stats?.total_patients || 0, icon: <PeopleIcon sx={{ color: '#4318FF' }} />, color: '#F4F7FE' },
        { label: 'Total Campaigns', value: stats?.total_campaigns || 0, icon: <CampaignIcon sx={{ color: '#FFB547' }} />, color: '#FFF7E8' },
        { label: 'Active Programs', value: stats?.total_programs || 0, icon: <ProgramIcon sx={{ color: '#05CD99' }} />, color: '#E6FAF5' },
        { label: 'Total Donations', value: `৳${(stats?.total_donated || 0).toLocaleString()}`, icon: <DonationIcon sx={{ color: '#E31A1A' }} />, color: '#FEEEEE' },
        { label: 'Pending Volunteers', value: stats?.pending_volunteers || 0, icon: <VolunteerIcon sx={{ color: '#805AD5' }} />, color: '#F3EFFC' },
        { label: 'Published Stories', value: stats?.total_stories || 0, icon: <StoryIcon sx={{ color: '#00B5D8' }} />, color: '#E6F7FA' },
    ];

    return (
        <Box>
            <Helmet>
                <title>Admin Dashboard - BANcat</title>
            </Helmet>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" fontWeight="bold" sx={{ color: 'text.primary' }}>
                    Dashboard Overview
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Track your organization's impact and growth.
                </Typography>
            </Box>

            {/* KPI Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {kpiCards.map((kpi, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                        <Card sx={{ borderRadius: '20px', boxShadow: '0px 4px 20px rgba(112, 144, 176, 0.08)', height: '100%' }}>
                            <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 56,
                                        height: 56,
                                        borderRadius: '50%',
                                        bgcolor: kpi.color,
                                        mr: 2,
                                    }}
                                >
                                    {kpi.icon}
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {kpi.label}
                                    </Typography>
                                    <Typography variant="h5" fontWeight="bold" color="text.primary">
                                        {kpi.value}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={3}>
                {/* Donation Trends Chart */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, borderRadius: '20px', boxShadow: '0px 4px 20px rgba(112, 144, 176, 0.08)', height: '100%' }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                            Donation Trends
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={stats?.donation_trends || []}>
                                <defs>
                                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4318FF" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#4318FF" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E5F2" />
                                <XAxis dataKey="month" stroke="#A3AED0" tick={{ fontSize: 12 }} />
                                <YAxis stroke="#A3AED0" tick={{ fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0px 4px 20px rgba(0,0,0,0.1)' }}
                                />
                                <Area type="monotone" dataKey="total" stroke="#4318FF" fillOpacity={1} fill="url(#colorTotal)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                {/* Top Campaigns List */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, borderRadius: '20px', boxShadow: '0px 4px 20px rgba(112, 144, 176, 0.08)', height: '100%' }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                            Top Campaigns
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {stats?.top_campaigns?.map((campaign) => (
                                <Box key={campaign.id}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                        <Typography variant="body2" fontWeight="600" noWrap sx={{ maxWidth: '60%' }}>
                                            {campaign.name_en}
                                        </Typography>
                                        <Typography variant="body2" fontWeight="700" color="primary">
                                            ৳{campaign.raised_amount.toLocaleString()}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: '100%', height: 6, bgcolor: '#E9EDF7', borderRadius: 3 }}>
                                        <Box
                                            sx={{
                                                width: `${Math.min((campaign.raised_amount / campaign.goal_amount) * 100, 100)}%`,
                                                height: '100%',
                                                bgcolor: '#4318FF',
                                                borderRadius: 3
                                            }}
                                        />
                                    </Box>
                                </Box>
                            ))}
                            {(!stats?.top_campaigns || stats.top_campaigns.length === 0) && (
                                <Typography color="text.secondary">No campaigns found.</Typography>
                            )}
                        </Box>
                    </Paper>
                </Grid>

                {/* Current Programs */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, borderRadius: '20px', boxShadow: '0px 4px 20px rgba(112, 144, 176, 0.08)' }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                            Active Programs
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {stats?.current_programs?.map((program) => (
                                <Chip
                                    key={program.id}
                                    label={program.name_en}
                                    color="success"
                                    variant="outlined"
                                    sx={{ borderRadius: '8px', fontWeight: 600 }}
                                />
                            ))}
                            {(!stats?.current_programs || stats.current_programs.length === 0) && (
                                <Typography color="text.secondary">No active programs.</Typography>
                            )}
                        </Box>
                    </Paper>
                </Grid>

                {/* Impact Milestones */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, borderRadius: '20px', boxShadow: '0px 4px 20px rgba(112, 144, 176, 0.08)', height: '100%' }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                            Impact Milestones
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 48,
                                    height: 48,
                                    borderRadius: '12px',
                                    bgcolor: '#E6F7FA'
                                }}>
                                    <GrowthIcon sx={{ color: '#00B5D8', fontSize: 28 }} />
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Monthly Growth</Typography>
                                    <Typography variant="h6" fontWeight="bold" color={stats?.monthly_growth && stats.monthly_growth > 0 ? 'success.main' : 'error.main'}>
                                        {stats?.monthly_growth || 0}%
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 48,
                                    height: 48,
                                    borderRadius: '12px',
                                    bgcolor: '#FFF7E8'
                                }}>
                                    <RecentIcon sx={{ color: '#FFB547', fontSize: 28 }} />
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Last 7 Days Donations</Typography>
                                    <Typography variant="h6" fontWeight="bold">৳{(stats?.recent_donations_amount || 0).toLocaleString()}</Typography>
                                </Box>
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 48,
                                    height: 48,
                                    borderRadius: '12px',
                                    bgcolor: '#E6FAF5'
                                }}>
                                    <StoryIcon sx={{ color: '#05CD99', fontSize: 28 }} />
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Content Created</Typography>
                                    <Typography variant="h6" fontWeight="bold">{(stats?.total_stories || 0) + (stats?.total_blogs || 0)} Items</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                {/* Recent Activity Feed */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 3, borderRadius: '20px', boxShadow: '0px 4px 20px rgba(112, 144, 176, 0.08)' }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                            Recent Donations
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {stats?.recent_activity && stats.recent_activity.length > 0 ? (
                                stats.recent_activity.map((donation) => (
                                    <Box key={donation.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#F7FAFC', borderRadius: 2 }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant="body1" fontWeight="600">
                                                {donation.donor_name || 'Anonymous'}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {donation.patient?.name_en || donation.campaign?.name_en || 'General Donation'}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {new Date(donation.created_at).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </Typography>
                                        </Box>
                                        <Typography variant="h6" fontWeight="bold" color="primary">
                                            ৳{parseFloat(donation.amount).toLocaleString()}
                                        </Typography>
                                    </Box>
                                ))
                            ) : (
                                <Typography color="text.secondary">No recent donations.</Typography>
                            )}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
