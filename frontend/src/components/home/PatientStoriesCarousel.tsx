import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

// Mock Data - In real app, this would come from an API
const getStories = (t: any) => [
    {
        id: 1,
        name: t('carousel_items.adopt.name'),
        category: t('carousel_items.adopt.category'),
        image: "/story-placeholder.jpg",
        quote: t('carousel_items.adopt.quote'),
        raised: 150000,
        goal: 500000
    },
    {
        id: 2,
        name: t('carousel_items.ramadan.name'),
        category: t('carousel_items.ramadan.category'),
        image: "/story-placeholder.jpg",
        quote: t('carousel_items.ramadan.quote'),
        raised: 850000,
        goal: 2000000
    },
    {
        id: 3,
        name: t('carousel_items.mother.name'),
        category: t('carousel_items.mother.category'),
        image: "/story-placeholder.jpg",
        quote: t('carousel_items.mother.quote'),
        raised: 320000,
        goal: 1000000
    },
    {
        id: 4,
        name: t('carousel_items.children.name'),
        category: t('carousel_items.children.category'),
        image: "/story-placeholder.jpg",
        quote: t('carousel_items.children.quote'),
        raised: 450000,
        goal: 1200000
    },
    {
        id: 5,
        name: t('carousel_items.hub.name'),
        category: t('carousel_items.hub.category'),
        image: "/story-placeholder.jpg",
        quote: t('carousel_items.hub.quote'),
        raised: 280000,
        goal: 800000
    }
];

export const PatientStoriesCarousel = () => {
    const { t } = useTranslation();
    const stories = getStories(t);

    return (
        <Box sx={{ py: 10, bgcolor: '#f9f9f9' }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#582d82',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            display: 'block',
                            mb: 1
                        }}
                    >
                        {t('stories.subtitle')}
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontFamily: "'Montserrat', sans-serif",
                            color: '#333',
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}
                    >
                        {t('stories.title')}
                    </Typography>
                </Box>

                <Box sx={{
                    position: 'relative',
                    '& .swiper': {
                        paddingBottom: '80px !important',
                        paddingTop: '20px !important', // Give space for hover transform
                        px: '15px !important', // Small padding to prevent shadow clipping at edges
                        overflow: 'hidden !important',
                        maxWidth: '100% !important',
                    },
                    '& .swiper-scrollbar': {
                        display: 'none',
                    },
                    '& .swiper-pagination': {
                        position: 'absolute !important',
                        bottom: '30px !important',
                        left: '0 !important',
                        width: '100% !important',
                        display: 'flex !important',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '6px',
                        zIndex: '20 !important',
                        margin: '0 !important'
                    },
                    '& .swiper-pagination-bullet': {
                        width: '12px',
                        height: '6px',
                        borderRadius: '6px',
                        backgroundColor: '#D1D5DB', // Gray-300
                        opacity: 1,
                        transition: 'all 0.3s ease',
                        margin: '0 !important',
                    },
                    '& .swiper-pagination-bullet-active': {
                        width: '40px',
                        backgroundColor: '#582d82', // Brand Purple
                    },
                    '& .swiper-button-next, & .swiper-button-prev': {
                        display: 'none',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100px',
                        height: '100%',
                        background: 'linear-gradient(to right, transparent, #f9f9f9)',
                        opacity: 0.8,
                        zIndex: 10,
                        pointerEvents: 'none',
                    }
                }}>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={0}
                        slidesPerView={3.0}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3.0,
                            },
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                    >
                        {stories.map((story) => (
                            <SwiperSlide key={story.id}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        maxWidth: '400px', // Maintain card size
                                        mx: 'auto', // Center card in slide
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(165, 165, 165, 0.1)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)'
                                        }
                                    }}
                                >
                                    <Box sx={{ position: 'relative', pt: '65%', bgcolor: '#e0e0e0' }}>
                                        {/* Image Placeholder if actual image missing */}
                                        <Box
                                            component="img"
                                            src={story.image}
                                            onError={(e: any) => {
                                                e.target.src = 'https://placehold.co/600x400?text=Patient+Story';
                                            }}
                                            alt={story.name}
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                                                p: 3,
                                                pt: 8
                                            }}
                                        >
                                            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, fontFamily: 'Montserrat' }}>
                                                {story.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                                                {story.category}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                mb: 3,
                                                fontStyle: 'italic',
                                                color: '#555',
                                                lineHeight: 1.6
                                            }}
                                        >
                                            "{story.quote}"
                                        </Typography>

                                        {/* Progress Bar Mockup */}
                                        <Box sx={{ mt: 'auto' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                <Typography variant="caption" fontWeight="bold" color="primary">
                                                    {t('stories.raised')}: ৳{story.raised.toLocaleString()}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary">
                                                    {t('stories.goal')}: ৳{story.goal.toLocaleString()}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ width: '100%', height: '8px', bgcolor: '#eee', borderRadius: '4px', overflow: 'hidden' }}>
                                                <Box sx={{ width: `${(story.raised / story.goal) * 100}%`, height: '100%', bgcolor: '#F39C12', borderRadius: '4px' }} />
                                            </Box>

                                            <Button
                                                component={RouterLink}
                                                to={`/stories/${story.id}`}
                                                fullWidth
                                                variant="outlined"
                                                endIcon={<ArrowForward />}
                                                sx={{
                                                    mt: 3,
                                                    borderRadius: '50px',
                                                    textTransform: 'none',
                                                    borderColor: '#582d82',
                                                    color: '#582d82',
                                                    fontWeight: 600,
                                                    '&:hover': {
                                                        borderColor: '#582d82',
                                                        bgcolor: 'rgba(88, 45, 130, 0.05)'
                                                    }
                                                }}
                                            >
                                                {t('stories.read_full')}
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    );
};
