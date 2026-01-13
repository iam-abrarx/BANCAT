import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActionArea, Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { blogService } from '../services/blogService';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarMonth, ArrowForward } from '@mui/icons-material';
import { format } from 'date-fns';
import { getAssetUrl } from '../config/api';
import type { Blog } from '../types';

export const BlogList = () => {
    const { t, i18n } = useTranslation();
    const isBn = i18n.language === 'bn';

    const { data, isLoading, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: () => blogService.getAll(),
    });

    if (isLoading) return <LoadingSpinner fullScreen />;
    if (error) {
        console.error('Blog load error:', error);
        return (
            <Container sx={{ py: 10 }}>
                <Typography color="error" variant="h6">Error loading blogs</Typography>
                <Typography color="error" variant="body2">
                    {(error as any).message}
                </Typography>
                {(error as any).response && (
                    <Box mt={2} p={2} bgcolor="#ffebee" borderRadius={1}>
                        <Typography variant="caption" fontFamily="monospace">
                            Status: {(error as any).response.status} <br />
                            {JSON.stringify((error as any).response.data)}
                        </Typography>
                    </Box>
                )}
            </Container>
        );
    }

    const blogs = data?.data || [];

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box mb={6} textAlign="center">
                <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" color="primary">
                    {t('nav.blogs', 'Our Blog')}
                </Typography>
                <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
                    Latest updates, news, and articles from BANCAT.
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {blogs.map((blog: Blog) => (
                    <Grid item key={blog.id} xs={12} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 } }}>
                            <CardActionArea component={RouterLink} to={`/blogs/${blog.slug}`} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={getAssetUrl(blog.image) || 'https://placehold.co/600x400?text=Blog'}
                                    alt={blog.title_en}
                                />
                                <CardContent sx={{ p: 3, width: '100%' }}>
                                    <Box display="flex" alignItems="center" gap={2} mb={2} color="text.secondary" fontSize="0.875rem">
                                        <Box display="flex" alignItems="center" gap={0.5}>
                                            <CalendarMonth fontSize="small" />
                                            {blog.published_at ? format(new Date(blog.published_at), 'MMM dd, yyyy') : 'Recently'}
                                        </Box>
                                    </Box>
                                    <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {isBn ? (blog.title_bn || blog.title_en) : blog.title_en}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph sx={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {/* Simple strip tags for excerpt */}
                                        {(isBn ? (blog.content_bn || blog.content_en) : blog.content_en).replace(/<[^>]+>/g, '')}
                                    </Typography>
                                    <Button endIcon={<ArrowForward />} sx={{ mt: 2, p: 0 }} disableRipple>
                                        Read More
                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {blogs.length === 0 && (
                <Box textAlign="center" py={10}>
                    <Typography color="text.secondary">No posts found yet.</Typography>
                </Box>
            )}
        </Container>
    );
};
