import { Container, Typography, Box, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { SEOHead } from '../components/common/SEOHead';
import { Spa, VolunteerActivism, LocalFlorist, Handshake } from '@mui/icons-material';

export const HolisticSupportPage = () => {
    return (
        <>
            <SEOHead title="Holistic Support | BANCAT" description="Comprehensive care for cancer patients focusing on mind, body, and spirit." />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box mb={6} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            Holistic Support Services
                        </Typography>
                        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
                            Treating the person, not just the disease. We ensure compassion, dignity, and total well-being.
                        </Typography>
                    </Box>

                    <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1544367563-12123d8965cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Holistic Care"
                                sx={{ width: '100%', borderRadius: 4, boxShadow: 3 }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
                                Beyond Medical Treatment
                            </Typography>
                            <Typography variant="body1" paragraph fontSize="1.1rem" lineHeight={1.8}>
                                Cancer impacts every aspect of a person’s life. Our holistic approach integrates physical, emotional, spiritual, and social support to improve quality of life during and after treatment.
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><Spa color="primary" /></ListItemIcon>
                                    <ListItemText primary="Nutritional Guidance" secondary="Personalized diet plans to boost immunity and recovery." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><VolunteerActivism color="secondary" /></ListItemIcon>
                                    <ListItemText primary="Palliative Care" secondary="Comfort-focused care to manage symptoms and pain." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><Handshake color="success" /></ListItemIcon>
                                    <ListItemText primary="Social Support" secondary="Connecting patients with community resources and aid." />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 6 }} />

                    <Box>
                        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center" mb={4}>
                            Our Holistic Pillars
                        </Typography>
                        <Grid container spacing={3}>
                            {[
                                { title: 'Emotional Healing', icon: <LocalFlorist fontSize="large" color="error" />, desc: 'Addressing anxiety and fear through counseling and art therapy.' },
                                { title: 'Spiritual Support', icon: <Spa fontSize="large" color="warning" />, desc: 'Providing space for meditation, prayer, and reflection.' },
                                { title: 'Community Connection', icon: <Handshake fontSize="large" color="info" />, desc: 'Building a network of survivors and caregivers.' },
                            ].map((item, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Card sx={{ height: '100%', p: 3, borderRadius: 3, textAlign: 'center', transition: '0.3s', '&:hover': { transform: 'scale(1.02)', boxShadow: 4 } }}>
                                        <CardContent>
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
