import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


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
                            background: 'linear-gradient(45deg, #F39C12 30%, #F7DC6F 90%)',
                            color: '#333',
                            borderRadius: '50px',
                            px: 4,
                            py: 1.25,
                            fontSize: '1rem',
                            fontWeight: 700,
                            textTransform: 'none',
                            boxShadow: 'none',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #D68910 30%, #F1C40F 90%)',
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
