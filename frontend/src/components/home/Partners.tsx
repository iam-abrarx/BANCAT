import { Box, Container, Typography } from '@mui/material';

// Import partner logos
import logo1 from '../../assets/partners/Asset 11@5x.png';
import logo2 from '../../assets/partners/Asset 12@5x.png';
import logo3 from '../../assets/partners/Asset 13@5x.png';
import logo4 from '../../assets/partners/Asset 14@5x.png';
import logo5 from '../../assets/partners/Asset 15@5x.png';
import logo6 from '../../assets/partners/Asset 16@5x.png';

const partners = [logo1, logo2, logo3, logo4, logo5, logo6];

export const Partners = () => {
    return (
        <Box sx={{ bgcolor: 'white', py: 8 }}>
            <Container maxWidth="lg">
                {/* Our Partners Heading */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontFamily: "'Montserrat', sans-serif",
                            color: '#333',
                            mb: 1
                        }}
                    >
                        Our Partners
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Trusted collaborators making a difference together
                    </Typography>
                </Box>

                {/* Partner Logos */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: { xs: 4, md: 8 }
                    }}
                >
                    {partners.map((logo, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={logo}
                            alt={`Partner ${index + 1}`}
                            sx={{
                                height: index === 1 ? { xs: 30, md: 45 } : { xs: 40, md: 60 },
                                width: 'auto',
                                objectFit: 'contain',
                                filter: 'none',
                                opacity: 1,
                                transition: 'all 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.1)'
                                }
                            }}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};
