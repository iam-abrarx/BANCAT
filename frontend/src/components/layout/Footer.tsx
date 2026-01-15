import { Box, Container, Grid, Typography, Link, Stack, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import footerImage from '../../assets/footer/Asset 20@3x.png';

export const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', color: 'white', pt: 8, pb: 4, mt: 'auto', overflow: 'hidden' }}>
            <Container maxWidth="xl" sx={{ position: 'relative' }}>
                {/* Layer 1: Bottom Line (Lowest) */}
                <Box sx={{
                    position: 'absolute',
                    bottom: '80px', // Adjust to align with where the copyright bar starts
                    left: 0,
                    right: 0,
                    height: '1px',
                    bgcolor: '#333',
                    zIndex: 0
                }} />

                {/* Layer 2: Background Image (Middle) */}
                <Box
                    component="img"
                    src={footerImage}
                    alt="BANCAT Fist"
                    sx={{
                        width: '300px',
                        maxWidth: 'none',
                        position: 'absolute',
                        bottom: 80,
                        right: '10%', // Position it towards the right side
                        zIndex: 1,
                        opacity: 0.8,
                        display: { xs: 'none', lg: 'block' }
                    }}
                />

                {/* Layer 3: Content (Highest) */}
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Grid container spacing={2}>
                        {/* SECTION 1: Contact Details (3/12) */}
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6" sx={{ fontWeight: 400, mb: 3, fontFamily: "'Montserrat', sans-serif" }}>
                                Contact Details
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2, color: 'grey.500' }}>
                                Corporate office
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 2 }}>
                                House-300E, Road-414, Block-A,Bashundhara R/A, Dhaka- 1229
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 0 }}>
                                Mosabbir Alok Nivesh Home-01
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 2 }}>
                                House-144, Road-3, Block-A, Bashundhara R/A, Dhaka- 1229
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 0 }}>
                                Mosabbir Alok Nivesh Home-02
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 4 }}>
                                House-3220, Road-66, Block-L, Bashundhara R/A, Dhaka- 1229
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 0 }}>
                                Phone: +8801303073503
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 4 }}>
                                Email: support@bancat.org.bd
                            </Typography>
                        </Grid>

                        {/* SECTION 2: Other Infos (Links) */}
                        {/* About BANCAT (2/12) */}
                        <Grid item xs={6} md={2}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 400, mb: 3 }}>About BANCAT</Typography>
                            <Stack spacing={1.5}>
                                <Link component={RouterLink} to="/about" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>About Us</Link>
                                <Link component={RouterLink} to="/approach" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>Our Approach (AAA)</Link>
                                <Link component={RouterLink} to="/services" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>Our Services / Care Centres</Link>
                                <Link component={RouterLink} to="/stories" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>Stories of Hope</Link>
                            </Stack>
                        </Grid>

                        {/* Get Involved (2/12) */}
                        <Grid item xs={6} md={2}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 400, mb: 3 }}>Get Involved</Typography>
                            <Stack spacing={1.5}>
                                <Link component={RouterLink} to="/donate" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>Donate Now</Link>
                                <Link component={RouterLink} to="/zakat" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>Zakat Calculator</Link>
                                <Link component={RouterLink} to="/contact" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>Contact Us</Link>
                                <Link component={RouterLink} to="/privacy" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>Privacy Policy</Link>
                            </Stack>
                        </Grid>

                        {/* Cancer & Support (2/12) */}
                        <Grid item xs={6} md={2}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 400, mb: 3 }}>Cancer & Support</Typography>
                            <Stack spacing={1.5}>
                                <Link component={RouterLink} to="/cancer-info" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>All About Cancer</Link>
                                <Link component={RouterLink} to="/support" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>Patient & Caregiver Support</Link>
                                <Link component={RouterLink} to="/faq" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>FAQ & Help</Link>
                                <Link component={RouterLink} to="/helpline" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>Helpline & Live Chat</Link>
                            </Stack>
                        </Grid>

                        {/*Donate & Legal (2/12) */}
                        <Grid item xs={6} md={3} sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 400, mb: 3 }}>Donate & Legal</Typography>
                            <Stack spacing={1.5} alignItems="flex-end">
                                <Link component={RouterLink} to="/donate-info" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>All About Cancer</Link>
                                <Link component={RouterLink} to="/faq-legal" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>FAQ & Help</Link>
                                <Link component={RouterLink} to="/helpline-legal" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>Helpline & Live Chat</Link>
                            </Stack>
                        </Grid>
                    </Grid>

                    {/* SECTION 3: Social Icons & Bottom Bar (Also Layer 3) */}
                    <Box sx={{ mt: 8, pt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                        {/* Social Icons */}
                        <Stack direction="row" spacing={2}>
                            <IconButton sx={{ border: '1px solid white', color: 'white' }} size="small">
                                <Facebook fontSize="small" />
                            </IconButton>
                            <IconButton sx={{ border: '1px solid white', color: 'white' }} size="small">
                                <Twitter fontSize="small" />
                            </IconButton>
                            <IconButton sx={{ border: '1px solid white', color: 'white' }} size="small">
                                <LinkedIn fontSize="small" />
                            </IconButton>
                        </Stack>

                        {/* Copyright */}
                        <Typography variant="body2" sx={{ color: 'grey.600' }}>
                            © 2025 BANCAT
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
