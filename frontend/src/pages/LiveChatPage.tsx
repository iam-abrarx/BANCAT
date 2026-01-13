import { Container, Typography, Box, Paper, Button, Avatar, Stack } from '@mui/material';
import { LiveHelp as LiveHelpIcon, WhatsApp as WhatsAppIcon, Email as EmailIcon } from '@mui/icons-material';
import { SEOHead } from '../components/common/SEOHead';

export const LiveChatPage = () => {
    return (
        <>
            <SEOHead
                title="Live Chat Support - BANCAT"
                description="Chat with our support team for immediate assistance."
            />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <Container maxWidth="sm">
                    <Paper elevation={3} sx={{ p: 5, borderRadius: 4, textAlign: 'center' }}>
                        <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
                            <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', mx: 'auto' }}>
                                <LiveHelpIcon sx={{ fontSize: 40 }} />
                            </Avatar>
                            <Box sx={{
                                position: 'absolute', bottom: 0, right: 0, width: 20, height: 20,
                                bgcolor: '#4caf50', borderRadius: '50%', border: '3px solid white'
                            }} />
                        </Box>

                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Start a Conversation
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Our support volunteers are available to chat. Please note that we are a volunteer-run organization, so response times may vary.
                        </Typography>

                        <Stack spacing={2} sx={{ mt: 4 }}>
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                startIcon={<WhatsAppIcon />}
                                href="https://wa.me/8801700000000" // Replace with actual number
                                target="_blank"
                                fullWidth
                                sx={{ py: 1.5, borderRadius: 2 }}
                            >
                                Chat on WhatsApp
                            </Button>

                            <Box sx={{ my: 2, display: 'flex', alignItems: 'center', opacity: 0.6 }}>
                                <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
                                <Typography variant="caption" sx={{ px: 2 }}>OR</Typography>
                                <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
                            </Box>

                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<EmailIcon />}
                                href="mailto:support@bancat.org.bd"
                                fullWidth
                                sx={{ py: 1.5, borderRadius: 2 }}
                            >
                                Send us an Email
                            </Button>
                        </Stack>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};
