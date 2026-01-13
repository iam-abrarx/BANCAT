import { Container, Typography, Box, Paper } from '@mui/material';
import { Visibility as VisibilityIcon } from '@mui/icons-material';
import { SEOHead } from '../components/common/SEOHead';

export const SupervisionPage = () => {
    return (
        <>
            <SEOHead
                title="Supervision - BANCAT"
                description="Clinical supervision for palliative care providers."
            />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="md">
                    <Box textAlign="center" mb={6}>
                        <VisibilityIcon color="info" sx={{ fontSize: 60, mb: 2 }} />
                        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                            Clinical Supervision
                        </Typography>
                    </Box>

                    <Paper elevation={0} sx={{ p: 5, borderRadius: 2 }}>
                        <Typography paragraph variant="subtitle1" sx={{ lineHeight: 1.8 }}>
                            At BANCAT, we believe that those who care for others also need care. Our Clinical Supervision program is designed to support our volunteers, nurses, and doctors.
                        </Typography>
                        <Typography paragraph>
                            Palliative care can be emotionally demanding. Supervision provides a structured environment where our team members can reflect on their practice, discuss challenging cases, and receive feedback and support.
                        </Typography>
                        <Typography paragraph>
                            This ensures that our team remains resilient, avoids burnout, and continues to provide the highest standard of compassionate care to our patients.
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};
