import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

const Counter = ({ from, to }: { from: number; to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !inView) return;

        const controls = animate(from, to, {
            duration: 2.5,
            onUpdate(value) {
                node.textContent = Math.round(value).toLocaleString();
            }
        });

        return () => controls.stop();
    }, [from, to, inView]);

    return <span ref={nodeRef} />;
};

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
                        Over <Counter from={0} to={116000} />
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

                    {/* Three Feature Boxes */}
                    <Box sx={{ mt: 8 }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ position: 'relative', height: '280px', backgroundImage: 'url(/h1-img-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', px: 4, overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(245, 170, 33, 0.75)', zIndex: 1 } }}>
                                    <Box sx={{ position: 'relative', zIndex: 2 }}>
                                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, fontFamily: 'Montserrat', mb: 3, lineHeight: 1.3, maxWidth: '280px' }}>Today is the day to reach out and lend a helping hand</Typography>
                                        <Button variant="contained" sx={{ backgroundColor: 'white !important', color: '#f5aa21 !important', borderRadius: '50px', px: 4, py: 1, fontWeight: 600, fontFamily: 'Montserrat', textTransform: 'none', fontSize: '0.95rem', boxShadow: 'none', '&:hover': { backgroundColor: 'rgba(255,255,255,0.9) !important', boxShadow: 'none' } }}>Donate</Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ position: 'relative', height: '280px', backgroundImage: 'url(/h1-img-2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', px: 4, overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 } }}>
                                    <Box sx={{ position: 'relative', zIndex: 2 }}>
                                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, fontFamily: 'Montserrat', mb: 3, lineHeight: 1.3, maxWidth: '280px' }}>Even the smallest of donations can help change a life</Typography>
                                        <Button variant="contained" sx={{ backgroundColor: 'white !important', color: '#333 !important', borderRadius: '50px', px: 4, py: 1, fontWeight: 600, fontFamily: 'Montserrat', textTransform: 'none', fontSize: '0.95rem', boxShadow: 'none', '&:hover': { backgroundColor: 'rgba(255,255,255,0.9) !important', boxShadow: 'none' } }}>Donate</Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ position: 'relative', height: '280px', backgroundImage: 'url(/h1-img-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', px: 4, overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(139, 195, 74, 0.75)', zIndex: 1 } }}>
                                    <Box sx={{ position: 'relative', zIndex: 2 }}>
                                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, fontFamily: 'Montserrat', mb: 3, lineHeight: 1.3, maxWidth: '280px' }}>Become a volunteer. You'll feel the benefits instantly</Typography>
                                        <Button variant="contained" sx={{ backgroundColor: 'white !important', color: '#8bc34a !important', borderRadius: '50px', px: 4, py: 1, fontWeight: 600, fontFamily: 'Montserrat', textTransform: 'none', fontSize: '0.95rem', boxShadow: 'none', '&:hover': { backgroundColor: 'rgba(255,255,255,0.9) !important', boxShadow: 'none' } }}>Donate</Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
