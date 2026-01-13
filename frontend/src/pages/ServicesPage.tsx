import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from '@mui/material';
import { SEOHead } from '../components/common/SEOHead';
import { VolunteerActivism, Psychology, MedicalServices, School, MicExternalOn } from '@mui/icons-material';

const services = [
    {
        title: 'Nationwide Cancer Awareness',
        description: 'We conduct campaigns across the country to educate people about cancer prevention, early detection, and healthy lifestyle choices.',
        icon: <MicExternalOn fontSize="large" />,
        color: '#e91e63'
    },
    {
        title: 'Holistic Care',
        description: 'We provide support for underprivileged cancer patients, ensuring they receive not just medical treatment but also emotional and social support.',
        icon: <MedicalServices fontSize="large" />,
        color: '#4caf50'
    },
    {
        title: 'Mental Wellness',
        description: 'Cancer affects the mind as much as the body. We offer counseling and support groups for patients and their families to help them cope with the journey.',
        icon: <Psychology fontSize="large" />,
        color: '#2196f3'
    },
    {
        title: 'Training & Workshops',
        description: 'Specialized training for caregivers, nurses, and volunteers to ensure high-quality care, covering palliative care and emotional support.',
        icon: <School fontSize="large" />,
        color: '#ff9800'
    },
    {
        title: 'Clinical Supervision',
        description: 'Overseeing the care provided by our volunteers and nurses, ensuring adherence to medical protocols and compassionate service delivery.',
        icon: <VolunteerActivism fontSize="large" />,
        color: '#9c27b0'
    }
];

export const ServicesPage = () => {
    return (
        <>
            <SEOHead />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box mb={8} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            Our Work & Services
                        </Typography>
                        <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
                            Comprehensive support systems designed to empower the cancer community in Bangladesh.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <Card sx={{ height: '100%', borderRadius: 4, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 } }}>
                                    <CardContent sx={{ p: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                        <Avatar sx={{ width: 80, height: 80, bgcolor: `${service.color}15`, color: service.color, mb: 3 }}>
                                            {service.icon}
                                        </Avatar>
                                        <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};
