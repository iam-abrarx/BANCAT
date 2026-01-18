import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Domain, MedicalServices, Psychology, SolarPower, EnergySavingsLeaf, VolunteerActivism } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDonationDrawer } from '../contexts/DonationDrawerContext';
import renderImage from '../assets/projects/alok_boshoti/render.png';
import groundbreakingImage from '../assets/projects/alok_boshoti/groundbreaking.jpg';
import groupImage from '../assets/projects/alok_boshoti/group.jpg';

export const AlokBoshoti = () => {
    const { t } = useTranslation();
    const { openDrawer } = useDonationDrawer();

    const services = [
        {
            icon: <MedicalServices fontSize="large" color="primary" />,
            title: t('alok_boshoti_page.service_1_title'),
            desc: t('alok_boshoti_page.service_1_desc')
        },
        {
            icon: <Domain fontSize="large" color="primary" />,
            title: t('alok_boshoti_page.service_2_title'),
            desc: t('alok_boshoti_page.service_2_desc')
        },
        {
            icon: <Psychology fontSize="large" color="primary" />,
            title: t('alok_boshoti_page.service_3_title'),
            desc: t('alok_boshoti_page.service_3_desc')
        }
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: '300px', md: '500px' },
                    backgroundImage: `url(${renderImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.4)'
                    }
                }}
            >
                <Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
                            {t('alok_boshoti_page.hero_title')}
                        </Typography>
                        <Typography variant="h5" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
                            {t('alok_boshoti_page.hero_subtitle')}
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={() => openDrawer()}
                            startIcon={<VolunteerActivism />}
                            sx={{ borderRadius: 50, px: 4, py: 1.5, fontSize: '1.1rem' }}
                        >
                            Support The Vision
                        </Button>
                    </motion.div>
                </Container>
            </Box>

            {/* About / Vision Section */}
            <Container sx={{ py: 8 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="overline" color="primary" fontWeight={700}>
                            {t('alok_boshoti_page.about_feature')}
                        </Typography>
                        <Typography variant="h3" fontWeight={700} gutterBottom sx={{ mt: 1 }}>
                            {t('alok_boshoti_page.about_title')}
                        </Typography>
                        <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            {t('alok_boshoti_page.about_p1')}
                        </Typography>

                        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                            <Paper
                                variant="outlined"
                                sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, borderRadius: 2 }}
                            >
                                <SolarPower color="warning" />
                                <Box>
                                    <Typography variant="subtitle2" fontWeight={700}>Eco-Friendly</Typography>
                                    <Typography variant="caption">Solar Energy</Typography>
                                </Box>
                            </Paper>
                            <Paper
                                variant="outlined"
                                sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, borderRadius: 2 }}
                            >
                                <EnergySavingsLeaf color="success" />
                                <Box>
                                    <Typography variant="subtitle2" fontWeight={700}>Sustainable</Typography>
                                    <Typography variant="caption">Organic Farming</Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
                            <Paper
                                elevation={3}
                                sx={{
                                    gridColumn: 'span 8',
                                    borderRadius: 3,
                                    overflow: 'hidden'
                                }}
                            >
                                <Box component="img" src={groundbreakingImage} alt="Groundbreaking Ceremony" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Paper>
                            <Paper
                                elevation={3}
                                sx={{
                                    gridColumn: 'span 4',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    transform: 'translateY(20px)'
                                }}
                            >
                                <Box component="img" src={groupImage} alt="Foundation Day" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Paper>
                        </Box>
                        <Typography variant="caption" sx={{ display: 'block', mt: 2, textAlign: 'center', color: 'text.secondary' }}>
                            Foundation Stone Laying Ceremony of Alok Boshoti
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* Services / Ecosystem */}
            <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
                <Container>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h4" fontWeight={700} gutterBottom>
                            {t('alok_boshoti_page.services_title')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
                            {t('alok_boshoti_page.about_p2')}
                        </Typography>
                    </Box>
                    <Grid container spacing={4} justifyContent="center">
                        {services.map((service, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        borderRadius: 4,
                                        textAlign: 'center',
                                        transition: 'all 0.3s',
                                        '&:hover': { transform: 'translateY(-5px)', boxShadow: 4 }
                                    }}
                                >
                                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                                    <Typography variant="h6" fontWeight={700} gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {service.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Impact / Closing */}
            {/* Mission / Dignity Section */}
            <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 8 }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="overline" sx={{ opacity: 0.8, letterSpacing: 2 }}>VISION 2030</Typography>
                    <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mt: 1 }}>
                        {t('alok_boshoti_page.vision_title')}
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, lineHeight: 1.8, fontSize: '1.1rem' }}>
                        {t('alok_boshoti_page.vision_desc')}
                    </Typography>
                    <Box sx={{ mt: 6, p: 4, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 4 }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                            {t('alok_boshoti_page.impact_title')}
                        </Typography>
                        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                            "{t('alok_boshoti_page.impact_desc')}"
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};
