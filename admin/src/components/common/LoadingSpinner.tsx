import { CircularProgress, Box, Typography } from '@mui/material';

interface LoadingSpinnerProps {
    message?: string;
    fullScreen?: boolean;
    size?: number;
}

export const LoadingSpinner = ({ message, fullScreen = false, size = 48 }: LoadingSpinnerProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: fullScreen ? '100vh' : '200px',
                width: '100%',
                gap: 2,
            }}
        >
            <CircularProgress color="primary" size={size} thickness={4} />
            {message && (
                <Typography variant="body1" color="text.secondary">
                    {message}
                </Typography>
            )}
        </Box>
    );
};
