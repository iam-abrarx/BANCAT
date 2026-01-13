import { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Box, CircularProgress } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { galleryService, type Gallery } from '../../services/galleryService';
import { getAssetUrl } from '../../config/api';
import { motion } from 'framer-motion';

export const GalleryList = () => {
    const [galleries, setGalleries] = useState<Gallery[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGalleries = async () => {
            try {
                const data = await galleryService.getAll();
                setGalleries(data);
            } catch (error) {
                console.error('Failed to fetch galleries', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGalleries();
    }, []);

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}><CircularProgress /></Box>;

    return (
        <Box>
            <Helmet>
                <title>Photo Gallery | BANcat</title>
                <meta name="description" content="Explore our photo gallery to see our activities and impact." />
            </Helmet>

            <Box sx={{ bgcolor: 'secondary.main', py: 8, color: 'white', textAlign: 'center', mb: 6 }}>
                <Container>
                    <Typography variant="h2" fontWeight="bold" gutterBottom>
                        Photo Gallery
                    </Typography>
                    <Typography variant="h5" sx={{ opacity: 0.9 }}>
                        Moments captured from our journey.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mb: 10 }}>
                {galleries.length === 0 ? (
                    <Typography variant="h6" textAlign="center" color="text.secondary">
                        No galleries found.
                    </Typography>
                ) : (
                    <Grid container spacing={4}>
                        {galleries.map((gallery) => (
                            <Grid item xs={12} sm={6} md={4} key={gallery.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                                        <CardActionArea onClick={() => navigate(`/gallery/${gallery.slug}`)} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <CardMedia
                                                component="img"
                                                height="240"
                                                image={getAssetUrl(gallery.featured_image) || '/assets/placeholder-image.png'}
                                                alt={gallery.title_en}
                                                sx={{ objectFit: 'cover' }}
                                            />
                                            <CardContent sx={{ flexGrow: 1, width: '100%' }}>
                                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                                    {gallery.title_en}
                                                </Typography>
                                                {gallery.date && (
                                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                        {new Date(gallery.date).toLocaleDateString()}
                                                    </Typography>
                                                )}
                                                <Typography variant="body2" color="text.secondary">
                                                    {gallery.images_count || 0} Photos
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
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
