import { Box, LinearProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export const LoadingPage = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                const diff = Math.random() * 20;
                return Math.min(oldProgress + diff, 100);
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: '#6A1B9A', // Brand Deep Purple
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography
                    variant="h2"
                    sx={{
                        color: 'white',
                        fontWeight: 900,
                        letterSpacing: '4px',
                        fontFamily: "'Montserrat', sans-serif",
                        mb: 1,
                        animation: 'pulse 2s infinite ease-in-out',
                        '@keyframes pulse': {
                            '0%': { transform: 'scale(0.98)', opacity: 0.8 },
                            '50%': { transform: 'scale(1.02)', opacity: 1 },
                            '100%': { transform: 'scale(0.98)', opacity: 0.8 }
                        }
                    }}
                >
                    BANCAT
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        color: 'rgba(255,255,255,0.7)',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: 500
                    }}
                >
                    Fight Cancer Together
                </Typography>
            </Box>

            <Box sx={{ width: '200px', mt: 2 }}>
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                        height: 6,
                        borderRadius: 3,
                        bgcolor: 'rgba(255,255,255,0.1)',
                        '& .MuiLinearProgress-bar': {
                            bgcolor: '#f5aa21', // Brand Amber
                            borderRadius: 3
                        }
                    }}
                />
            </Box>
        </Box>
    );
};
