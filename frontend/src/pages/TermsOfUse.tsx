import { Container, Typography, Box, Paper, Alert, AlertTitle } from '@mui/material';
import { SEOHead } from '../components/common/SEOHead';

export const TermsOfUse = () => {
    return (
        <>
            <SEOHead />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box mb={6} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            Terms of Use
                        </Typography>
                    </Box>

                    <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
                        <Alert severity="warning" sx={{ mb: 4 }}>
                            <AlertTitle>Important Notice</AlertTitle>
                            THIS AGREEMENT CONTAINS A BINDING ARBITRATION PROVISION AND CLASS ACTION WAIVER. PLEASE READ CAREFULLY.
                        </Alert>

                        <Typography variant="body1" paragraph>
                            By accessing and using the BANCAT website, you agree to comply with and be bound by the following terms and conditions of use.
                        </Typography>

                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                            1. Acceptance of Terms
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Your access to and use of this website is subject exclusively to these Terms and Conditions. You will not use the Website for any purpose that is unlawful or prohibited by these Terms and Conditions.
                        </Typography>

                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                            2. Use of Content
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The content of the pages of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                        </Typography>

                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                            3. Limitation of Liability
                        </Typography>
                        <Typography variant="body1" paragraph>
                            BANCAT will not be liable for any indirect or consequential loss or damage whatever (including without limitation loss of business, opportunity, data, profits) arising out of or in connection with the use of the Website.
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ mt: 4, fontStyle: 'italic', color: 'text.secondary' }}>
                            Last updated: January 2026
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};
