import { Box, Container } from '@mui/material';

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
        <Box sx={{ bgcolor: 'white', py: 6, borderBottom: '1px solid #eee' }}>
            <Container maxWidth="lg">
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
                                height: index === 1 ? { xs: 30, md: 45 } : { xs: 40, md: 60 }, // Keep 2nd logo same, increase others
                                width: 'auto',
                                objectFit: 'contain',
                                filter: 'none', // True color
                                opacity: 1,     // Full opacity
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
