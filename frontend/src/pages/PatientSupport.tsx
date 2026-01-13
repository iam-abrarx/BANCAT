import { Container, Typography, Box, Grid, Card, CardContent, Button, Divider } from '@mui/material';
import { SEOHead } from '../components/common/SEOHead';
import { VolunteerActivism, LocalHospital, Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const PatientSupport = () => {
    return (
        <>
            <SEOHead />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box mb={6} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            Patient & Caregiver Support
                        </Typography>
                        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
                            Resources and guidance for those battling cancer and their support systems.
                        </Typography>
                    </Box>

                    {/* Caregiver Section */}
                    <Box mb={8}>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Box component="img" src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80" sx={{ width: '100%', borderRadius: 4, boxShadow: 3 }} alt="Caregiver Support" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4" fontWeight="bold" gutterBottom color="secondary.main">
                                    For Caregivers
                                </Typography>
                                <Typography variant="body1" paragraph fontSize="1.1rem">
                                    Caregivers are the unsung heroes of the cancer journey. We recognize the immense physical and emotional toll caregiving takes.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Our support services for caregivers include:
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, typography: 'body1', mb: 3 }}>
                                    <li>Respite care coordination</li>
                                    <li>Training on home medical care basics</li>
                                    <li>Emotional support groups</li>
                                    <li>Stress management workshops</li>
                                </Box>
                                <Button variant="outlined" color="primary" component={Link} to="/contact">
                                    Request Support
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider sx={{ mb: 8 }} />

                    {/* Financial & Medical */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ height: '100%', borderRadius: 3, bgcolor: '#e8f5e9' }}>
                                <CardContent sx={{ p: 4 }}>
                                    <LocalHospital sx={{ fontSize: 40, color: '#4caf50', mb: 2 }} />
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        Medical Guidance
                                    </Typography>
                                    <Typography variant="body1">
                                        Navigating the healthcare system can be confusing. We help patients find the right specialists, understand treatment options, and coordinate appointments with partner hospitals.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ height: '100%', borderRadius: 3, bgcolor: '#e3f2fd' }}>
                                <CardContent sx={{ p: 4 }}>
                                    <VolunteerActivism sx={{ fontSize: 40, color: '#1976d2', mb: 2 }} />
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        Financial Assistance
                                    </Typography>
                                    <Typography variant="body1">
                                        We guide underprivileged families on how to apply for financial grants, Zakat funds, and government aid to cover treatment costs. No one should be denied care due to lack of funds.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Box mt={8} textAlign="center" p={4} bgcolor="primary.main" borderRadius={4} color="white">
                        <Favorite sx={{ fontSize: 50, mb: 1, color: '#ff4081' }} />
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            You Are Not Alone
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 3 }}>
                            Our 24/7 Helpline is available for emotional support.
                        </Typography>
                        <Button variant="contained" color="secondary" size="large" component={Link} to="/contact">
                            Contact Helpline
                        </Button>
                    </Box>

                </Container>
            </Box>
        </>
    );
};
