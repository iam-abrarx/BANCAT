import { Box, Button, Container, Grid, TextField, Typography, ButtonGroup } from '@mui/material';
import { Favorite, CreditCard } from '@mui/icons-material';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { donationService } from '../../services/donationService';
import heroImage from '../../assets/hero-new.jpg';

export const Hero = () => {
    const [amount, setAmount] = useState<string>('');
    const [donationType, setDonationType] = useState<string>('general');
    const [donorName, setDonorName] = useState<string>('');
    const [donorPhone, setDonorPhone] = useState<string>('');
    const [error, setError] = useState<string>('');

    const donationMutation = useMutation({
        mutationFn: donationService.initiate,
        onSuccess: (data) => {
            window.location.href = data.payment_url;
        },
        onError: (err: any) => {
            setError(err.response?.data?.message || 'Failed to process donation');
        }
    });

    const handlePresetClick = (value: string) => {
        setAmount(value);
    };

    const handleDonate = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!amount || Number(amount) < 10) {
            setError('Please enter a valid amount (min ৳10)');
            return;
        }

        donationMutation.mutate({
            amount: Number(amount),
            payment_method: 'bkash', // Default for quick donate
            donor_name: donorName || 'Anonymous',
            donor_phone: donorPhone || undefined,
            category: donationType,
            donation_type: 'one_time',
        });
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                minHeight: '115vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
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
                    backgroundPosition: 'top right',
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
                    background: 'linear-gradient(to right, rgba(88, 45, 130, 0.95) 0%, rgba(88, 45, 130, 0.8) 50%, rgba(88, 45, 130, 0.4) 100%)', // Gradient overlay
                    zIndex: -1,
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: 4 }}>
                <Grid container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid item xs={12} md={7} lg={6}>
                        <Box sx={{ pl: { xs: 0, md: '10%', lg: '15%' }, textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 700,
                                    fontFamily: "'Montserrat', sans-serif",
                                    color: 'white',
                                    lineHeight: { xs: 1.1, md: 0.95 },
                                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '3.5rem', lg: '4.5rem' },
                                    textTransform: 'uppercase',
                                    letterSpacing: { xs: '1px', md: '-1px' },
                                    mb: { xs: 2, md: 4 },
                                    textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                                }}
                            >
                                FIGHTING<br />
                                CANCER<br />
                                TOGETHER
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'rgba(255,255,255,0.95)',
                                    fontFamily: "'Montserrat', sans-serif",
                                    mb: { xs: 4, md: 5 },
                                    mx: { xs: 'auto', md: 0 },
                                    maxWidth: '550px',
                                    fontWeight: 500,
                                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                                    lineHeight: 1.6
                                }}
                            >
                                Join BANCAT in our mission to support cancer patients with hope, care, and financial aid. Your contribution can save a life today.
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
                                maxWidth: '500px',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {/* Glassmorphism Card */}
                            <Box sx={{
                                position: 'relative',
                                zIndex: 1,
                                width: '100%',
                                p: { xs: 4, md: 5 },
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2.5,
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(15px)',
                                borderRadius: '30px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                            }}>
                                <Box sx={{ width: '100%', textAlign: 'center', mb: 1 }}>
                                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, fontFamily: 'Montserrat', mb: 0.5 }}>
                                        Quick Donate
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Montserrat' }}>
                                        Make a difference instantly
                                    </Typography>
                                </Box>

                                {/* Donation Type Selector */}
                                <Box sx={{ width: '100%' }}>
                                    <TextField
                                        select
                                        fullWidth
                                        value={donationType}
                                        onChange={(e) => setDonationType(e.target.value)}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '15px',
                                                bgcolor: 'rgba(255,255,255,0.15)',
                                                color: 'white',
                                                '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                                                '&:hover fieldset': { borderColor: 'white' },
                                                '&.Mui-focused fieldset': { borderColor: '#F39C12' },
                                                '& svg': { color: 'white' }
                                            }
                                        }}
                                    >
                                        <option value="general" style={{ color: 'black' }}>General Fund</option>
                                        <option value="zakat" style={{ color: 'black' }}>Zakat Fund</option>
                                        <option value="sadaqah" style={{ color: 'black' }}>Sadaqah</option>
                                        <option value="emergency" style={{ color: 'black' }}>Emergency Relief</option>
                                        <option value="meal" style={{ color: 'black' }}>Meal Program</option>
                                    </TextField>
                                </Box>

                                {error && (
                                    <Typography variant="caption" sx={{ color: '#FF7675', fontWeight: 600 }}>
                                        {error}
                                    </Typography>
                                )}

                                {/* Preset Amounts */}
                                <ButtonGroup variant="outlined" sx={{ width: '100%', justifyContent: 'center', mb: 1 }}>
                                    {['500', '1000', '2000'].map((amt) => (
                                        <Button
                                            key={amt}
                                            onClick={() => handlePresetClick(amt)}
                                            sx={{
                                                color: 'white',
                                                borderColor: 'rgba(255,255,255,0.4)',
                                                fontFamily: 'Montserrat',
                                                fontWeight: 600,
                                                flexGrow: 1,
                                                '&:hover': {
                                                    borderColor: 'white',
                                                    bgcolor: 'rgba(255,255,255,0.1)'
                                                },
                                                bgcolor: amount === amt ? 'rgba(255,255,255,0.2)' : 'transparent'
                                            }}
                                        >
                                            ৳{amt}
                                        </Button>
                                    ))}
                                    <Button
                                        onClick={() => setAmount('')} // Clear to allow custom
                                        sx={{
                                            color: 'white',
                                            borderColor: 'rgba(255,255,255,0.4)',
                                            fontFamily: 'Montserrat',
                                            fontWeight: 600,
                                            flexGrow: 1,
                                            '&:hover': {
                                                borderColor: 'white',
                                                bgcolor: 'rgba(255,255,255,0.1)'
                                            },
                                            bgcolor: (!['500', '1000', '2000'].includes(amount) && amount !== '') ? 'rgba(255,255,255,0.2)' : 'transparent'
                                        }}
                                    >
                                        Custom
                                    </Button>
                                </ButtonGroup>

                                {/* Inputs */}
                                <TextField
                                    fullWidth
                                    placeholder="Amount (BDT)"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    variant="outlined"
                                    type="number"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '15px',
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                            color: 'white',
                                            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                                            '&:hover fieldset': { borderColor: 'white' },
                                            '&.Mui-focused fieldset': { borderColor: '#F39C12' },
                                        },
                                        input: { '::placeholder': { color: 'rgba(255,255,255,0.6)' } }
                                    }}
                                />

                                <TextField
                                    fullWidth
                                    placeholder="Your Name (Optional)"
                                    value={donorName}
                                    onChange={(e) => setDonorName(e.target.value)}
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '15px',
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                            color: 'white',
                                            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                                            '&:hover fieldset': { borderColor: 'white' },
                                            '&.Mui-focused fieldset': { borderColor: '#F39C12' },
                                        },
                                        input: { '::placeholder': { color: 'rgba(255,255,255,0.6)' } }
                                    }}
                                />

                                <TextField
                                    fullWidth
                                    placeholder="Phone Number"
                                    value={donorPhone}
                                    onChange={(e) => setDonorPhone(e.target.value)}
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '15px',
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                            color: 'white',
                                            '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                                            '&:hover fieldset': { borderColor: 'white' },
                                            '&.Mui-focused fieldset': { borderColor: '#F39C12' },
                                        },
                                        input: { '::placeholder': { color: 'rgba(255,255,255,0.6)' } }
                                    }}
                                />

                                {/* Donate Button */}
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={handleDonate}
                                    disabled={donationMutation.isPending}
                                    endIcon={<Favorite sx={{ fontSize: 18 }} />}
                                    sx={{
                                        mt: 1,
                                        background: 'linear-gradient(45deg, #F39C12 30%, #F7DC6F 90%)',
                                        color: '#333',
                                        borderRadius: '50px',
                                        py: 1.5,
                                        fontWeight: 800,
                                        fontFamily: 'Montserrat',
                                        textTransform: 'none',
                                        fontSize: '1.1rem',
                                        boxShadow: '0 4px 15px rgba(243, 156, 18, 0.4)',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #D68910 30%, #F1C40F 90%)',
                                            boxShadow: '0 6px 20px rgba(214, 137, 16, 0.5)'
                                        }
                                    }}
                                >
                                    {donationMutation.isPending ? 'Processing...' : 'Donate Now'}
                                </Button>

                                {/* Payment Icons Placeholder */}
                                <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center', opacity: 0.8 }}>
                                    <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <CreditCard fontSize="small" />
                                        <Typography variant="caption" sx={{ fontSize: '0.6rem' }}>Cards</Typography>
                                    </Box>
                                    <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Box component="span" sx={{ fontWeight: 900, fontSize: '1.2rem', lineHeight: 1 }}>b</Box>
                                        <Typography variant="caption" sx={{ fontSize: '0.6rem' }}>bKash</Typography>
                                    </Box>
                                    <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Box component="span" sx={{ fontWeight: 900, fontSize: '1.2rem', lineHeight: 1, color: '#F15A24' }}>N</Box>
                                        <Typography variant="caption" sx={{ fontSize: '0.6rem' }}>Nagad</Typography>
                                    </Box>
                                </Box>

                                {/* FAQ Link */}
                                <Box sx={{ mt: 1, textAlign: 'center' }}>
                                    <Button
                                        href="/faq"
                                        startIcon={<Box component="span" sx={{
                                            border: '1px solid currentColor',
                                            borderRadius: '50%',
                                            width: 16,
                                            height: 16,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '10px'
                                        }}>?</Box>}
                                        sx={{
                                            color: 'rgba(255,255,255,0.7)',
                                            textTransform: 'none',
                                            fontSize: '0.875rem',
                                            fontFamily: 'Montserrat',
                                            '&:hover': {
                                                color: 'white',
                                                bgcolor: 'transparent',
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        Donation FAQ
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
