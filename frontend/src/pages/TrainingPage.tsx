import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { CheckCircle as CheckCircleIcon, School as SchoolIcon } from '@mui/icons-material';
import { SEOHead } from '../components/common/SEOHead';

export const TrainingPage = () => {
    return (
        <>
            <SEOHead
                title="Training Programs - BANCAT"
                description="Professional training workshops for palliative care volunteers and healthcare providers."
            />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    {/* Hero Section */}
                    <Box textAlign="center" mb={8}>
                        <SchoolIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
                        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                            Training & Workshops
                        </Typography>
                        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
                            Empowering caregivers, volunteers, and healthcare professionals with the skills to provide compassionate palliative care.
                        </Typography>
                    </Box>

                    {/* Main Content */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
                                <Typography variant="h5" gutterBottom fontWeight="bold">
                                    Our Training Modules
                                </Typography>
                                <Typography paragraph color="text.secondary">
                                    We offer a comprehensive curriculum designed to cover all aspects of palliative care, from medical basics to emotional support.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                        <ListItemText
                                            primary="Introduction to Palliative Care"
                                            secondary="Understanding the philosophy and principles of end-of-life care."
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem>
                                        <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                        <ListItemText
                                            primary="Pain & Symptom Management"
                                            secondary="Basic techniques for managing pain and common symptoms in home settings."
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem>
                                        <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                        <ListItemText
                                            primary="Communication Skills"
                                            secondary="How to talk to patients and families about difficult topics with empathy."
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem>
                                        <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                                        <ListItemText
                                            primary="Psychological & Spiritual Support"
                                            secondary="Addressing the emotional and spiritual needs of patients."
                                        />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Paper elevation={0} sx={{ p: 4, borderRadius: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                                <Typography variant="h5" gutterBottom fontWeight="bold">
                                    Join Our Next Session
                                </Typography>
                                <Typography paragraph>
                                    Our workshops are held regularly throughout the year. Whether you are a student, professional, or family member, you are welcome to join.
                                </Typography>
                                <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}>
                                    <Typography variant="subtitle2" fontWeight="bold">Next Workshop:</Typography>
                                    <Typography variant="body1">Basic Palliative Care for Volunteers</Typography>
                                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>Date: To be announced</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};
