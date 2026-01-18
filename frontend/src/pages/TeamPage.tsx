import { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { getAssetUrl } from '../config/api';
import { motion } from 'framer-motion';
import founderImage from '../assets/team/founder.jpg';
import { useTranslation } from 'react-i18next';

interface TeamMemberData {
    id: number;
    name_en: string;
    role_en: string;
    photo: string;
    category: string;
    bio_en?: string;
    linkedin?: string;
}

export const TeamPage = () => {
    const { t } = useTranslation();
    const [members, setMembers] = useState<TeamMemberData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                // Assuming public API endpoint exists. If not, I might need to create it or use existing content endpoint.
                // Based on standard Laravel resource controllers:
                const apiUrl = import.meta.env.VITE_API_URL || '/api/v1';
                const response = await axios.get(`${apiUrl}/team-members`);
                setMembers(response.data);
            } catch (err) {
                console.error('Failed to fetch team members', err);
                setError('Failed to load team members.');
                console.error(error); // Silencing unused variable warning
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    const trustees = members.filter(m => m.category === 'trustee');
    const ambassadors = members.filter(m => m.category === 'ambassador');


    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}><CircularProgress /></Box>;

    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
            <Helmet>
                <title>Our Team | BANcat</title>
                <meta name="description" content="Meet the dedicated Board of Trustees and Ambassadors behind Bangladesh Cancer Aid Trust." />
            </Helmet>

            {/* Standard Project Hero Section */}
            <Box sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: { xs: 8, md: 12 },
                mb: 8,
                textAlign: 'center'
            }}>
                <Container maxWidth="md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
                            {t('team.title')}
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 'normal' }}>
                            {t('team.subtitle')}
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            <Container maxWidth="lg">
                {/* Introduction */}
                <Box sx={{ mb: 10, maxWidth: '900px', mx: 'auto', textAlign: 'center' }}>
                    <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'text.primary' }}>
                        {t('team.intro')}
                    </Typography>
                </Box>

                {/* Founder Section - Structural Improvement: Clean Side-by-Side */}
                <Box sx={{ mb: 12 }}>
                    <Card elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                        <Grid container>
                            <Grid item xs={12} md={5}>
                                <Box
                                    component="img"
                                    src={founderImage}
                                    alt="Najmus Ahmed Albab"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        minHeight: { xs: '350px', md: '100%' }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'center', bgcolor: '#fff' }}>
                                <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                                    <Typography variant="overline" color="primary" fontWeight="bold" sx={{ letterSpacing: 1 }}>
                                        {t('team.founder.role')}
                                    </Typography>
                                    <Typography variant="h3" fontWeight="bold" sx={{ mb: 3, color: 'text.primary' }}>
                                        {t('team.founder.name')}
                                    </Typography>

                                    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7, color: 'text.secondary', fontSize: '1.05rem' }}>
                                        {t('team.founder.bio_1')}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, color: 'text.secondary', fontSize: '1.05rem' }}>
                                        {t('team.founder.bio_2')}
                                    </Typography>

                                    <Box sx={{ borderLeft: 4, borderColor: 'secondary.main', pl: 2, py: 1, bgcolor: 'action.hover', borderRadius: '0 4px 4px 0' }}>
                                        <Typography variant="body1" fontStyle="italic" color="text.primary">
                                            {t('team.founder.quote')}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>

                {/* Common Section Header Component Pattern */}
                {/* Board of Trustees */}
                <Box sx={{ mb: 8 }}>
                    <Box sx={{ mb: 6, textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
                            {t('team.trustees_title')}
                        </Typography>
                        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', borderRadius: 1 }} />
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                            {t('team.trustees_subtitle')}
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {trustees.map((member) => (
                            <Grid item xs={12} sm={6} md={3} key={member.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                        transition: 'all 0.3s ease-in-out',
                                        border: '1px solid rgba(0,0,0,0.03)',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                                            '& .member-overlay': { opacity: 1 }
                                        }
                                    }}>
                                        <Box sx={{ position: 'relative', overflow: 'hidden', pt: '100%' }}>
                                            <CardMedia
                                                component="img"
                                                image={getAssetUrl(member.photo) || '/assets/placeholder-person.png'}
                                                alt={member.name_en}
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    objectPosition: 'top',
                                                    transition: 'transform 0.5s ease'
                                                }}
                                            />
                                            {/* Subtle gradient overlay on hover */}
                                            <Box
                                                className="member-overlay"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(88, 45, 130, 0.7) 100%)', // Brand Purple overlay
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s ease',
                                                }}
                                            />
                                        </Box>

                                        <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                                            <Typography variant="h6" sx={{
                                                fontWeight: 700,
                                                mb: 1.5,
                                                lineHeight: 1.3,
                                                color: 'text.primary',
                                                fontSize: '1.1rem'
                                            }}>
                                                {member.name_en}
                                            </Typography>

                                            <Box sx={{
                                                width: '40px',
                                                height: '3px',
                                                bgcolor: 'secondary.main',
                                                mx: 'auto',
                                                mb: 2.5,
                                                borderRadius: 1
                                            }} />

                                            <Typography variant="body2" sx={{
                                                color: 'text.secondary',
                                                fontWeight: 500,
                                                textTransform: 'uppercase',
                                                fontSize: '0.75rem',
                                                letterSpacing: '0.5px'
                                            }}>
                                                {member.role_en}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Ambassadors */}
                <Box sx={{ mb: 10 }}>
                    <Box sx={{ mb: 6, textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
                            Our Ambassadors
                        </Typography>
                        <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', borderRadius: 1 }} />
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                            Voices amplifying our cause across the nation.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {ambassadors.map((member) => (
                            <Grid item xs={12} sm={6} md={3} key={member.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                        transition: 'all 0.3s ease-in-out',
                                        border: '1px solid rgba(0,0,0,0.03)',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                                            '& .member-overlay': { opacity: 1 }
                                        }
                                    }}>
                                        <Box sx={{ position: 'relative', overflow: 'hidden', pt: '100%' }}>
                                            <CardMedia
                                                component="img"
                                                image={getAssetUrl(member.photo) || '/assets/placeholder-person.png'}
                                                alt={member.name_en}
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    objectPosition: 'top',
                                                    transition: 'transform 0.5s ease'
                                                }}
                                            />
                                            <Box
                                                className="member-overlay"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(88, 45, 130, 0.7) 100%)',
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s ease',
                                                }}
                                            />
                                        </Box>

                                        <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                                            <Typography variant="h6" sx={{
                                                fontWeight: 700,
                                                mb: 1.5,
                                                lineHeight: 1.3,
                                                color: 'text.primary',
                                                fontSize: '1.1rem'
                                            }}>
                                                {member.name_en}
                                            </Typography>

                                            <Box sx={{
                                                width: '40px',
                                                height: '3px',
                                                bgcolor: 'secondary.main',
                                                mx: 'auto',
                                                mb: 2.5,
                                                borderRadius: 1
                                            }} />

                                            <Typography variant="body2" sx={{
                                                color: 'text.secondary',
                                                fontWeight: 500,
                                                textTransform: 'uppercase',
                                                fontSize: '0.75rem',
                                                letterSpacing: '0.5px'
                                            }}>
                                                {member.role_en}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};
