import { useEffect, useState } from 'react';
import { Container, Typography, Grid, Box, CircularProgress, Modal, IconButton } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { getAssetUrl } from '../../config/api';
import { galleryService, type Gallery } from '../../services/galleryService';
import CloseIcon from '@mui/icons-material/Close';

export const GalleryDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [gallery, setGallery] = useState<Gallery | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchGallery = async () => {
            if (!slug) return;
            try {
                const data = await galleryService.getBySlug(slug);
                setGallery(data);
            } catch (error) {
                console.error('Failed to fetch gallery', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, [slug]);

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}><CircularProgress /></Box>;
    if (!gallery) return <Typography variant="h6" textAlign="center" sx={{ py: 10 }}>Gallery not found.</Typography>;

    return (
        <Box>
            <Helmet>
                <title>{gallery.title_en} | BANcat</title>
            </Helmet>

            <Box sx={{ bgcolor: 'secondary.main', py: 6, color: 'white', textAlign: 'center', mb: 6 }}>
                <Container>
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        {gallery.title_en}
                    </Typography>
                    {gallery.description_en && (
                        <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 800, mx: 'auto' }}>
                            {gallery.description_en}
                        </Typography>
                    )}
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mb: 10 }}>
                {!gallery.images || gallery.images.length === 0 ? (
                    <Typography variant="body1" textAlign="center">No photos in this gallery.</Typography>
                ) : (
                    <Grid container spacing={2}>
                        {gallery.images.map((img) => (
                            <Grid item xs={6} md={3} key={img.id}>
                                <Box
                                    component="img"
                                    src={getAssetUrl(img.image_url) || ''}
                                    alt={img.caption_en || 'Gallery Image'}
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover',
                                        borderRadius: 2,
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s',
                                        '&:hover': { transform: 'scale(1.02)' }
                                    }}
                                    onClick={() => setSelectedImage(getAssetUrl(img.image_url) || null)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>

            {/* Lightbox Modal */}
            <Modal
                open={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.9)' }}
            >
                <Box position="relative" maxWidth="90vw" maxHeight="90vh">
                    <IconButton
                        onClick={() => setSelectedImage(null)}
                        sx={{ position: 'absolute', top: -40, right: 0, color: 'white' }}
                    >
                        <CloseIcon fontSize="large" />
                    </IconButton>
                    {selectedImage && (
                        <img src={selectedImage} alt="Full view" style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }} />
                    )}
                </Box>
            </Modal>
        </Box>
    );
};
