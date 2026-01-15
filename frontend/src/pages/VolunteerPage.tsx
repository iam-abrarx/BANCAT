import { Box, Container, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { VolunteerForm } from '../components/volunteer/VolunteerForm';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

export const VolunteerPage = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <Helmet>
                <title>{t('volunteer.title')} - BANcat</title>
            </Helmet>

            <Box sx={{
                bgcolor: '#f8f9fa',
                pt: 8,
                pb: 8,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '550px',
                    background: 'linear-gradient(135deg, rgba(88, 45, 130, 0.05) 0%, rgba(160, 60, 155, 0.05) 100%)',
                    zIndex: 0
                }
            }}>
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    {/* Header Section */}
                    <Box sx={{ maxWidth: '1280px', mx: 'auto', mb: 8, textAlign: 'center' }}>
                        <Box sx={{
                            mb: 3,
                            display: 'inline-flex',
                            p: 2,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(88, 45, 130, 0.1) 0%, rgba(160, 60, 155, 0.1) 100%)',
                            color: '#582d82',
                            boxShadow: '0 4px 12px rgba(88, 45, 130, 0.1)'
                        }}>
                            <VolunteerActivismIcon sx={{ fontSize: 44 }} />
                        </Box>
                        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800, color: '#1a1a1a', mb: 3 }}>
                            {t('volunteer.title').split('Volunteer')[0]} <Box component="span" sx={{ color: '#582d82' }}>Volunteer</Box>
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.9, mb: 6, color: 'text.secondary', maxWidth: '100%', mx: 'auto' }}>
                            {t('volunteer.intro')}
                        </Typography>

                        <Paper elevation={0} sx={{
                            bgcolor: 'white',
                            p: { xs: 3, md: 5 },
                            borderRadius: 3,
                            textAlign: 'left',
                            border: '1px solid rgba(0,0,0,0.06)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, pb: 2, borderBottom: '1px solid #eee' }}>
                                <VerifiedUserIcon sx={{ color: '#582d82', mr: 2, fontSize: 28 }} />
                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#2d3436' }}>
                                    {t('volunteer.terms_title')}
                                </Typography>
                            </Box>

                            <List sx={{ '& .MuiListItem-root': { alignItems: 'flex-start', px: 0 } }}>
                                <ListItem>
                                    <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                                        <VerifiedUserIcon fontSize="small" color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography fontWeight="600" color="#2d3436">{t('volunteer.terms.values_title')}</Typography>}
                                        secondary={t('volunteer.terms.values_desc')}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                                        <HandshakeIcon fontSize="small" color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography fontWeight="600" color="#2d3436">{t('volunteer.terms.commitment_title')}</Typography>}
                                        secondary={t('volunteer.terms.commitment_desc')}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                                        <MoneyOffIcon fontSize="small" color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography fontWeight="600" color="#2d3436">{t('volunteer.terms.probono_title')}</Typography>}
                                        secondary={t('volunteer.terms.probono_desc')}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                                        <VerifiedUserIcon fontSize="small" color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography fontWeight="600" color="#2d3436">{t('volunteer.terms.integrity_title')}</Typography>}
                                        secondary={t('volunteer.terms.integrity_desc')}
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                        <Typography variant="body1" sx={{ mt: 5, fontStyle: 'italic', color: 'text.secondary', fontWeight: 500 }}>
                            {t('volunteer.form_prompt')}
                        </Typography>
                    </Box>

                    <VolunteerForm />
                </Container>
            </Box>
        </Box>
    );
};
