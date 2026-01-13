import { Container, Typography, Box, Grid, Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { SEOHead } from '../components/common/SEOHead';
import { Psychology, Favorite, Groups, VerifiedUser } from '@mui/icons-material';

export const MentalHealthPage = () => {
    return (
        <>
            <SEOHead title="Mental Health Support | BANCAT" description="Emotional and psychological support for cancer patients and their families." />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box mb={6} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            Mental Health Support
                        </Typography>
                        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
                            Healing the mind is just as important as healing the body. We provide comprehensive psychological care.
                        </Typography>
                    </Box>

                    <Grid container spacing={4} sx={{ mb: 8 }}>
                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1527137342181-191f4569c639?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Mental Health Support"
                                sx={{ width: '100%', borderRadius: 4, boxShadow: 3 }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
                            <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
                                Why Mental Health Matters
                            </Typography>
                            <Typography variant="body1" paragraph fontSize="1.1rem" lineHeight={1.8}>
                                A cancer diagnosis brings immense emotional distress, anxiety, and depression. Our mental health support program ensures that patients and caregivers do not have to walk this path alone.
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><VerifiedUser color="primary" /></ListItemIcon>
                                    <ListItemText primary="Individual Counselling" secondary="One-on-one sessions with licensed psychologists." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><Groups color="secondary" /></ListItemIcon>
                                    <ListItemText primary="Support Groups" secondary="Share experiences with others facing similar challenges." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><Psychology color="success" /></ListItemIcon>
                                    <ListItemText primary="Stress Management" secondary="Techniques like mindfulness and meditation." />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 6 }} />

                    <Box textAlign="center">
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Our Services
                        </Typography>
                        <Grid container spacing={4} mt={3}>
                            {[
                                { title: 'Psychological Assessment', icon: <Psychology fontSize="large" color="primary" />, desc: 'Evaluating mental health needs to create tailored care plans.' },
                                { title: 'Crisis Intervention', icon: <Favorite fontSize="large" color="error" />, desc: 'Immediate support for patients in distress.' },
                                { title: 'Family Counselling', icon: <Groups fontSize="large" color="info" />, desc: 'Helping families navigate the emotional impact of cancer.' },
                            ].map((item, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Card sx={{ height: '100%', textAlign: 'center', p: 3, borderRadius: 3, boxShadow: 2 }}>
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
