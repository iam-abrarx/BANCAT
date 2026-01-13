import { useEffect, useState } from 'react';
import { getAssetUrl } from '../../config/api';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box, CircularProgress } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { testimonialService, type Testimonial } from '../../services/testimonialService';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { motion } from 'framer-motion';

export const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const data = await testimonialService.getAll();
                setTestimonials(data);
            } catch (error) {
                console.error('Failed to fetch testimonials', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}><CircularProgress /></Box>;

    return (
        <Box>
            <Helmet>
                <title>Testimonials | BANcat</title>
                <meta name="description" content="What people say about Bangladesh Cancer Aid Trust." />
            </Helmet>

            <Box sx={{ bgcolor: 'secondary.main', py: 8, color: 'white', textAlign: 'center', mb: 6 }}>
                <Container>
                    <Typography variant="h2" fontWeight="bold" gutterBottom>
                        Testimonials
                    </Typography>
                    <Typography variant="h5" sx={{ opacity: 0.9 }}>
                        Hear from our supporters and beneficiaries.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mb: 10 }}>
                {testimonials.length === 0 ? (
                    <Typography variant="h6" textAlign="center" color="text.secondary">
                        No testimonials found.
                    </Typography>
                ) : (
                    <Grid container spacing={4}>
                        {testimonials.map((testimonial, index) => (
                            <Grid item xs={12} md={6} lg={4} key={testimonial.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, position: 'relative', overflow: 'visible', mt: 4, boxShadow: 3 }}>
                                        <Box sx={{ position: 'absolute', top: -20, left: 30, bgcolor: 'secondary.main', borderRadius: '50%', p: 1, color: 'white' }}>
                                            <FormatQuoteIcon fontSize="large" />
                                        </Box>
                                        <CardContent sx={{ pt: 5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontStyle: 'italic', mb: 3 }}>
                                                "{testimonial.quote}"
                                            </Typography>

                                            <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center' }}>
                                                <Avatar
                                                    src={getAssetUrl(testimonial.image)}
                                                    alt={testimonial.name}
                                                    sx={{ width: 56, height: 56, mr: 2, border: '2px solid', borderColor: 'primary.main' }}
                                                >
                                                    {testimonial.name.charAt(0)}
                                                </Avatar>
                                                <Box>
                                                    <Typography variant="subtitle1" fontWeight="bold">
                                                        {testimonial.name}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {testimonial.role}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    );
};
