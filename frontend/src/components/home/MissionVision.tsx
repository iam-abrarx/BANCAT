import { Box, Container, Typography, Button } from '@mui/material';

// Import partner logos
import logo1 from '../../assets/partners/Asset 11@5x.png';
import logo2 from '../../assets/partners/Asset 12@5x.png';
import logo3 from '../../assets/partners/Asset 13@5x.png';
import logo4 from '../../assets/partners/Asset 14@5x.png';
import logo5 from '../../assets/partners/Asset 15@5x.png';
import logo6 from '../../assets/partners/Asset 16@5x.png';
import logo7 from '../../assets/partners/Asset 17@5x.png';

const partners = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

export const MissionVision = () => {
    return (
        <Box>
            {/* Top Purple Section */}
            <Box sx={{ bgcolor: '#582d82', color: 'white', py: 10, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            fontFamily: "'Montserrat', sans-serif",
                            mb: 1
                        }}
                    >
                        BANCAT
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 500,
                            fontFamily: "'Montserrat', sans-serif",
                            mb: 4
                        }}
                    >
                        A Comprehensive Cancer Care Approach
                    </Typography>

                    <Typography sx={{ mb: 3, lineHeight: 1.6 }}>
                        Bangladesh Cancer Aid Trust (BANCAT) is a community-driven organization providing care beyond
                        treatment through awareness, advocacy, facilitated cancer scopes, and a safe sanctuary of support for
                        patients and their families.
                    </Typography>

                    <Typography sx={{ mb: 1, fontWeight: 700 }}>
                        Vision:
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        To advance societal impact through compassionate, community-driven cancer care and support.
                    </Typography>

                    <Typography sx={{ mb: 1, fontWeight: 700 }}>
                        Mission:
                    </Typography>
                    <Typography sx={{ mb: 5 }}>
                        Develop a cancer well-being ecosystem in Bangladesh.
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: 'white',
                            color: '#582d82',
                            borderRadius: '50px',
                            px: 4,
                            py: 1.5,
                            fontWeight: 600,
                            textTransform: 'none',
                            mb: 6,
                            '&:hover': {
                                bgcolor: '#f0f0f0'
                            }
                        }}
                    >
                        Learn More
                    </Button>

                    <Typography variant="h5" sx={{ fontWeight: 600, fontFamily: "'Montserrat', sans-serif" }}>
                        Our Partners
                    </Typography>
                </Container>
            </Box>

            {/* Bottom Partners Strip */}
            <Box sx={{ bgcolor: '#dcdcdc', py: 4 }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: { xs: 3, md: 6 }
                        }}
                    >
                        {partners.map((logo, index) => (
                            <Box
                                key={index}
                                component="img"
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                sx={{
                                    height: { xs: 30, md: 50 },
                                    width: 'auto',
                                    objectFit: 'contain',
                                    // mixBlendMode: 'multiply' // Optional: if logos have white backgrounds, this helps blend them. 
                                    // Assuming PNGs have transparent backgrounds based on "logo" usage.
                                }}
                            />
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};
