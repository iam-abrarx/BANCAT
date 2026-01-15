import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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
                    py: 10,
                    textAlign: 'center',
                    borderRadius: '0 0 50px 50px',
                    mb: 8
                }}
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                        Our Story: The Journey of BANCAT
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: '900px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9, textAlign: 'justify' }}>
                        The Bangladesh Cancer Aid Trust (BANCAT) began as a personal mission of resilience. In 2011, founder Najmus Ahmed Albab was diagnosed with cancer, an experience that transformed his personal battle into a vision to ensure no one fights cancer alone. This led to the 2015 establishment of the Bangladesh Cancer Aid Foundation (BANCAF), which provided critical rehabilitation and financial aid to hundreds of patients through community collaboration.
                        <br /><br />
                        In July 2019, the organization transitioned into BANCAT, marking a significant expansion in outreach and professional care. Despite the challenges of the COVID-19 pandemic, BANCAT intensified its efforts, distributing thousands of food aid packages to hospitals. A historic milestone was reached in 2022 with the founding of Alok Nibash, the country’s first holistic cancer care home. Today, BANCAT has evolved from a grassroots initiative into a nationwide force for advocacy, providing free medical treatment, accommodation, and emotional support to thousands of "cancer warriors."
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
                    <Typography variant="h3" textAlign="center" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
                        Core Values
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            { title: 'Care is Cure', desc: 'We believe recovery extends beyond medicine to psychological well-being and nutrition.' },
                            { title: 'Dignity and Compassion', desc: 'Providing a nurturing sanctuary that ensures every patient is treated with profound respect.' },
                            { title: 'Integrity', desc: 'Maintaining the highest standards of transparency in resource management and project execution.' }
                        ].map((value, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                                        <CardContent sx={{ p: 4 }}>
                                            <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
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
                <Box sx={{ mb: 10, bgcolor: '#f5f5f5', p: { xs: 4, md: 8 }, borderRadius: 6 }}>
                    <Typography variant="h3" textAlign="center" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
                        Strategic Cooperation and Endorsements
                    </Typography>
                    <Typography variant="body1" textAlign="center" sx={{ maxWidth: '800px', mx: 'auto', mb: 6, fontSize: '1.1rem' }}>
                        BANCAT works in coordination with leading national figures and global standards to amplify its impact:
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 2 }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom color="primary.main">
                                        Global Alignment
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        All initiatives are strategically aligned with the United Nations Sustainable Development Goals (SDGs), specifically:
                                    </Typography>
                                    <Box component="ul" sx={{ mt: 2, pl: 2, color: 'text.secondary' }}>
                                        <li>Goal 3 (Health & Well-being)</li>
                                        <li>Goal 11 (Sustainable Cities)</li>
                                        <li>Goal 12 (Responsible Consumption)</li>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 2 }}>
                                <CardContent sx={{ p: 4 }}>
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
                    <Typography variant="h3" textAlign="center" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
                        Roadmap (2026 - 2030)
                    </Typography>
                    <Box sx={{ position: 'relative', maxWidth: '900px', mx: 'auto' }}>
                        {/* Vertical Line */}
                        <Box sx={{
                            position: 'absolute',
                            left: { xs: '20px', md: '50%' },
                            transform: { md: 'translateX(-50%)' },
                            top: 0,
                            bottom: 0,
                            width: '4px',
                            bgcolor: 'primary.light',
                            borderRadius: 2
                        }} />

                        {[
                            { year: '2026', title: 'Year of Wellness', desc: 'Integrating holistic physical and mental health support to ensure survivors thrive beyond their diagnosis.' },
                            { year: '2027', title: 'Year of Cure', desc: 'Advancing medical frontiers to provide every patient with a pathway toward complete recovery and healing.' },
                            { year: '2028', title: 'Year of Prevention', desc: 'Empowering communities through proactive education and early detection to stop cancer before it starts.' },
                            { year: '2029', title: 'Year of Best Practices', desc: 'Standardizing excellence in oncology care by implementing world-class protocols across all operations.' },
                            { year: '2030', title: 'Year of Excellence', desc: 'Achieving our ultimate vision of becoming a global gold standard in compassionate, comprehensive cancer aid.' }
                        ].map((item, index) => (
                            <Box key={index} sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                alignItems: 'center',
                                mb: 6,
                                position: 'relative'
                            }}>
                                {/* Timeline Dot */}
                                <Box sx={{
                                    width: 20,
                                    height: 20,
                                    bgcolor: 'secondary.main',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    left: { xs: '12px', md: '50%' },
                                    transform: { md: 'translateX(-50%)' },
                                    zIndex: 2,
                                    border: '4px solid white',
                                    boxShadow: 1
                                }} />

                                {/* Content */}
                                <Box sx={{
                                    width: { xs: 'calc(100% - 50px)', md: '45%' },
                                    ml: { xs: '50px', md: 0 },
                                    textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' },
                                    pr: { md: index % 2 === 0 ? 4 : 0 },
                                    pl: { md: index % 2 !== 0 ? 4 : 0 }
                                }}>
                                    <Paper elevation={3} sx={{ p: 3, borderRadius: 3, bgcolor: index % 2 === 0 ? '#fafafa' : 'white' }}>
                                        <Typography variant="h5" color="secondary" fontWeight="bold">
                                            {item.year}: {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
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
