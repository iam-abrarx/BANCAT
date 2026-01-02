import { Box, Container, Typography, Grid, Button, Paper } from '@mui/material';
import { VolunteerActivism, Handshake, Spa, Person, Star } from '@mui/icons-material';
import joinImage from '../../assets/join_us/Asset 18@3x-20.jpg';

const JoinUs = () => {
    return (
        <Box>
            {/* Section 1: Ways to Join (Green) */}
            <Box sx={{ bgcolor: '#7c9c5d', py: 10, color: 'white' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8, maxWidth: '800px', mx: 'auto' }}>
                        <Typography variant="h3" sx={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif", mb: 2 }}>
                            Join with Us
                        </Typography>
                        <Typography sx={{ lineHeight: 1.6 }}>
                            Bangladesh Cancer Aid Trust (BANCAT) is a community-driven organization providing care beyond
                            treatment through awareness, advocacy, facilitated cancer scopes, and a safe sanctuary of support for
                            patients and their families.
                        </Typography>
                    </Box>

                    {/* Feature Cards Row 1 (Orange) */}
                    <Grid container spacing={3} justifyContent="center" sx={{ mb: 3 }}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper
                                elevation={0}
                                sx={{
                                    bgcolor: '#f5aa21',
                                    color: 'white',
                                    p: 4,
                                    borderRadius: '20px',
                                    textAlign: 'center',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'scale(1.02)' }
                                }}
                            >
                                <VolunteerActivism sx={{ fontSize: 60, mb: 2 }} />
                                <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}>
                                    Regular Donor
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper
                                elevation={0}
                                sx={{
                                    bgcolor: '#f5aa21',
                                    color: 'white',
                                    p: 4,
                                    borderRadius: '20px',
                                    textAlign: 'center',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'scale(1.02)' }
                                }}
                            >
                                <Handshake sx={{ fontSize: 60, mb: 2 }} />
                                <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}>
                                    Become a Partner
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* Feature Cards Row 2 (Purple) */}
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={4} md={3}>
                            <Paper
                                elevation={0}
                                sx={{
                                    bgcolor: '#9c94c9',
                                    color: 'white',
                                    p: 3,
                                    borderRadius: '20px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'scale(1.02)' }
                                }}
                            >
                                <Spa sx={{ fontSize: 40, mb: 1 }} />
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    Life Time Donor
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Paper
                                elevation={0}
                                sx={{
                                    bgcolor: '#9c94c9',
                                    color: 'white',
                                    p: 3,
                                    borderRadius: '20px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'scale(1.02)' }
                                }}
                            >
                                <Person sx={{ fontSize: 40, mb: 1 }} />
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    Volunteer
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Paper
                                elevation={0}
                                sx={{
                                    bgcolor: '#9c94c9',
                                    color: 'white',
                                    p: 3,
                                    borderRadius: '20px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'scale(1.02)' }
                                }}
                            >
                                <Star sx={{ fontSize: 40, mb: 1 }} />
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    Career
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Section 2: Image & CTA (Orange) */}
            <Box sx={{ bgcolor: '#f5aa21', py: 10, color: 'white', position: 'relative', overflow: 'hidden' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8} alignItems="center">
                        {/* Image Side */}
                        <Grid item xs={12} md={5}>
                            <Box
                                component="img"
                                src={joinImage}
                                alt="Join with us"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    // Organic blob shape approximation
                                    borderRadius: '43% 57% 70% 30% / 45% 54% 46% 55%',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}
                            />
                        </Grid>

                        {/* Divider Line (visible on desktop) */}
                        <Grid item md={1} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                            <Box sx={{ width: '2px', height: '200px', borderLeft: '2px dashed rgba(255,255,255,0.5)' }} />
                        </Grid>

                        {/* Text Side */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" sx={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif", mb: 2 }}>
                                Join with Us
                            </Typography>
                            <Typography sx={{ lineHeight: 1.6, mb: 4, maxWidth: '500px' }}>
                                Bangladesh Cancer Aid Trust (BANCAT) is a community-driven organization providing care beyond
                                treatment through awareness, advocacy, facilitated cancer scopes, and a safe sanctuary of support for
                                patients and their families.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: 'white',
                                    color: '#f5aa21',
                                    borderRadius: '50px',
                                    px: 4,
                                    py: 1.5,
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    '&:hover': {
                                        bgcolor: '#fff8e1'
                                    }
                                }}
                            >
                                Learn More
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default JoinUs;
