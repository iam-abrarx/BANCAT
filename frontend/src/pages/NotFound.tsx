import { Container, Typography, Box, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NotFound = () => {
    return (
        <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', py: 10 }}>
            <Helmet>
                <title>Page Not Found | BANcat</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Helmet>

            <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="h1" fontWeight="bold" color="primary.main" sx={{ fontSize: { xs: '6rem', md: '10rem' }, opacity: 0.2 }}>
                        404
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mt: -2 }}>
                        Page Not Found
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </Typography>

                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        size="large"
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: '50px',
                            textTransform: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        Return Home
                    </Button>
                </motion.div>
            </Container>
        </Box>
    );
};
