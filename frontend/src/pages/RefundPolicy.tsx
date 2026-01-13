import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import { SEOHead } from '../components/common/SEOHead';
import { ContactSupport } from '@mui/icons-material';

export const RefundPolicy = () => {
    return (
        <>
            <SEOHead />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box mb={6} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            Refund Policy
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Our commitment to donor transparency and trust.
                        </Typography>
                    </Box>

                    <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
                        <Typography variant="h4" gutterBottom fontWeight="bold" color="text.primary">
                            Donation Refunds
                        </Typography>
                        <Divider sx={{ mb: 3 }} />

                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            We are grateful for your donation and support of our organization. If you have made an error in making your donation or change your mind about contributing to our organization, please contact us.
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            Refunds are returned using the original method of payment. If you made your donation by credit card, your refund will be credited to that same credit card. Please note that banks may take 3-5 business days to process the refund transaction.
                        </Typography>

                        <Box mt={4} display="flex" flexDirection="column" alignItems="center" bgcolor="#f5f5f5" p={4} borderRadius={2}>
                            <ContactSupport color="primary" sx={{ fontSize: 50, mb: 1 }} />
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                Need Assistance?
                            </Typography>
                            <Typography variant="body1">
                                For any refund requests, please email us with your transaction details:
                            </Typography>
                            <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mt: 1 }}>
                                support@bancatbd.org
                            </Typography>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};
