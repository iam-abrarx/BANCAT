import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import heroImage from '../../assets/hero-new.jpg';

export const Hero = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                minHeight: '115vh', // Increased slightly from 100vh
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                // Header is now fixed/overlay, so we start at top naturally
                // but might need padding to ensure content isn't covered if it starts too high.
                // However, design shows full screen hero with content centered.
                pt: { xs: '180px', md: '250px' },
                pb: { xs: 8, md: 12 }
            }}
        >
            {/* Background Image */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top right', // Aligned right as requested
                    zIndex: -2,
                }}
            />

            {/* Color Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,


                    opacity: 0.93, // Intensified overlay
                    zIndex: -1,
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: 4 }}>
                <Grid container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid item xs={12} md={7} lg={6}>
                        <Box sx={{ pl: { md: '10%', lg: '15%' } }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 600,
                                    fontFamily: "'Montserrat', sans-serif", // Updated to Montserrat
                                    color: 'white',
                                    lineHeight: 0.9,
                                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.2rem' }, // Reduced font size
                                    textTransform: 'uppercase',
                                    letterSpacing: '-2px',
                                    mb: 4
                                }}
                            >
                                FIGHTING<br />
                                CANCER<br />
                                TOGETHER
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'rgba(255,255,255,0.9)',
                                    fontFamily: "'Montserrat', sans-serif", // Updated to Montserrat
                                    mb: 5,
                                    maxWidth: '550px',
                                    fontWeight: 600,
                                    fontSize: { xs: '0.85rem', md: '0.95rem' }, // Reduced secondary font size
                                    lineHeight: 1.6
                                }}
                            >
                                Join BANCAT in our mission<br />
                                to support cancer patients with hope, care, and financial aid.
                            </Typography>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    color: 'white',
                                    borderColor: 'white',
                                    borderRadius: '50px',
                                    px: 5,
                                    py: 1.5,
                                    textTransform: 'none',
                                    fontSize: '1.1rem',
                                    borderWidth: '2px',
                                    '&:hover': {
                                        borderColor: 'white',
                                        bgcolor: 'rgba(255,255,255,0.1)',
                                        borderWidth: '2px'
                                    }
                                }}
                            >
                                Get Involved
                            </Button>
                        </Box>
                    </Grid>



                    {/* Right Content - Donation Blurp */}
                    <Grid item xs={12} md={5} lg={6} sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 0 }, position: 'relative' }}>
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: '520px', // Increased size
                                position: 'relative',
                                minHeight: '620px', // Increased size
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >

                            {/* Organic Blob Background */}
                            <Box
                                component="svg"
                                viewBox="0 0 583.38 546.96"
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '110%',
                                    height: '110%',
                                    zIndex: 0,
                                    overflow: 'visible', // Prevent straight-edge clipping
                                    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3)) brightness(0.6) saturate(1.4)',
                                    '& path': { fill: 'url(#liquidGradient)' }
                                }}
                            >
                                <defs>
                                    <radialGradient id="liquidGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                        <stop offset="0%" stopColor="#4b20dd">
                                            <animate attributeName="stop-color" values="#4b20dd; #6035e8; #4b20dd" dur="8s" repeatCount="indefinite" />
                                        </stop>
                                        <stop offset="100%" stopColor="#AB47BC">
                                            <animate attributeName="stop-color" values="#AB47BC; #8E24AA; #AB47BC" dur="8s" repeatCount="indefinite" />
                                        </stop>
                                    </radialGradient>
                                </defs>
                                {/* User-specified organic shape - Static with subtle breathing animation */}
                                <g transform-origin="center">
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        values="1; 1.02; 1"
                                        dur="10s"
                                        repeatCount="indefinite"
                                        additive="sum"
                                    />
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        values="-1 291 273; 1 291 273; -1 291 273"
                                        dur="12s"
                                        repeatCount="indefinite"
                                        additive="sum"
                                    />
                                    <path
                                        d="M129.56,221.22c-285.22,169-33.58,406.16,126.56,298.83,102.34-68.59,211.81-41.43,288.58-119.44,76.76-78,24.39-200.24-28.85-249.77C462.61,101.32,487.52,13.66,363.71.53c-109.73-11.64-150.82,171.31-234.15,220.69Z"
                                        fill="url(#liquidGradient)"
                                    />
                                </g>
                            </Box>

                            {/* Form Content - Optimized to match reference */}
                            <Box sx={{
                                position: 'relative',
                                zIndex: 1,
                                width: '100%',
                                p: { xs: 4, md: 11 },
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2.5
                            }}>

                                {/* Donation Type */}
                                <Box sx={{ textAlign: 'right', width: '100%' }}>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'block',
                                            color: 'rgba(255,255,255,0.85)',
                                            fontSize: '0.75rem',
                                            fontWeight: 500,
                                            fontFamily: 'Montserrat',
                                            mb: 1,
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        Donation Type
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'white',
                                            fontWeight: 700,
                                            fontSize: '1.5rem',
                                            fontFamily: 'Montserrat',
                                            textAlign: 'right'
                                        }}
                                    >
                                        Jakat fund
                                    </Typography>
                                </Box>

                                {/* Name */}
                                <TextField
                                    fullWidth
                                    placeholder="Name"
                                    variant="standard"
                                    sx={{
                                        maxWidth: '300px',
                                        input: {
                                            '::placeholder': {
                                                color: 'rgba(255,255,255,0.75)',
                                                opacity: 1,
                                                fontWeight: 400,
                                                textAlign: 'right',
                                                fontFamily: 'Montserrat'
                                            }
                                        }
                                    }}
                                    InputProps={{
                                        disableUnderline: true,
                                        sx: {
                                            color: 'white',
                                            fontSize: '0.95rem',
                                            borderBottom: '1.5px solid rgba(255,255,255,0.4)',
                                            py: 0.8,
                                            px: 1,
                                            fontWeight: 400,
                                            fontFamily: 'Montserrat',
                                            textAlign: 'right',
                                            '& input': { textAlign: 'right' }
                                        }
                                    }}
                                />

                                {/* Phone */}
                                <TextField
                                    fullWidth
                                    placeholder="Phone Number"
                                    variant="standard"
                                    sx={{
                                        maxWidth: '300px',
                                        input: {
                                            '::placeholder': {
                                                color: 'rgba(255,255,255,0.75)',
                                                opacity: 1,
                                                fontWeight: 400,
                                                textAlign: 'right',
                                                fontFamily: 'Montserrat'
                                            }
                                        }
                                    }}
                                    InputProps={{
                                        disableUnderline: true,
                                        sx: {
                                            color: 'white',
                                            fontSize: '0.95rem',
                                            borderBottom: '1.5px solid rgba(255,255,255,0.4)',
                                            py: 0.8,
                                            px: 1,
                                            fontWeight: 400,
                                            fontFamily: 'Montserrat',
                                            textAlign: 'right',
                                            '& input': { textAlign: 'right' }
                                        }
                                    }}
                                />

                                {/* Amount */}
                                <TextField
                                    fullWidth
                                    placeholder="Amount"
                                    variant="standard"
                                    sx={{
                                        maxWidth: '300px',
                                        input: {
                                            '::placeholder': {
                                                color: 'rgba(255,255,255,0.75)',
                                                opacity: 1,
                                                fontWeight: 400,
                                                textAlign: 'right',
                                                fontFamily: 'Montserrat'
                                            }
                                        }
                                    }}
                                    InputProps={{
                                        disableUnderline: true,
                                        sx: {
                                            color: 'white',
                                            fontSize: '0.95rem',
                                            borderBottom: '1.5px solid rgba(255,255,255,0.4)',
                                            py: 0.8,
                                            px: 1,
                                            fontWeight: 400,
                                            fontFamily: 'Montserrat',
                                            textAlign: 'right',
                                            '& input': { textAlign: 'right' }
                                        }
                                    }}
                                />

                                {/* Donate Button */}
                                <Button
                                    variant="contained"
                                    endIcon={<Favorite sx={{ fontSize: 18 }} />}
                                    sx={{
                                        mt: 1.5,
                                        maxWidth: '200px',
                                        background: '#F39C12 !important',
                                        color: 'white',
                                        borderRadius: '50px',
                                        py: 1,
                                        px: 4,
                                        fontWeight: 700,
                                        fontFamily: 'Montserrat',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        boxShadow: '0 4px 15px rgba(243, 156, 18, 0.3)',
                                        '&:hover': {
                                            background: '#d68910 !important',
                                            boxShadow: '0 6px 20px rgba(214, 137, 16, 0.4)'
                                        }
                                    }}
                                >
                                    Donate
                                </Button>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
