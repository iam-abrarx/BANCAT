import { Box, Button, Container, Grid, MenuItem, Select, TextField, Typography, Zoom } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import heroImage from '../../assets/hero.webp';

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
                    bgcolor: '#582D82',
                    mixBlendMode: 'multiply',
                    opacity: 0.93, // Intensified overlay
                    zIndex: -1,
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: 4 }}>
                <Grid container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid item xs={12} md={7} lg={6}>
                        <Zoom in={true} timeout={1000}>
                            <Box sx={{ pl: { md: '10%', lg: '25%' } }}>
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
                                    Join BANCAT in our mission to support cancer patients with hope, care, and financial aid.
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
                        </Zoom>
                    </Grid>



                    {/* Right Content - Donation Blurp */}
                    <Grid item xs={12} md={5} lg={6} sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 0 }, position: 'relative' }}>
                        <Zoom in={true} timeout={1200} style={{ transitionDelay: '200ms' }}>
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

                                {/* Form Content - Transparent */}
                                <Box sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    width: '100%',
                                    p: { xs: 4, md: 5 },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2
                                }}>

                                    {/* Donation Type */}
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant="caption" sx={{ mr: 0.9, mb: 0.5, display: 'block', opacity: 0.9, fontSize: '0.7rem', fontWeight: 600 }}>Donation Type</Typography>
                                        <Select
                                            fullWidth
                                            defaultValue="zakat"
                                            variant="standard"
                                            disableUnderline
                                            sx={{
                                                color: 'white',
                                                fontWeight: 700,
                                                fontSize: '1.2rem',
                                                width: '65%', // Reduced width
                                                ml: 'auto',   // Flush right
                                                textAlign: 'right', // Right align text
                                                '& .MuiSelect-select': { py: 0.5, px: 0.5, pr: '24px !important' },
                                                '& .MuiSvgIcon-root': { color: 'white', left: 0, right: 'auto' },
                                                borderBottom: '2px solid rgba(255,255,255,0.4)',
                                                '&:hover:before': { borderBottom: '2px solid rgba(255,255,255,0.8) !important' }
                                            }}
                                        >
                                            <MenuItem value="zakat">Jakat fund</MenuItem>
                                            <MenuItem value="general">General Donation</MenuItem>
                                            <MenuItem value="support">Single Patient</MenuItem>
                                        </Select>
                                    </Box>

                                    {/* Name */}
                                    <TextField
                                        fullWidth
                                        placeholder="Name"
                                        variant="standard"
                                        sx={{
                                            width: '75%', // Reduced width
                                            ml: 'auto',   // Flush right
                                            input: { '::placeholder': { color: 'rgba(255,255,255,0.8)', opacity: 1, fontWeight: 500, textAlign: 'right' } }
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                            sx: {
                                                color: 'white',
                                                fontSize: '0.95rem',
                                                borderBottom: '1px solid rgba(255,255,255,0.4)',
                                                py: 0.5,
                                                px: 0.5,
                                                fontWeight: 500,
                                                textAlign: 'right', // Align input text to right
                                                '& input': { textAlign: 'right' } // Ensure inner input is right aligned
                                            }
                                        }}
                                    />

                                    {/* Phone */}
                                    <TextField
                                        fullWidth
                                        placeholder="Phone Number"
                                        variant="standard"
                                        sx={{
                                            width: '65%', // Reduced width
                                            ml: 'auto',   // Flush right
                                            input: { '::placeholder': { color: 'rgba(255,255,255,0.8)', opacity: 1, fontWeight: 500, textAlign: 'right' } }
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                            sx: {
                                                color: 'white',
                                                fontSize: '0.95rem',
                                                borderBottom: '1px solid rgba(255,255,255,0.4)',
                                                py: 0.5,
                                                px: 0.5,
                                                ml: '0%', // Margin shortens the underline
                                                fontWeight: 500,
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
                                            width: '55%', // Reduced width
                                            ml: 'auto',   // Flush right
                                            input: { '::placeholder': { color: 'rgba(255,255,255,0.8)', opacity: 1, fontWeight: 500, textAlign: 'right' } }
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                            sx: {
                                                color: 'white',
                                                fontSize: '0.95rem',
                                                borderBottom: '1px solid rgba(255,255,255,0.4)',
                                                py: 0.5,
                                                px: 0.5,
                                                ml: '0%', // Margin shortens the underline
                                                fontWeight: 500,
                                                textAlign: 'right',
                                                '& input': { textAlign: 'right' }
                                            }
                                        }}

                                    />

                                    {/* Donate Button */}
                                    {/* Donate Button */}
                                    <Button
                                        variant="contained"
                                        endIcon={<Favorite sx={{ fontSize: 16 }} />}
                                        sx={{
                                            mt: 2, // 2011 Changed from mt: 3 to mt: 2
                                            width: '65%',
                                            alignSelf: 'flex-end',
                                            background: '#F39C12 !important',
                                            color: 'white',
                                            borderRadius: '50px',
                                            py: 0.4, // Reduced padding for height reduction
                                            fontWeight: 700,
                                            textTransform: 'none',
                                            fontSize: '0.9rem',
                                            boxShadow: 'none',
                                            '&:hover': {
                                                background: '#d68910 !important',
                                                boxShadow: '0 5px 10px rgba(214, 137, 16, 0.20)' // 15% shadow based on hover color
                                            }
                                        }}
                                    >
                                        Donate
                                    </Button>

                                </Box>
                            </Box>
                        </Zoom>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
