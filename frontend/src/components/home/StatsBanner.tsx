import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const StatsBanner = () => {
    return (
        <Box
            sx={{
                bgcolor: '#582d82',
                py: { xs: 12, md: 20 },
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    {/* Top Label */}
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#FFC107',
                            fontWeight: 700,
                            fontSize: { xs: '0.875rem', md: '1rem' },
                            letterSpacing: '2px',
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        THE TIME TO ACT IS NOW
                    </Typography>

                    {/* Main Stat */}
                    <Typography
                        variant="h1"
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                            lineHeight: 1.1,
                            mb: 2
                        }}
                    >
                        Over 116,000
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'rgba(255,255,255,0.95)',
                            fontWeight: 400,
                            fontSize: { xs: '1.1rem', md: '1.5rem' },
                            mb: 4,
                            maxWidth: '700px',
                            mx: 'auto'
                        }}
                    >
                        Bangladeshis will die from cancer this year
                    </Typography>

                    {/* CTA Button */}
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="/donate"
                        size="large"
                        sx={{
                            bgcolor: '#FFC107',
                            color: '#1a1a1a',
                            borderRadius: '50px',
                            px: 4,
                            py: 1.25,
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            boxShadow: 'none',
                            '&:hover': {
                                bgcolor: '#FFD54F',
                                boxShadow: 'none'
                            }
                        }}
                    >
                        Make An Impact
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
