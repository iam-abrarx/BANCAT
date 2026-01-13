import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    TextField,
    Paper,
    FormControlLabel,
    Checkbox,
    Stack,
    Divider,
    alpha,
    CircularProgress,
    Alert
} from '@mui/material';
import {
    Security,
    InfoOutlined
} from '@mui/icons-material';
import { useMutation } from '@tanstack/react-query';
import { donationService } from '../services/donationService';

export const DonationPage = () => {
    const [amount, setAmount] = useState<string>('100');
    const [category, setCategory] = useState<string>('general');
    const [isDedicated, setIsDedicated] = useState(false);
    const [dedicationType, setDedicationType] = useState<string>('honor');
    const [dedicationName, setDedicationName] = useState('');
    const [coverFees, setCoverFees] = useState(false);
    const [donorName, setDonorName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');
    const [donorPhone, setDonorPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [paymentMethod, setPaymentMethod] = useState<string>('bkash');
    const [error, setError] = useState<string>('');
    const presetAmounts = ['50', '100', '250', '500', '1000', '2500'];

    const donationMutation = useMutation({
        mutationFn: donationService.initiate,
        onSuccess: (data) => {
            window.location.href = data.payment_url;
        },
        onError: (err: any) => {
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        }
    });

    const handleDonate = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!donorEmail) {
            setError('Please provide your email address.');
            return;
        }

        const finalAmount = coverFees ? Number(amount) + 5.50 : Number(amount);

        donationMutation.mutate({
            amount: finalAmount,
            payment_method: paymentMethod,
            donor_name: donorName || 'Anonymous',
            donor_email: donorEmail,
            donor_phone: donorPhone,
            category: category,
            donation_type: 'one_time',
            message: isDedicated ? `Dedication (${dedicationType}): ${dedicationName}` : undefined,
            // Note: address, city, zip code could be added to extra metadata if backend supports it
        });
    };

    return (
        <Box sx={{
            background: 'linear-gradient(135deg, #6A1B9A 0%, #4A148C 100%)',
            minHeight: '100vh',
            py: { xs: 4, md: 8 },
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 30%, rgba(145, 74, 175, 0.2) 0%, transparent 50%)',
                pointerEvents: 'none'
            }
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    {/* Left Side: Impact Text */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ color: 'white', pr: { md: 4 }, height: '100%' }}>
                            <Box sx={{ mb: 4, borderRadius: '4px', overflow: 'hidden', width: '100%', height: 350 }}>
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Help us end cancer"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    mb: 3,
                                    fontFamily: 'Montserrat',
                                    position: { md: 'sticky' },
                                    top: { md: '120px' }
                                }}
                            >
                                Donate today and help us end cancer as we know it, for everyone.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Side: Donation Form */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={10}
                            sx={{
                                p: { xs: 3, md: 5 },
                                borderRadius: '8px',
                                bgcolor: 'white'
                            }}
                        >
                            <Stack spacing={4}>
                                <Typography variant="h6" sx={{ fontWeight: 800, color: '#333' }}>
                                    Select Amount
                                </Typography>

                                {/* Preset Amounts Grid */}
                                <Grid container spacing={2}>
                                    {presetAmounts.map((amt) => (
                                        <Grid item xs={4} key={amt}>
                                            <Button
                                                fullWidth
                                                variant={amount === amt ? 'contained' : 'outlined'}
                                                onClick={() => setAmount(amt)}
                                                sx={{
                                                    py: 1.5,
                                                    fontWeight: 700,
                                                    fontSize: '1.1rem',
                                                    borderRadius: '4px',
                                                    borderWidth: '2px',
                                                    borderColor: '#6A1B9A',
                                                    bgcolor: amount === amt ? '#6A1B9A' : 'transparent',
                                                    color: amount === amt ? 'white' : '#6A1B9A',
                                                    '&:hover': {
                                                        borderWidth: '2px',
                                                        borderColor: '#4A148C',
                                                        bgcolor: amount === amt ? '#4A148C' : alpha('#6A1B9A', 0.05)
                                                    }
                                                }}
                                            >
                                                ৳{amt}
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>

                                <TextField
                                    fullWidth
                                    placeholder="Enter Donation Amount"
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    InputProps={{
                                        startAdornment: <Typography sx={{ mr: 1, fontWeight: 700, color: '#666' }}>৳</Typography>
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            height: 56,
                                            fontSize: '1.2rem',
                                            fontWeight: 600
                                        }
                                    }}
                                />

                                <Divider />

                                <Typography variant="h6" sx={{ fontWeight: 800, color: '#333' }}>
                                    Designation
                                </Typography>

                                <TextField
                                    select
                                    fullWidth
                                    label="Choose Where to Give"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    SelectProps={{
                                        native: true,
                                    }}
                                >
                                    <option value="general">General Fund</option>
                                    <option value="zakat">Zakat Fund</option>
                                    <option value="sadaqah">Sadaqah</option>
                                    <option value="emergency">Emergency Relief</option>
                                    <option value="meal">Meal Program</option>
                                </TextField>

                                {/* Donation Options */}
                                <Stack spacing={1}>
                                    <FormControlLabel
                                        control={<Checkbox checked={isDedicated} onChange={(e) => setIsDedicated(e.target.checked)} />}
                                        label="I want to dedicate my donation."
                                    />
                                    {isDedicated && (
                                        <Grid container spacing={2} sx={{ mt: 1, pl: 4 }}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    select
                                                    fullWidth
                                                    label="Dedication Type"
                                                    value={dedicationType}
                                                    onChange={(e) => setDedicationType(e.target.value)}
                                                    SelectProps={{ native: true }}
                                                >
                                                    <option value="honor">In Honor Of</option>
                                                    <option value="memory">In Memory Of</option>
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Name"
                                                    value={dedicationName}
                                                    onChange={(e) => setDedicationName(e.target.value)}
                                                />
                                            </Grid>
                                        </Grid>
                                    )}
                                    <FormControlLabel
                                        control={<Checkbox checked={coverFees} onChange={(e) => setCoverFees(e.target.checked)} />}
                                        label={
                                            <Typography variant="body2">
                                                I'll cover the processing fee. Add <strong>৳5.50</strong> to my donation.
                                            </Typography>
                                        }
                                    />
                                </Stack>

                                <Divider />

                                {/* Donor Information */}
                                <Typography variant="h6" sx={{ fontWeight: 800, color: '#333' }}>
                                    Your Information
                                </Typography>

                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Full Name"
                                            value={donorName}
                                            onChange={(e) => setDonorName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            required
                                            label="Email Address"
                                            type="email"
                                            value={donorEmail}
                                            onChange={(e) => setDonorEmail(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            value={donorPhone}
                                            onChange={(e) => setDonorPhone(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Street Address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="City"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Postal Code"
                                            value={zipCode}
                                            onChange={(e) => setZipCode(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>

                                <Divider />

                                <Typography variant="h6" sx={{ fontWeight: 800, color: '#333' }}>
                                    Payment Method
                                </Typography>

                                <Grid container spacing={2}>
                                    {['bkash', 'nagad', 'card'].map((pm) => (
                                        <Grid item xs={4} key={pm}>
                                            <Button
                                                fullWidth
                                                variant={paymentMethod === pm ? 'contained' : 'outlined'}
                                                onClick={() => setPaymentMethod(pm)}
                                                sx={{
                                                    py: 1.5,
                                                    fontWeight: 700,
                                                    textTransform: 'capitalize',
                                                    borderColor: '#6A1B9A',
                                                    bgcolor: paymentMethod === pm ? '#6A1B9A' : 'transparent',
                                                    color: paymentMethod === pm ? 'white' : '#6A1B9A',
                                                    '&:hover': {
                                                        borderColor: '#4A148C',
                                                        bgcolor: paymentMethod === pm ? '#4A148C' : alpha('#6A1B9A', 0.05)
                                                    }
                                                }}
                                            >
                                                {pm}
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>

                                {error && (
                                    <Alert severity="error" sx={{ borderRadius: '8px' }}>
                                        {error}
                                    </Alert>
                                )}

                                {/* Submit Button */}
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    onClick={handleDonate}
                                    disabled={donationMutation.isPending}
                                    sx={{
                                        py: 2,
                                        fontSize: '1.2rem',
                                        fontWeight: 800,
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 6px 20px rgba(245, 170, 33, 0.4)'
                                        },
                                        transition: 'all 0.2s ease',
                                        borderRadius: '4px',
                                        boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
                                    }}
                                >
                                    {donationMutation.isPending ? (
                                        <CircularProgress size={24} color="inherit" />
                                    ) : (
                                        'Process My Donation'
                                    )}
                                </Button>

                                <Stack direction="row" spacing={2} justifyContent="center" sx={{ opacity: 0.6 }}>
                                    <Stack direction="row" spacing={0.5} alignItems="center">
                                        <Security sx={{ fontSize: 14 }} />
                                        <Typography variant="caption">Secure Payment</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={0.5} alignItems="center">
                                        <InfoOutlined sx={{ fontSize: 14 }} />
                                        <Typography variant="caption" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>FAQ</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
