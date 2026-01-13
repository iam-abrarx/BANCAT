import { useParams, Link as RouterLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Typography, Box, Button, Chip, Avatar, Divider } from '@mui/material';
import { blogService } from '../services/blogService';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { useTranslation } from 'react-i18next';
import { ArrowBack, CalendarMonth, Visibility } from '@mui/icons-material';
import { format } from 'date-fns';
import { getAssetUrl } from '../config/api';
import { NotFound } from './NotFound';

export const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { t, i18n } = useTranslation();
    const isBn = i18n.language === 'bn';

    const { data: blog, isLoading, error } = useQuery({
        queryKey: ['blog', slug],
        queryFn: () => blogService.getBySlug(slug!),
        enabled: !!slug,
        retry: false
    });

    if (isLoading) return <LoadingSpinner fullScreen />;
    if (error || !blog) return <NotFound />;

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Button component={RouterLink} to="/blogs" startIcon={<ArrowBack />} sx={{ mb: 4, color: 'text.secondary' }}>
                Back to Blog
            </Button>

            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Chip label="Blog Post" color="primary" sx={{ mb: 2, fontWeight: 'bold' }} />
                <Typography variant="h2" component="h1" fontWeight="800" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                    {isBn ? (blog.title_bn || blog.title_en) : blog.title_en}
                </Typography>

                <Box display="flex" justifyContent="center" alignItems="center" gap={3} mt={3} color="text.secondary" flexWrap="wrap">
                    <Box display="flex" alignItems="center" gap={1}>
                        <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>{blog.author?.[0] || 'B'}</Avatar>
                        <Typography variant="subtitle2">{blog.author || 'BANCAT Team'}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                        <CalendarMonth fontSize="small" />
                        <Typography variant="subtitle2">{blog.published_at ? format(new Date(blog.published_at), 'MMM dd, yyyy') : 'Unknown'}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Visibility fontSize="small" />
                        <Typography variant="subtitle2">{blog.views} Views</Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                component="img"
                src={getAssetUrl(blog.image) || 'https://placehold.co/800x400?text=Blog+Cover'}
                alt={blog.title_en}
                sx={{ width: '100%', borderRadius: 4, mb: 6, boxShadow: 3 }}
            />

            <Box sx={{
                typography: 'body1',
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: 'text.primary',
                '& p': { mb: 3 },
                '& h2': { fontSize: '1.8rem', fontWeight: 'bold', mt: 4, mb: 2, color: 'primary.main' },
                '& h3': { fontSize: '1.5rem', fontWeight: 'bold', mt: 3, mb: 2 },
                '& ul': { mb: 3, pl: 4 },
                '& li': { mb: 1 },
                '& img': { maxWidth: '100%', height: 'auto', borderRadius: 2, my: 4 }
            }}>
                <div dangerouslySetInnerHTML={{ __html: isBn ? (blog.content_bn || blog.content_en) : blog.content_en }} />
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Optional: Add Share buttons or Related posts here */}
        </Container>
    );
};
