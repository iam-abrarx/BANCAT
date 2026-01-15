import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { VolunteerActivism, Handshake, Spa, Person, Star } from '@mui/icons-material';
import joinBg from '../../assets/join_bg_17734.jpg';
import { useTranslation } from 'react-i18next';

const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    bgcolor: 'rgba(255,255,255,0.05)',
    color: 'white',
    borderRadius: 2,
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)', // Very gentle

    // Gradient Overlay via pseudo-element for smooth opacity transition
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(128, 14, 235, 0.7), rgba(245, 233, 211, 0.1))',
        opacity: 0.2,
        transition: 'opacity 0.5s ease-in-out',
        zIndex: 0,
    },

    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        border: '1px solid rgba(255,255,255,0.2)'
    },

    '&:hover::before': {
        opacity: 1,
    },

    // Ensure content stays on top
    '& > *': {
        position: 'relative',
        zIndex: 1,
    }
};

const JoinUs = () => {
    const { t } = useTranslation();

    return (
        <Box
            id="join-us-section"
            sx={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                color: 'white'
            }}>
            {/* Background Image */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${joinBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2,
                    filter: 'blur(12px)',
                }}
            />

            {/* Color Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: '#8d15c5ff',
                    mixBlendMode: 'multiply',
                    opacity: 0.8,
                    zIndex: -1,
                }}
            />

            {/* Section 1: Ways to Join */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8, maxWidth: '800px', mx: 'auto' }}>
                        <Typography variant="h3" sx={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif", mb: 2 }}>
                            {t('join_us.title')}
                        </Typography>
                        <Typography sx={{ lineHeight: 1.6 }}>
                            {t('join_us.description')}
                        </Typography>
                    </Box>

                    {/* Feature Cards Row 1 */}
                    <Grid container spacing={3} justifyContent="center" sx={{ mb: 3 }}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper
                                elevation={0}
                                sx={{ ...cardStyle, p: 4 }}
                            >
                                <VolunteerActivism sx={{ fontSize: 60, mb: 2 }} />
                                <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}>
                                    {t('join_us.regular_donor')}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper
                                elevation={0}
                                sx={{ ...cardStyle, p: 4 }}
                            >
                                <Handshake sx={{ fontSize: 60, mb: 2 }} />
                                <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}>
                                    {t('join_us.become_partner')}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* Feature Cards Row 2 (Purple) */}
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={4} md={3}>
                            <Paper
                                elevation={0}
                                sx={{ ...cardStyle, p: 3 }}
                            >
                                <Spa sx={{ fontSize: 40, mb: 1 }} />
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {t('join_us.lifetime_donor')}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Paper
                                elevation={0}
                                sx={{ ...cardStyle, p: 3 }}
                            >
                                <Person sx={{ fontSize: 40, mb: 1 }} />
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {t('join_us.volunteer')}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Paper
                                elevation={0}
                                sx={{ ...cardStyle, p: 3 }}
                            >
                                <Star sx={{ fontSize: 40, mb: 1 }} />
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {t('join_us.career')}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default JoinUs;
