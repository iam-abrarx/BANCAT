import { Box, Container, Grid, Typography, Link, Stack, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import footerImage from '../../assets/footer/Asset 20@3x.png';

export const Footer = () => {
    const { t } = useTranslation();

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
                                {t('footer.contact_details')}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2, color: 'grey.500' }}>
                                {t('footer.corporate_office')}
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 2 }}>
                                {t('footer.address_corp')}
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 0 }}>
                                {t('footer.alok_ivash_01')}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 2 }}>
                                {t('footer.address_01')}
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 0 }}>
                                {t('footer.alok_ivash_02')}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 4 }}>
                                {t('footer.address_02')}
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 0 }}>
                                {t('footer.phone_label')}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#f5aa21', mb: 4 }}>
                                {t('footer.email_label')}
                            </Typography>
                        </Grid>

                        {/* SECTION 2: Other Infos (Links) */}
                        {/* About BANCAT (2/12) */}
                        <Grid item xs={6} md={2}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 400, mb: 3 }}>{t('footer.about_bancat')}</Typography>
                            <Stack spacing={1.5}>
                                <Link component={RouterLink} to="/about" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.about_us')}</Link>
                                <Link component={RouterLink} to="/approach" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.our_approach')}</Link>
                                <Link component={RouterLink} to="/services" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.our_services')}</Link>
                                <Link component={RouterLink} to="/stories" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.stories_hope')}</Link>
                            </Stack>
                        </Grid>

                        {/* Get Involved (2/12) */}
                        <Grid item xs={6} md={2}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 400, mb: 3 }}>{t('footer.get_involved')}</Typography>
                            <Stack spacing={1.5}>
                                <Link component={RouterLink} to="/donate" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.donate_now')}</Link>
                                <Link component={RouterLink} to="/zakat" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.zakat_calc')}</Link>
                                <Link component={RouterLink} to="/partnership" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.partnership')}</Link>
                                <Link component={RouterLink} to="/donors/lifetime" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.lifetime_donor')}</Link>
                            </Stack>
                        </Grid>

                        {/* Cancer & Support (2/12) */}
                        <Grid item xs={6} md={2}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 400, mb: 3 }}>{t('footer.cancer_support')}</Typography>
                            <Stack spacing={1.5}>
                                <Link component={RouterLink} to="/cancer-info" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.all_about_cancer')}</Link>
                                <Link component={RouterLink} to="/support" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.patient_support')}</Link>
                                <Link component={RouterLink} to="/faq" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.faq')}</Link>
                                <Link component={RouterLink} to="/helpline" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.helpline')}</Link>
                            </Stack>
                        </Grid>

                        {/* Legal & Contact (3/12) */}
                        <Grid item xs={6} md={3} sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 400, mb: 3 }}>{t('footer.legal_contact')}</Typography>
                            <Stack spacing={1.5} alignItems="flex-end">
                                <Link component={RouterLink} to="/contact" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.contact_us')}</Link>
                                <Link component={RouterLink} to="/career" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('join_us.career')}</Link>
                                <Link component={RouterLink} to="/privacy-policy" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.privacy_policy')}</Link>
                                <Link component={RouterLink} to="/terms-of-use" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.terms_use')}</Link>
                                <Link component={RouterLink} to="/refund-policy" underline="none" sx={{ color: '#f5aa21', fontSize: '0.9rem', '&:hover': { textDecoration: 'underline' } }}>{t('footer.refund_policy')}</Link>
                            </Stack>
                        </Grid>
                    </Grid>

                    {/* SECTION 3: Social Icons & Bottom Bar (Also Layer 3) */}
                    <Box sx={{ mt: 8, pt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                        {/* Social Icons */}
                        <Stack direction="row" spacing={2}>
                            <IconButton
                                sx={{ border: '1px solid white', color: 'white' }}
                                size="small"
                                component="a"
                                href="https://www.facebook.com/BANCATcares/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook fontSize="small" />
                            </IconButton>
                            <IconButton sx={{ border: '1px solid white', color: 'white' }} size="small">
                                <Twitter fontSize="small" />
                            </IconButton>
                            <IconButton
                                sx={{ border: '1px solid white', color: 'white' }}
                                size="small"
                                component="a"
                                href="https://www.linkedin.com/company/care_bancat/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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
