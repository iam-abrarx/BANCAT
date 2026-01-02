import { Box, Container, Grid, Typography, Link, Stack, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import footerImage from '../../assets/footer/Asset 20@3x.png';

export const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', color: 'white', pt: 8, pb: 4, mt: 'auto', overflow: 'hidden' }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} alignItems="flex-start">

                    {/* Left Column: Contact Details */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontFamily: "'Montserrat', sans-serif" }}>
                            Contact Details
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Corporate office
                        </Typography>

                        <Typography variant="body2" sx={{ color: '#f5aa21', mb: 2 }}>
                            House-300E, Road-414, Block-A,Bashundhara R/A, Dhaka- 1229
                        </Typography>

                        <Typography variant="body2" sx={{ color: '#f5aa21', mb: 0 }}>
                            Mosabbir Alok Nivesh Home-01
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#f5aa21', mb: 2 }}>
                            House-144, Road-3, Block-A, Bsahundhara R/A, Dhaka- 1229
                        </Typography>

                        <Typography variant="body2" sx={{ color: '#f5aa21', mb: 0 }}>
                            Mosabbir Alok Nivesh Home-02
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#f5aa21', mb: 3 }}>
                            House-3220, Road-66, Block-L, Bsahundhara R/A, Dhaka- 1229
                        </Typography>

                        <Typography variant="body2" sx={{ color: '#f5aa21', mb: 0 }}>
                            Phone: +8801303073503
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#f5aa21', mb: 4 }}>
                            Email: support@bancat.org.bd
                        </Typography>

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
                    </Grid>

                    {/* Center Column: Image */}
                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                        <Box
                            component="img"
                            src={footerImage}
                            alt="BANCAT Fist"
                            sx={{
                                width: '100%',
                                maxWidth: '350px',
                                height: 'auto',
                                mt: -5, // Pull it up slightly to overlap or fit better
                                mb: -10 // Let it extend down
                            }}
                        />
                    </Grid>

                    {/* Right Column: Links Grid */}
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={4}>
                            {/* Row 1 */}
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>About BANCAT</Typography>
                                <Stack spacing={1}>
                                    <Link component={RouterLink} to="/about" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>About Us</Link>
                                    <Link component={RouterLink} to="/approach" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>Our Approach (AAA)</Link>
                                    <Link component={RouterLink} to="/services" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>Our Services / Care Centres</Link>
                                    <Link component={RouterLink} to="/stories" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>Stories of Hope</Link>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Get Involved</Typography>
                                <Stack spacing={1} alignItems="flex-end">
                                    <Link component={RouterLink} to="/donate" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>Donate Now</Link>
                                    <Link component={RouterLink} to="/zakat" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>Zakat Calculator</Link>
                                    <Link component={RouterLink} to="/contact" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>Contact Us</Link>
                                    <Link component={RouterLink} to="/privacy" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>Privacy Policy</Link>
                                </Stack>
                            </Grid>

                            {/* Row 2 */}
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, mt: 2 }}>Cancer & Support</Typography>
                                <Stack spacing={1}>
                                    <Link component={RouterLink} to="/cancer-info" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>All About Cancer</Link>
                                    <Link component={RouterLink} to="/support" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>Patient & Caregiver Support</Link>
                                    <Link component={RouterLink} to="/faq" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>FAQ & Help</Link>
                                    <Link component={RouterLink} to="/helpline" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>Helpline & Live Chat</Link>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, mt: 2 }}>Donate & Legal</Typography>
                                <Stack spacing={1} alignItems="flex-end">
                                    <Link component={RouterLink} to="/donate-info" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>All About Cancer</Link>
                                    <Link component={RouterLink} to="/caregiver" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>Patient & Caregiver Support</Link>
                                    <Link component={RouterLink} to="/faq-legal" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>FAQ & Help</Link>
                                    <Link component={RouterLink} to="/helpline-legal" underline="none" sx={{ color: '#f5aa21', fontSize: '0.85rem' }}>Helpline & Live Chat</Link>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ borderTop: '1px solid #333', mt: 8, pt: 3 }}>
                    <Typography variant="body2" sx={{ color: 'grey.600' }}>
                        © 2025 BANCAT
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
