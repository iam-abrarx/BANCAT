import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { SEOHead } from '../components/common/SEOHead';
import { Accessible, FitnessCenter, SelfImprovement, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const RehabilitationPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <SEOHead title="Rehabilitation | BANCAT" description="Restoring quality of life through physical and functional rehabilitation." />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box mb={6} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            Rehabilitation Program
                        </Typography>
                        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
                            Helping patients regain strength, mobility, and independence after cancer treatment.
                        </Typography>
                    </Box>

                    <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
                                Rebuilding Lives
                            </Typography>
                            <Typography variant="body1" paragraph fontSize="1.1rem" lineHeight={1.8}>
                                Cancer treatment often takes a toll on the body. Our rehabilitation services focus on physical therapy, pain management, and nutritional support to help patients recover faster and live better.
                            </Typography>
                            <Button variant="contained" color="secondary" size="large" onClick={() => navigate('/contact')} endIcon={<ArrowForward />}>
                                Book a Session
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1576091160550-21733e99dbb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Rehabilitation"
                                sx={{ width: '100%', borderRadius: 4, boxShadow: 3 }}
                            />
                        </Grid>
                    </Grid>

                    <Box>
                        <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center" mb={4}>
                            Therapy Areas
                        </Typography>
                        <Grid container spacing={3}>
                            {[
                                { title: 'Physical Therapy', icon: <FitnessCenter fontSize="large" color="primary" />, desc: 'Restoring movement and managing pain.' },
                                { title: 'Occupational Therapy', icon: <Accessible fontSize="large" color="success" />, desc: 'Helping patients perform daily activities independently.' },
                                { title: 'Holistic Wellness', icon: <SelfImprovement fontSize="large" color="warning" />, desc: 'Yoga and breathing exercises for relaxation.' },
                            ].map((item, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Card sx={{ height: '100%', p: 2, borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 4 } }}>
                                        <CardContent sx={{ textAlign: 'center' }}>
                                            <Box mb={2}>{item.icon}</Box>
                                            <Typography variant="h6" fontWeight="bold" gutterBottom>{item.title}</Typography>
                                            <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};
