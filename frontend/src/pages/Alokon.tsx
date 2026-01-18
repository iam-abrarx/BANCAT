import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Psychology, Groups, SelfImprovement, Diversity3, AutoStories, VolunteerActivism } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDonationDrawer } from '../contexts/DonationDrawerContext';
import groupImage from '../assets/projects/alokon/group_session.jpg';
import counselingImage from '../assets/projects/alokon/counseling.jpg';

export const Alokon = () => {
    const { t } = useTranslation();
    const { openDrawer } = useDonationDrawer();

    const services = [
        {
            icon: <Psychology color="primary" fontSize="large" />,
            title: t('alokon_page.service_1_title'),
            desc: t('alokon_page.service_1_desc')
        },
        {
            icon: <SelfImprovement color="primary" fontSize="large" />,
            title: t('alokon_page.service_2_title'),
            desc: t('alokon_page.service_2_desc')
        },
        {
            icon: <Groups color="primary" fontSize="large" />,
            title: t('alokon_page.service_3_title'),
            desc: t('alokon_page.service_3_desc')
        },
        {
            icon: <Diversity3 color="primary" fontSize="large" />,
            title: t('alokon_page.service_4_title'),
            desc: t('alokon_page.service_4_desc')
        },
        {
            icon: <AutoStories color="primary" fontSize="large" />,
            title: t('alokon_page.service_5_title'),
            desc: t('alokon_page.service_5_desc')
        }
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: '300px', md: '500px' },
                    backgroundImage: `url(${groupImage})`,
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
                        backgroundColor: 'rgba(0,0,0,0.5)'
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
                            {t('alokon_page.hero_title')}
                        </Typography>
                        <Typography variant="h5" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
                            {t('alokon_page.hero_subtitle')}
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={() => openDrawer()}
                            startIcon={<VolunteerActivism />}
                            sx={{ borderRadius: 50, px: 4, py: 1.5, fontSize: '1.1rem' }}
                        >
                            {t('alokon_page.cta_button')}
                        </Button>
                    </motion.div>
                </Container>
            </Box>

            {/* About Section */}
            <Container sx={{ py: 8 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="overline" color="secondary" fontWeight={700}>
                            {t('alokon_page.about_feature')}
                        </Typography>
                        <Typography variant="h3" fontWeight={700} gutterBottom sx={{ mt: 1 }}>
                            {t('alokon_page.about_title')}
                        </Typography>
                        <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            {t('alokon_page.about_p1')}
                        </Typography>
                        <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            {t('alokon_page.about_p2')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 1,
                                borderRadius: 4,
                                transform: 'rotate(2deg)',
                                transition: 'transform 0.3s',
                                '&:hover': { transform: 'rotate(0deg)' }
                            }}
                        >
                            <Box
                                component="img"
                                src={counselingImage}
                                alt="Counseling Session"
                                sx={{ width: '100%', borderRadius: 3 }}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Services Grid */}
            <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
                <Container>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h4" fontWeight={700} gutterBottom>
                            {t('alokon_page.services_title')}
                        </Typography>
                    </Box>
                    <Grid container spacing={4} justifyContent="center">
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        borderRadius: 4,
                                        transition: 'all 0.3s',
                                        '&:hover': { transform: 'translateY(-5px)', boxShadow: 3 },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Box sx={{ mb: 2, p: 1.5, bgcolor: 'primary.50', borderRadius: 2 }}>{service.icon}</Box>
                                    <Typography variant="h6" fontWeight={700} gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                        {service.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Payment Model & CTA */}
            <Container sx={{ py: 8 }}>
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 4, md: 8 },
                        borderRadius: 4,
                        bgcolor: 'secondary.main',
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        {t('alokon_page.payment_title')}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: '800px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        {t('alokon_page.payment_desc')}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => openDrawer()}
                        sx={{ bgcolor: 'white', color: 'secondary.main', '&:hover': { bgcolor: 'grey.100' }, fontWeight: 700 }}
                    >
                        {t('alokon_page.cta_button')}
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
};
