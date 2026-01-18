import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { ShoppingBag, VolunteerActivism } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDonationDrawer } from '../contexts/DonationDrawerContext';
import stallImage from '../assets/projects/alok_katha/stall.jpg';
import productsImage from '../assets/projects/alok_katha/products.jpg';

export const AlokKatha = () => {
    const { t } = useTranslation();
    const { openDrawer } = useDonationDrawer();

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: '300px', md: '500px' },
                    backgroundImage: `url(${stallImage})`,
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
                        backgroundColor: 'rgba(0,0,0,0.6)'
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
                            {t('alok_katha_page.hero_title')}
                        </Typography>
                        <Typography variant="h5" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
                            {t('alok_katha_page.hero_subtitle')}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => openDrawer()}
                            startIcon={<ShoppingBag />}
                            sx={{ borderRadius: 50, px: 4, py: 1.5, fontSize: '1.1rem' }}
                        >
                            Support Our Artisans
                        </Button>
                    </motion.div>
                </Container>
            </Box>

            {/* About Section */}
            <Container sx={{ py: 8 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 1,
                                borderRadius: 4,
                                transform: 'rotate(-2deg)',
                                transition: 'transform 0.3s',
                                '&:hover': { transform: 'rotate(0deg)' }
                            }}
                        >
                            <Box
                                component="img"
                                src={productsImage}
                                alt="Alok Katha Products"
                                sx={{ width: '100%', borderRadius: 3 }}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="overline" color="primary" fontWeight={700}>
                            {t('alok_katha_page.about_feature')}
                        </Typography>
                        <Typography variant="h3" fontWeight={700} gutterBottom sx={{ mt: 1 }}>
                            {t('alok_katha_page.about_title')}
                        </Typography>
                        <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            {t('alok_katha_page.about_p1')}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* Impact/Mission Section */}
            <Box sx={{ bgcolor: 'secondary.main', color: 'white', py: 8 }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Empathy in Action
                    </Typography>
                    <Typography variant="h6" sx={{ fontStyle: 'italic', opacity: 0.9, lineHeight: 1.8 }}>
                        {t('alok_katha_page.about_p2')}
                    </Typography>
                    <Box sx={{ mt: 4, width: 80, height: 4, bgcolor: 'white', mx: 'auto', borderRadius: 2 }} />
                </Container>
            </Box>

            {/* CTA Section */}
            <Container sx={{ py: 8, textAlign: 'center' }}>
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 4, md: 8 },
                        borderRadius: 4,
                        bgcolor: 'grey.50',
                        border: '1px dashed #bdbdbd'
                    }}
                >
                    <VolunteerActivism color="primary" sx={{ fontSize: 60, mb: 2 }} />
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Support The Cause
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
                        Your support helps us provide raw materials, training, and fair wages to our survivor-artisans.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => openDrawer()}
                        sx={{ borderRadius: 50, px: 6 }}
                    >
                        Make a Donation
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
};
