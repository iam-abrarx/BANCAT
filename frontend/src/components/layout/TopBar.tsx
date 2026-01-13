import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Email, Phone, LocationOn, Favorite } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const TopBar = () => {
    return (
        <Box sx={{ bgcolor: 'white', py: 1.5, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <Container maxWidth={false} sx={{ maxWidth: '100% !important', px: 4 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                >
                    {/* Left: Logo */}
                    <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', ml: 8 }}>
                        <img src={logo} alt="BANCAT" style={{ height: '40px', width: 'auto' }} />
                    </Box>

                    {/* Middle: Contact Info */}
                    <Stack direction="row" spacing={5} alignItems="center" sx={{ display: { xs: 'none', lg: 'flex' }, ml: 24 }}>
                        {/* Email */}
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <Email sx={{ color: '#6A1B9A', fontSize: 32 }} />
                            <Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: 500, color: '#444', fontSize: '14px' }}>
                                support@bancat.org.bd
                            </Typography>
                        </Stack>

                        {/* Phone */}
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <Phone sx={{ color: '#6A1B9A', fontSize: 32 }} />
                            <Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: 500, color: '#444', fontSize: '14px' }}>
                                +880 1612 226223
                            </Typography>
                        </Stack>

                        {/* Address */}
                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ pr: 3 }}>
                            <LocationOn sx={{ color: '#6A1B9A', fontSize: 32 }} />
                            <Box>
                                <Typography
                                    variant="caption"
                                    display="block"
                                    sx={{ fontFamily: 'Montserrat', lineHeight: 1.2, color: '#555', fontSize: '12px' }}
                                >
                                    Floor-5A, House-11/A, Suvastu Amirul Villa,
                                    Road-36, Gulshan-2, Dhaka
                                </Typography>

                                <Typography
                                    variant="caption"
                                    display="block"
                                    sx={{ fontFamily: 'Montserrat', lineHeight: 1.2, color: '#555', fontSize: '12px' }}
                                >
                                    Mosabbir Memorial Alok Nibash 1:<br />
                                    House-144, Road-03, Block-A,
                                    Bashundhara R/A, Dhaka-1229
                                </Typography>

                                <Typography
                                    variant="caption"
                                    display="block"
                                    sx={{ fontFamily: 'Montserrat', lineHeight: 1.2, color: '#555', fontSize: '12px' }}
                                >
                                    Mosabbir Memorial Alok Nibash 2:<br />
                                    House-3220, Road-66, Block-L,
                                    Bashundhara R/A, Dhaka-1229
                                </Typography>

                            </Box>
                        </Stack>
                    </Stack>

                    {/* Right: CTAs */}
                    <Stack direction="row" spacing={1.5} sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
                        <Button
                            variant="contained"
                            component={RouterLink}
                            to="/patients"
                            sx={{
                                fontFamily: 'Montserrat',
                                background: '#914aaf !important',
                                backgroundImage: 'none !important',
                                borderRadius: '30px',
                                textTransform: 'none',
                                fontWeight: 500,
                                px: 2.5,
                                py: 0.5,
                                fontSize: '14px',
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#7a3e93', boxShadow: 'none' }
                            }}
                        >
                            Support A Patient
                        </Button>
                        <Button
                            variant="contained"
                            component={RouterLink}
                            to="/donate"
                            endIcon={<Favorite sx={{ fontSize: 16 }} />}
                            sx={{
                                fontFamily: 'Montserrat',
                                background: '#f5aa21 !important',
                                backgroundImage: 'none !important',
                                borderRadius: '30px',
                                textTransform: 'none',
                                fontWeight: 500,
                                px: 3,
                                py: 0.5,
                                fontSize: '14px',
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#d48f1c', boxShadow: 'none' }
                            }}
                        >
                            Donate
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};
