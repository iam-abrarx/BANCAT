import { Box, Button, Container, Typography } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import bibiParallax from '../../assets/bibi_paralax.webp';
import { useTranslation } from 'react-i18next';

export const ParallaxStory = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                backgroundImage: `url(${bibiParallax})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '850px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                py: 10,
                // Overlay for better text readability
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Light dark overlay
                }
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ maxWidth: '600px' }}>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#6A1B9A', // Purple color from design
                            fontWeight: 700,
                            fontFamily: "'Montserrat', sans-serif",
                            mb: 3,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            textTransform: 'uppercase'
                        }}
                    >
                        {t('story.rabbi.title')}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: '#1a1a1a',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.6,
                            mb: 4,
                            fontWeight: 500,
                            textShadow: '0 1px 2px rgba(255,255,255,0.5)' // Text shadow for readability on image
                        }}
                    >
                        {t('story.rabbi.description')}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Button
                            component={RouterLink}
                            to="/patient/rabbi" // Assuming a patient profile route
                            variant="contained"
                            sx={{
                                background: '#582d82 !important', // Force override global theme gradient
                                color: 'white',
                                borderRadius: '50px',
                                px: 4,
                                py: 1.25,
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                boxShadow: 'none',
                                '&:hover': {
                                    background: '#4a2570 !important',
                                    boxShadow: 'none'
                                }
                            }}
                        >
                            {t('story.rabbi.cta_profile')}
                        </Button>

                        <Button
                            component={RouterLink}
                            to="/donate"
                            variant="contained"
                            endIcon={<Favorite sx={{ fontSize: '18px !important' }} />}
                            sx={{
                                background: '#f5aa21 !important', // Force override global theme gradient
                                color: 'white',
                                borderRadius: '50px',
                                px: 4,
                                py: 1.25,
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                boxShadow: 'none',
                                '&:hover': {
                                    background: '#e09a1e !important',
                                    boxShadow: 'none'
                                }
                            }}
                        >
                            {t('story.rabbi.cta_donate')}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
