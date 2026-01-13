import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import { Psychology as PsychologyIcon, Chat as ChatIcon } from '@mui/icons-material';
import { SEOHead } from '../components/common/SEOHead';
import { Link } from 'react-router-dom';

export const CounsellingPage = () => {
    return (
        <>
            <SEOHead
                title="Counselling- BANCAT"
                description="Professional counselling services for cancer patients and their families."
            />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box textAlign="center" mb={8}>
                        <PsychologyIcon color="secondary" sx={{ fontSize: 60, mb: 2 }} />
                        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                            Counselling Services
                        </Typography>
                        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
                            Providing emotional and psychological support to navigate the journey of illness.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={0} sx={{ p: 4, borderRadius: 2, height: '100%' }}>
                                <Typography variant="h5" gutterBottom fontWeight="bold" color="secondary.main">
                                    Patient Counselling
                                </Typography>
                                <Typography paragraph>
                                    A diagnosis can bring fear, anxiety, and depression. Our counselors help patients cope with their diagnosis, manage their emotions, and find meaning and hope.
                                </Typography>
                                <Typography paragraph>
                                    We offer individual sessions that provide a safe space to express feelings without judgment.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={0} sx={{ p: 4, borderRadius: 2, height: '100%' }}>
                                <Typography variant="h5" gutterBottom fontWeight="bold" color="secondary.main">
                                    Family & Bereavement Support
                                </Typography>
                                <Typography paragraph>
                                    Cancer affects the whole family. We provide family counselling to help improve communication and support one another.
                                </Typography>
                                <Typography paragraph>
                                    We also offer bereavement counselling to help families navigate grief and loss after a loved one passes.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 8, textAlign: 'center' }}>
                        <Button
                            component={Link}
                            to="/contact"
                            variant="outlined"
                            size="large"
                            startIcon={<ChatIcon />}
                            sx={{ borderRadius: 50, px: 4 }}
                        >
                            Request a Session
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};
