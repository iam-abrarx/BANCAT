import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Mock Data - In real app, this would come from an API
const stories = [
    {
        id: 1,
        name: "Adopt a patient",
        category: "Patient Sponsorship",
        image: "/story-placeholder.jpg",
        quote: "You can directly fund different medical expenses for critical care through targeted donations starting from a small amount. Mid to long-term adoption options are also available.",
        raised: 150000,
        goal: 500000
    },
    {
        id: 2,
        name: "Fight Cancer in this Ramadan",
        category: "Zakat Fund",
        image: "/story-placeholder.jpg",
        quote: "Fund life-saving treatments for underprivileged patients this Ramadan. Your Zakat and Sadaqa provide essential medical care and hope.",
        raised: 850000,
        goal: 2000000
    },
    {
        id: 3,
        name: "Save a Mother",
        category: "Breast Cancer Awareness",
        image: "/story-placeholder.jpg",
        quote: "Support “Maa Bachao, Bachao Desh” to help early detection programs for breast cancer. Your contribution provides life-saving screenings and essential medical support.",
        raised: 320000,
        goal: 1000000
    }
];

export const PatientStoriesCarousel = () => {
    return (
        <Box sx={{ py: 10, bgcolor: '#f9f9f9' }}>
            <Container maxWidth="lg">
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
                        STORIES OF HOPE
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
                        Lives We Are Touching
                    </Typography>
                </Box>

                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    style={{ paddingBottom: '50px' } as any}
                >
                    {stories.map((story) => (
                        <SwiperSlide key={story.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '20px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
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
                                                Raised: ৳{story.raised.toLocaleString()}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Goal: ৳{story.goal.toLocaleString()}
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
                                            Read Full Story
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button
                        component={RouterLink}
                        to="/stories"
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: '#582d82',
                            color: 'white',
                            borderRadius: '50px',
                            px: 5,
                            py: 1.5,
                            textTransform: 'none',
                            fontWeight: 600,
                            boxShadow: '0 4px 15px rgba(88, 45, 130, 0.3)',
                            '&:hover': {
                                bgcolor: '#4a2570'
                            }
                        }}
                    >
                        View All Stories
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
