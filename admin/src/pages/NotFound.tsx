import { Container, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
            <Paper elevation={0} sx={{ p: 6, bgcolor: 'transparent' }}>
                <Typography variant="h1" fontWeight="bold" color="text.secondary" sx={{ fontSize: '8rem', opacity: 0.1 }}>
                    404
                </Typography>
                <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
                    Page Not Found
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    We couldn't find the page you're looking for within the Admin Panel.
                </Typography>
                <Button
                    component={Link}
                    to="/admin"
                    variant="contained"
                    color="primary"
                >
                    Back to Dashboard
                </Button>
            </Paper>
        </Container>
    );
};
