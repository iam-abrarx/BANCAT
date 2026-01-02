import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Email, Phone, LocationOn, Favorite } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const TopBar = () => {
    return (
        <Box sx={{ bgcolor: 'transparent', py: 2 }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        bgcolor: 'white',
                        borderRadius: '100px',
                        py: 1,
                        px: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    {/* Left: Logo */}
                    <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="BANCAT" style={{ height: '40px', width: 'auto' }} />
                    </Box>

                    {/* Middle: Contact Info */}
                    <Stack direction="row" spacing={5} alignItems="center" sx={{ display: { xs: 'none', lg: 'flex' }, mx: 4 }}>
                        {/* Email */}
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <Email sx={{ color: '#6A1B9A', fontSize: 24 }} />
                            <Typography variant="body2" sx={{ fontWeight: 500, color: '#444', fontSize: '13px' }}>
                                support@bancat.org.bd
                            </Typography>
                        </Stack>

                        {/* Phone */}
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <Phone sx={{ color: '#6A1B9A', fontSize: 24 }} />
                            <Typography variant="body2" sx={{ fontWeight: 500, color: '#444', fontSize: '13px' }}>
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
                                    sx={{ lineHeight: 1.2, color: '#555', fontSize: '11px' }}
                                >
                                    Floor-5A, House-11/A, Suvastu Amirul Villa,<br />
                                    Road-36, Gulshan-2, Dhaka
                                </Typography>

                                <Typography
                                    variant="caption"
                                    display="block"
                                    sx={{ lineHeight: 1.2, color: '#555', fontSize: '11px' }}
                                >
                                    Mosabbir Memorial Alok Nibash 1:<br />
                                    House-144, Road-03, Block-A,
                                    Bashundhara R/A, Dhaka-1229
                                </Typography>

                                <Typography
                                    variant="caption"
                                    display="block"
                                    sx={{ lineHeight: 1.2, color: '#555', fontSize: '11px' }}
                                >
                                    Mosabbir Memorial Alok Nibash 2:<br />
                                    House-3220, Road-66, Block-L,
                                    Bashundhara R/A, Dhaka-1229
                                </Typography>

                            </Box>
                        </Stack>
                    </Stack>

                    {/* Right: CTAs */}
                    <Stack direction="row" spacing={1.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            variant="contained"
                            component={RouterLink}
                            to="/support-patient"
                            sx={{
                                bgcolor: '#8E44AD',
                                borderRadius: '30px',
                                textTransform: 'none',
                                fontWeight: 500,
                                px: 2.5,
                                py: 0.5,
                                fontSize: '14px',
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#732d91', boxShadow: 'none' }
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
                                bgcolor: '#F39C12',
                                borderRadius: '30px',
                                textTransform: 'none',
                                fontWeight: 500,
                                px: 3,
                                py: 0.5,
                                fontSize: '14px',
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#d68910', boxShadow: 'none' }
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
