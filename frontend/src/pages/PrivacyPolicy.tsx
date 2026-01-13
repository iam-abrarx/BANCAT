import { Container, Typography, Box, Paper } from '@mui/material';
import { SEOHead } from '../components/common/SEOHead';

export const PrivacyPolicy = () => {
    return (
        <>
            <SEOHead />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box mb={6} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            Privacy Policy
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Last Updated: March 10, 2021
                        </Typography>
                    </Box>

                    <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
                        <Typography variant="body1" paragraph>
                            At BANCAT, we value your privacy. This policy outlines how we collect, use, and protect your personal information.
                        </Typography>

                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                            Data Collection
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We collect information necessary to process donations, register volunteers, and improve our services. This may include your name, email address, phone number, and payment information. We ensure that all sensitive data is encrypted and stored securely.
                        </Typography>

                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                            Data Usage
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Your data is used solely for the purpose it was collected. We do not sell or trade your personal information to third parties. We may use your contact information to send you updates about our programs and impact, but you can opt-out at any time.
                        </Typography>

                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                            Security
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
                        </Typography>

                        <Box mt={4} p={3} bgcolor="primary.light" color="white" borderRadius={2}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body1">
                                If you have any questions about this Privacy Policy, please contact us at <strong>support@bancat.org.bd</strong>.
                            </Typography>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};
