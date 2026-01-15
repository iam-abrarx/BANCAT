import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import logos (assuming order based on filenames, can be swapped)
import logo1 from '../../assets/impact_cards/Asset 6@5x.png';
import logo2 from '../../assets/impact_cards/Asset 7@5x.png';
import logo3 from '../../assets/impact_cards/Asset 8@5x.png';
import logo4 from '../../assets/impact_cards/Asset 9@5x.png';

const Counter = ({ from, to, suffix = '' }: { from: number; to: number; suffix?: string }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !inView) return;

        // Ensure we handle locale string conversion inside update if needed, but for animation numbers are better raw
        const controls = animate(from, to, {
            duration: 2.5,
            onUpdate(value) {
                // Formatting number for display
                node.textContent = Math.round(value).toLocaleString() + suffix;
            }
        });

        return () => controls.stop();
    }, [from, to, suffix, inView]);

    return <span ref={nodeRef} />;
};

export const ImpactCards = () => {
    const { t } = useTranslation();

    const stats = [
        {
            number: 2000,
            suffix: '+',
            label: t('impact.holistic'),
            branding: { logo: logo1, height: 60 }
        },
        {
            number: 90,
            suffix: '+',
            label: t('impact.bed_facility'),
            branding: { logo: logo2, height: 60 }
        },
        {
            number: 300,
            suffix: '+',
            label: t('impact.counseling'),
            branding: { logo: logo3, height: 85 }
        },
        {
            number: 400,
            suffix: '+',
            label: t('impact.handmade'),
            branding: { logo: logo4, height: 65 }
        }
    ];

    return (
        <Box sx={{ bgcolor: '#582d82', py: 20 }}>
            <Container maxWidth="lg">
                <Grid container spacing={1.5} justifyContent="center" sx={{ px: { xs: 2, md: 0 } }}>
                    {stats.map((stat, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                sx={{
                                    bgcolor: '#d631e9', // Vibrant orchid/magenta from design
                                    color: 'white',
                                    borderRadius: {
                                        xs: '0',
                                        md: index === 0 ? '50px 0 0 50px' :
                                            index === stats.length - 1 ? '0 50px 50px 0' :
                                                '0'
                                    },
                                    height: '100%',
                                    minHeight: '280px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    boxShadow: 'none',
                                    p: 2,
                                    position: 'relative'
                                }}
                            >
                                <CardContent sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: 400,
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontSize: { xs: '3rem', md: '3.5rem' },
                                            lineHeight: 1,
                                            mb: 1
                                        }}
                                    >
                                        <Counter from={0} to={stat.number} suffix={stat.suffix} />
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '0.9rem',
                                            lineHeight: 1.4,
                                            mb: 4,
                                            maxWidth: '180px',
                                            fontWeight: 500
                                        }}
                                    >
                                        {stat.label}
                                    </Typography>

                                    <Box
                                        sx={{
                                            mt: 'auto',
                                            minHeight: '80px', // Allow enough space but flexible
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <img
                                            src={stat.branding.logo}
                                            alt="brand logo"
                                            style={{
                                                maxHeight: stat.branding.height,
                                                maxWidth: '140px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ImpactCards;
