import { Box, Container, Typography, Grid } from '@mui/material';
import aboutBg from '../../assets/about_bg.webp';

// Import partner logos if needed, or remove partner strip from here if it stays in MissionVision
// The design prompt didn't strictly ask for Partners here but the previous component had them.
// I will OMIT the partners strip here since MissionVision probably has it.
// Or I can keep it if the user wants it. The user said "create section like this exactly...". 
// The image doesn't show partners in that section. It shows "Driven by Compassion" + Cards + Image.

export const AboutUs = () => {
    return (
        <Box sx={{
            bgcolor: '#582d82',
            backgroundImage: `linear-gradient(rgba(49, 11, 87, 0.85), rgba(28, 4, 53, 0.9)), url(${aboutBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            py: 10,
            color: '#fff'
        }}>
            <Container maxWidth="lg">
                {/* Header - Centered */}
                <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
                    <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, letterSpacing: 2, display: 'block', mb: 1 }}>
                        BANCAT
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif", mb: 3 }}>
                        A Comprehensive Cancer Care Approach
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff', lineHeight: 1.7, opacity: 0.9 }}>
                        Bangladesh Cancer Aid Trust (BANCAT) is a community-driven organization providing care beyond treatment through awareness, advocacy, facilitated cancer scopes, and a safe sanctuary of support for patients and their families.
                    </Typography>
                </Box>

                {/* Content Grid */}
                <Grid container spacing={6} justifyContent="center">
                    {/* Centered Column: Cards */}
                    <Grid item xs={12} md={10}>
                        <Grid container spacing={4}>
                            {/* Vision Card */}
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    bgcolor: 'rgba(255,255,255,0.05)',
                                    p: 4,
                                    borderRadius: 2,
                                    height: '100%',
                                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)', // Ultra slow fade
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(4px)',
                                    '&:hover': {
                                        bgcolor: 'rgba(255,255,255,0.08)', // Barely visible lightening
                                        transform: 'translateY(-2px)',     // Minimal movement
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)', // Very soft shadow
                                        border: '1px solid rgba(255,255,255,0.15)'
                                    }
                                }}>
                                    <Box sx={{ color: '#fff', mb: 2 }}>
                                        {/* Icon Placeholder - Hand holding heart */}
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </Box>
                                    <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif", mb: 2 }}>
                                        Our Vision
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#fff', lineHeight: 1.7 }}>
                                        To advance societal impact through compassionate, community-driven cancer care and support.
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Mission Card */}
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    bgcolor: 'rgba(255,255,255,0.05)',
                                    p: 4,
                                    borderRadius: 2,
                                    height: '100%',
                                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(4px)',
                                    '&:hover': {
                                        bgcolor: 'rgba(255,255,255,0.08)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                        border: '1px solid rgba(255,255,255,0.15)'
                                    }
                                }}>
                                    <Box sx={{ color: '#fff', mb: 2 }}>
                                        {/* Icon Placeholder - Heart */}
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </Box>
                                    <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif", mb: 2 }}>
                                        Our Mission
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#fff', lineHeight: 1.7, mb: 2 }}>
                                        Develop a cancer well-being ecosystem in Bangladesh.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Partners Header */}
                <Box sx={{ mt: 10, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}>
                        Our Partners
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
