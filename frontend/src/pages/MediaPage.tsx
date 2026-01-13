import { Container, Typography, Box, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { SEOHead } from '../components/common/SEOHead';
import { Article, PhotoLibrary, YouTube } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const MediaPage = () => {
    const navigate = useNavigate();

    const sections = [
        {
            title: 'Stories & News',
            description: 'Read inspiring stories of our patients and latest updates from BANCAT.',
            icon: <Article sx={{ fontSize: 60, color: '#f50057' }} />,
            link: '/stories'
        },
        {
            title: 'Photo Gallery',
            description: 'Visual highlights of our events, campaigns, and community interactions.',
            icon: <PhotoLibrary sx={{ fontSize: 60, color: '#2196f3' }} />,
            link: '/gallery'
        },
        {
            title: 'Video Archive',
            description: 'Watch documentaries, testimonials, and campaign videos.',
            icon: <YouTube sx={{ fontSize: 60, color: '#d32f2f' }} />,
            link: '/gallery' // Assuming video is part of gallery or stories
        }
    ];

    return (
        <>
            <SEOHead />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box mb={8} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            Media Center
                        </Typography>
                        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
                            Explore our stories, photos, and updates.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {sections.map((section, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card sx={{ height: '100%', borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 4 } }}>
                                    <CardActionArea onClick={() => navigate(section.link)} sx={{ height: '100%', p: 3 }}>
                                        <CardContent sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            {section.icon}
                                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 2 }}>
                                                {section.title}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {section.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};
