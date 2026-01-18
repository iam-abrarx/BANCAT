import { Container, Typography, Box, Grid, Card, CardContent, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    MedicalServices,
    VolunteerActivism,
    VerifiedUser,
    Spa,
    Medication,
    HealthAndSafety,
    AutoGraph,
    EmojiEvents
} from '@mui/icons-material';
import collaboration1 from '../assets/about/collaboration1.jpg';
import collaboration2 from '../assets/about/collaboration2.jpg';

import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <>
            <Helmet>
                <title>About Us | BANcat - Fighting Cancer Together</title>
                <meta name="description" content="Learn about BANcat's mission to support cancer patients in Bangladesh through crowdfunding, advocacy, and community support." />
            </Helmet>

            {/* Hero Section - The Journey of BANCAT */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                    color: 'white',
                    py: { xs: 8, md: 14 },
                    textAlign: 'center',
                    borderRadius: '0 0 50px 50px',
                    mb: 8,
                    position: 'relative',
                    overflow: 'hidden'
                }}
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Decorative Background Elements */}
                <Box sx={{
                    position: 'absolute',
                    top: -100,
                    left: -100,
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    zIndex: 0
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    zIndex: 0
                }} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        {t('home.about.journey_title')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: '900px',
                            mx: 'auto',
                            fontSize: '1.2rem',
                            lineHeight: 1.8,
                            opacity: 0.95,
                            textAlign: 'justify',
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}
                    >
                        {t('home.about.journey_text_1')}
                        <br /><br />
                        {t('home.about.journey_text_2')}
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mb: 10 }}>
                {/* Vision & Mission */}
                <Grid container spacing={6} sx={{ mb: 10 }}>
                    <Grid item xs={12} md={6}>
                        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <Box sx={{ p: 4, bgcolor: '#e3f2fd', borderRadius: 4, height: '100%', boxShadow: 2 }}>
                                <Typography variant="h4" color="primary.main" fontWeight="bold" gutterBottom>
                                    Our Mission
                                </Typography>
                                <Typography variant="body1" fontSize="1.05rem" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                    To revolutionize cancer care through holistic support, early detection initiatives, and fostering a collaborative, cancer-aware society in Bangladesh.
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <Box sx={{ p: 4, bgcolor: '#fce4ec', borderRadius: 4, height: '100%', boxShadow: 2 }}>
                                <Typography variant="h4" color="secondary.main" fontWeight="bold" gutterBottom>
                                    Our Vision
                                </Typography>
                                <Typography variant="body1" fontSize="1.05rem" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                    To globally replicate the Alok Nibash model, ensuring dignified and comprehensive cancer care is accessible to everyone, everywhere.
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Core Values */}
                <Box sx={{ mb: 10 }}>
                    <Typography
                        variant="h3"
                        textAlign="center"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ mb: 6, fontFamily: "'Montserrat', sans-serif", color: 'primary.main' }}
                    >
                        Core Values
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            {
                                title: 'Care is Cure',
                                desc: 'We believe recovery extends beyond medicine to psychological well-being and nutrition.',
                                icon: <MedicalServices sx={{ fontSize: 40 }} />
                            },
                            {
                                title: 'Dignity and Compassion',
                                desc: 'Providing a nurturing sanctuary that ensures every patient is treated with profound respect.',
                                icon: <VolunteerActivism sx={{ fontSize: 40 }} />
                            },
                            {
                                title: 'Integrity',
                                desc: 'Maintaining the highest standards of transparency in resource management and project execution.',
                                icon: <VerifiedUser sx={{ fontSize: 40 }} />
                            }
                        ].map((value, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card sx={{
                                        height: '100%',
                                        borderRadius: 4,
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' },
                                        border: '1px solid rgba(0,0,0,0.05)'
                                    }}>
                                        <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                            <Box sx={{ p: 2, bgcolor: 'primary.light', color: 'white', borderRadius: '50%', mb: 1 }}>
                                                {value.icon}
                                            </Box>
                                            <Typography variant="h5" fontWeight="bold" gutterBottom color="primary.main">
                                                {value.title}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {value.desc}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Strategic Cooperation */}
                <Box sx={{ mb: 10, bgcolor: '#f8f9fa', p: { xs: 4, md: 8 }, borderRadius: 6 }}>
                    <Typography
                        variant="h3"
                        textAlign="center"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ mb: 4, fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Strategic Cooperation and Endorsements
                    </Typography>
                    <Typography variant="body1" textAlign="center" sx={{ maxWidth: '800px', mx: 'auto', mb: 6, fontSize: '1.1rem', color: 'text.secondary' }}>
                        BANCAT works in coordination with leading national figures and global standards to amplify its impact:
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ height: '100%', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                                <Box sx={{ height: 250, overflow: 'hidden' }}>
                                    <Box
                                        component="img"
                                        src={collaboration1}
                                        alt="Global Alignment"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': { transform: 'scale(1.05)' }
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom color="primary.main">
                                        Global Alignment
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                                        All initiatives are strategically aligned with the United Nations Sustainable Development Goals (SDGs), specifically:
                                    </Typography>
                                    <Box component="ul" sx={{ mt: 0, pl: 2, color: 'text.primary', '& li': { mb: 1, fontWeight: 500 } }}>
                                        <li>Goal 3: Health & Well-being</li>
                                        <li>Goal 11: Sustainable Cities</li>
                                        <li>Goal 12: Responsible Consumption</li>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ height: '100%', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                                <Box sx={{ height: 250, overflow: 'hidden' }}>
                                    <Box
                                        component="img"
                                        src={collaboration2}
                                        alt="Corporate & NGO Network"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': { transform: 'scale(1.05)' }
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom color="secondary.main">
                                        Corporate & NGO Network
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Collaborates with diverse hospitals, corporate organizations, and youth-led campaigns to drive nationwide cancer advocacy.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* Roadmap */}
                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant="h3"
                        textAlign="center"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ mb: 8, fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Roadmap (2026 - 2030)
                    </Typography>
                    <Box sx={{ position: 'relative', maxWidth: '1000px', mx: 'auto' }}>
                        {/* Vertical Line */}
                        <Box sx={{
                            position: 'absolute',
                            left: { xs: '20px', md: '50%' },
                            transform: { md: 'translateX(-50%)' },
                            top: 0,
                            bottom: 0,
                            width: '4px',
                            background: 'linear-gradient(to bottom, #1976D2, #9C27B0)',
                            borderRadius: 2,
                            opacity: 0.3
                        }} />

                        {[
                            {
                                year: '2026',
                                title: 'Year of Wellness',
                                desc: 'Integrating holistic physical and mental health support to ensure survivors thrive beyond their diagnosis.',
                                icon: <Spa />,
                                color: '#4CAF50'
                            },
                            {
                                year: '2027',
                                title: 'Year of Cure',
                                desc: 'Advancing medical frontiers to provide every patient with a pathway toward complete recovery and healing.',
                                icon: <Medication />,
                                color: '#F44336'
                            },
                            {
                                year: '2028',
                                title: 'Year of Prevention',
                                desc: 'Empowering communities through proactive education and early detection to stop cancer before it starts.',
                                icon: <HealthAndSafety />,
                                color: '#FF9800'
                            },
                            {
                                year: '2029',
                                title: 'Year of Best Practices',
                                desc: 'Standardizing excellence in oncology care by implementing world-class protocols across all operations.',
                                icon: <AutoGraph />,
                                color: '#2196F3'
                            },
                            {
                                year: '2030',
                                title: 'Year of Excellence',
                                desc: 'Achieving our ultimate vision of becoming a global gold standard in compassionate, comprehensive cancer aid.',
                                icon: <EmojiEvents />,
                                color: '#9C27B0'
                            }
                        ].map((item, index) => (
                            <Box key={index} sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                alignItems: 'center',
                                mb: 8,
                                position: 'relative'
                            }}>
                                {/* Timeline Dot */}
                                <Box sx={{
                                    width: 50,
                                    height: 50,
                                    bgcolor: 'white',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    left: { xs: '0', md: '50%' },
                                    transform: { md: 'translateX(-50%)' },
                                    zIndex: 2,
                                    border: `4px solid ${item.color}`,
                                    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: item.color
                                }}>
                                    {item.icon}
                                </Box>

                                {/* Content */}
                                <Box sx={{
                                    width: { xs: 'calc(100% - 70px)', md: '45%' },
                                    ml: { xs: '70px', md: 0 },
                                    textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' },
                                    pr: { md: index % 2 === 0 ? 5 : 0 },
                                    pl: { md: index % 2 !== 0 ? 5 : 0 }
                                }}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 4,
                                            borderRadius: 4,
                                            bgcolor: 'white',
                                            border: '1px solid #eee',
                                            transition: 'transform 0.3s',
                                            '&:hover': { transform: 'translateY(-5px)', borderColor: item.color, boxShadow: `0 10px 30px -10px ${item.color}40` }
                                        }}
                                    >
                                        <Typography variant="h4" fontWeight="800" sx={{ color: item.color, mb: 1, opacity: 0.2 }}>
                                            {item.year}
                                        </Typography>
                                        <Typography variant="h5" color="text.primary" fontWeight="bold" gutterBottom>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.6 }}>
                                            {item.desc}
                                        </Typography>
                                    </Paper>
                                </Box>
                                {/* Spacer for opposite side */}
                                <Box sx={{ width: { xs: 0, md: '45%' } }} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default AboutPage;
