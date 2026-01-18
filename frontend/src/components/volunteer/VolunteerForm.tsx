import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    Paper, Typography, TextField, Button, Box, Alert, MenuItem,
    FormControl, InputLabel, Select, Grid, InputAdornment, RadioGroup,
    FormControlLabel, Radio, FormHelperText, alpha, Checkbox
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { volunteerService } from '../../services/volunteerService';
import { LoadingSpinner } from '../common/LoadingSpinner';

// Icons
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import BusinessIcon from '@mui/icons-material/Business';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

export const VolunteerForm = () => {
    const { t } = useTranslation();
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [photoFile, setPhotoFile] = useState<File | null>(null);

    const { control, handleSubmit, reset, formState: { errors }, watch, trigger } = useForm({
        defaultValues: {
            name: '',
            father_name: '',
            mobile: '',
            alt_mobile: '',
            email: '',
            occupation: '',
            institution: '',
            current_address: '',
            perm_division: '',
            perm_district: '',
            perm_upazila: '',
            perm_union: '',
            fb_link: '',
            linkedin_link: '',
            whatsapp: '',
            edu_level: '',
            passing_year: '',
            degree: '',
            edu_institution: '',
            prev_experience: '',
            join_team: 'No',
            preferred_team: '',
        }
    });

    const joinTeamValue = watch('join_team');

    const mutation = useMutation({
        mutationFn: volunteerService.apply,
        onSuccess: () => {
            setSuccessMsg(t('volunteer.form.success_msg'));
            setErrorMsg('');
            reset();
            setPhotoFile(null);
            window.scrollTo(0, 0);
        },
        onError: (err: any) => {
            console.error(err);
            setErrorMsg(err.response?.data?.message || t('volunteer.form.error_msg'));
            setSuccessMsg('');
            window.scrollTo(0, 0);
        }
    });

    const onSubmit = (data: any) => {
        if (!photoFile) {
            setErrorMsg(t('volunteer.form.photo_required'));
            window.scrollTo(0, 0);
            return;
        }
        if (!data.fb_link && !data.linkedin_link) {
            setErrorMsg(t('volunteer.form.social_required'));
            window.scrollTo(0, 0);
            return;
        }

        const formData = new FormData();
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
        formData.append('photo', photoFile);

        mutation.mutate(formData);
    };

    if (mutation.isPending) return <LoadingSpinner />;

    // Custom Styled Components helpers
    const SectionTitle = ({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle?: string }) => (
        <Box sx={{ mb: 4, mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box sx={{
                    p: 1, mr: 2, borderRadius: 2,
                    bgcolor: alpha('#582d82', 0.1),
                    color: '#582d82',
                    display: 'flex'
                }}>
                    {icon}
                </Box>
                <Box>
                    <Typography variant="h6" fontWeight="700" color="#2d3436">
                        {title}
                    </Typography>
                    {subtitle && <Typography variant="caption" color="text.secondary">{subtitle}</Typography>}
                </Box>
            </Box>
        </Box>
    );

    const inputStyles = {
        '& .MuiOutlinedInput-root': {
            borderRadius: 3,
            backgroundColor: '#f8fafc',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            },
            '&.Mui-focused': {
                backgroundColor: '#fff',
                boxShadow: '0 4px 12px rgba(88, 45, 130, 0.1)',
                '& fieldset': { borderColor: '#582d82' }
            }
        },
        '& .MuiInputLabel-root': { color: '#64748b' }
    };

    return (
        <Box sx={{ position: 'relative' }}>
            {/* Status Messages */}
            <Box sx={{ mb: 4 }}>
                {successMsg && (
                    <Alert severity="success" variant="filled" sx={{ borderRadius: 3, mb: 2 }}>
                        {successMsg}
                    </Alert>
                )}
                {errorMsg && (
                    <Alert severity="error" variant="filled" sx={{ borderRadius: 3, mb: 2 }}>
                        {errorMsg}
                    </Alert>
                )}
            </Box>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>

                {/* 1. PERSONAL DETAILS CARD */}
                <Paper elevation={0} sx={{ p: 4, mb: 4, borderRadius: 4, border: '1px solid #edf2f7', boxShadow: '0 2px 20px rgba(0,0,0,0.02)' }}>
                    <SectionTitle icon={<PersonOutlineIcon />} title={t('volunteer.form.personal_info')} subtitle={t('volunteer.form.personal_info_sub')} />

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Controller name="name" control={control} rules={{ required: t('volunteer.form.name_required') }}
                                render={({ field }) => (
                                    <TextField {...field} label={t('volunteer.form.name') + " *"} fullWidth sx={inputStyles}
                                        error={!!errors.name} helperText={errors.name?.message as string}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller name="father_name" control={control} rules={{ required: t('volunteer.form.father_name_required') }}
                                render={({ field }) => (
                                    <TextField {...field} label={t('volunteer.form.father_name') + " *"} fullWidth sx={inputStyles}
                                        error={!!errors.father_name} helperText={errors.father_name?.message as string}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller name="mobile" control={control} rules={{ required: t('volunteer.form.mobile_required') }}
                                render={({ field }) => (
                                    <TextField {...field} label={t('volunteer.form.mobile') + " *"} fullWidth sx={inputStyles}
                                        error={!!errors.mobile} helperText={errors.mobile?.message as string}
                                        InputProps={{ startAdornment: <InputAdornment position="start"><PhoneIphoneIcon fontSize="small" color="disabled" /></InputAdornment> }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller name="email" control={control} rules={{ required: t('volunteer.form.email_required'), pattern: { value: /^\S+@\S+$/i, message: t('volunteer.form.email_invalid') } }}
                                render={({ field }) => (
                                    <TextField {...field} label={t('volunteer.form.email') + " *"} fullWidth sx={inputStyles}
                                        error={!!errors.email} helperText={errors.email?.message as string}
                                        InputProps={{ startAdornment: <InputAdornment position="start"><MailOutlineIcon fontSize="small" color="disabled" /></InputAdornment> }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller name="alt_mobile" control={control}
                                render={({ field }) => (
                                    <TextField {...field} label={t('volunteer.form.alt_mobile')} fullWidth sx={inputStyles}
                                        error={!!errors.alt_mobile} helperText={errors.alt_mobile?.message as string}
                                        InputProps={{ startAdornment: <InputAdornment position="start"><PhoneIphoneIcon fontSize="small" color="disabled" /></InputAdornment> }}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </Paper>

                {/* 2. PROFESSIONAL & ADDRESS CARD */}
                <Paper elevation={0} sx={{ p: 4, mb: 4, borderRadius: 4, border: '1px solid #edf2f7', boxShadow: '0 2px 20px rgba(0,0,0,0.02)' }}>
                    <Grid container spacing={6}>
                        {/* Section: Professional */}
                        <Grid item xs={12} lg={12}>
                            <SectionTitle icon={<WorkOutlineIcon />} title={t('volunteer.form.professional_info')} subtitle={t('volunteer.form.professional_info_sub')} />
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Controller name="occupation" control={control}
                                        render={({ field }) => (
                                            <TextField {...field} label={t('volunteer.form.occupation')} fullWidth sx={inputStyles}
                                                error={!!errors.occupation} helperText={errors.occupation?.message as string}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Controller name="institution" control={control}
                                        render={({ field }) => (
                                            <TextField {...field} label={t('volunteer.form.institution')} fullWidth sx={inputStyles}
                                                error={!!errors.institution} helperText={errors.institution?.message as string}
                                                InputProps={{ startAdornment: <InputAdornment position="start"><BusinessIcon fontSize="small" color="disabled" /></InputAdornment> }}
                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Section: Address */}
                        <Grid item xs={12} lg={12}>
                            <SectionTitle icon={<HomeOutlinedIcon />} title={t('volunteer.form.address_details')} subtitle={t('volunteer.form.address_details_sub')} />

                            <Box sx={{ mb: 3 }}>
                                <Controller name="current_address" control={control} rules={{ required: t('volunteer.form.address_required') }}
                                    render={({ field }) => (
                                        <TextField {...field} label={t('volunteer.form.current_address') + " *"} fullWidth multiline rows={2} sx={inputStyles}
                                            error={!!errors.current_address} helperText={errors.current_address?.message as string}
                                        />
                                    )}
                                />
                            </Box>

                            <Typography variant="subtitle2" sx={{ mb: 2, color: '#582d82', fontWeight: 600 }}>{t('volunteer.form.perm_address_label')}</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Controller name="perm_division" control={control}
                                        render={({ field }) => <TextField {...field} label={t('volunteer.form.division')} fullWidth sx={inputStyles} error={!!errors.perm_division} />}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Controller name="perm_district" control={control}
                                        render={({ field }) => <TextField {...field} label={t('volunteer.form.district')} fullWidth sx={inputStyles} error={!!errors.perm_district} />}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Controller name="perm_upazila" control={control}
                                        render={({ field }) => <TextField {...field} label={t('volunteer.form.upazila')} fullWidth sx={inputStyles} error={!!errors.perm_upazila} />}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Controller name="perm_union" control={control}
                                        render={({ field }) => <TextField {...field} label={t('volunteer.form.union')} fullWidth sx={inputStyles} error={!!errors.perm_union} />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>

                {/* 3. SOCIAL & EDUCATION CARD */}
                <Paper elevation={0} sx={{ p: 4, mb: 4, borderRadius: 4, border: '1px solid #edf2f7', boxShadow: '0 2px 20px rgba(0,0,0,0.02)' }}>
                    <SectionTitle icon={<SchoolOutlinedIcon />} title={t('volunteer.form.education_social')} subtitle={t('volunteer.form.education_social_sub')} />

                    <Typography variant="subtitle2" sx={{ mb: 2, color: '#582d82', fontWeight: 600 }}>{t('volunteer.form.edu_qual')}</Typography>
                    <Grid container spacing={3} sx={{ mb: 5 }}>
                        <Grid item xs={12} md={6}>
                            <Controller name="edu_level" control={control} rules={{ required: t('volunteer.form.edu_level_required') }}
                                render={({ field }) => (
                                    <FormControl fullWidth error={!!errors.edu_level} sx={inputStyles}>
                                        <InputLabel>{t('volunteer.form.edu_level') + " *"}</InputLabel>
                                        <Select {...field} label={t('volunteer.form.edu_level') + " *"}>
                                            <MenuItem value="Secondary">{t('volunteer.form.edu_secondary')}</MenuItem>
                                            <MenuItem value="Higher Secondary">{t('volunteer.form.edu_hs')}</MenuItem>
                                            <MenuItem value="Undergraduate">{t('volunteer.form.edu_undergrad')}</MenuItem>
                                            <MenuItem value="Postgraduate">{t('volunteer.form.edu_postgrad')}</MenuItem>
                                            <MenuItem value="Other">{t('volunteer.form.edu_other')}</MenuItem>
                                        </Select>
                                        {errors.edu_level && <FormHelperText>{errors.edu_level.message as string}</FormHelperText>}
                                    </FormControl>
                                )}
                            />
                        </Grid>
                        {/* Making specific details optional, as Level might be 'Other' or 'Secondary' where degree isn't relevant */}
                        <Grid item xs={12} md={6}>
                            <Controller name="degree" control={control}
                                render={({ field }) => (
                                    <TextField {...field} label={t('volunteer.form.degree')} fullWidth sx={inputStyles} error={!!errors.degree} helperText={errors.degree?.message as string} />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Controller name="edu_institution" control={control}
                                render={({ field }) => (
                                    <TextField {...field} label={t('volunteer.form.last_institution')} fullWidth sx={inputStyles} error={!!errors.edu_institution} helperText={errors.edu_institution?.message as string} />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Controller name="passing_year" control={control}
                                render={({ field }) => (
                                    <TextField {...field} label={t('volunteer.form.passing_year')} fullWidth sx={inputStyles} error={!!errors.passing_year} helperText={errors.passing_year?.message as string} />
                                )}
                            />
                        </Grid>
                    </Grid>

                    <Typography variant="subtitle2" sx={{ mb: 2, color: '#582d82', fontWeight: 600 }}>{t('volunteer.form.social_media_label')}</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Controller name="fb_link" control={control}
                                rules={{ validate: (value, formValues) => !!value || !!formValues.linkedin_link || t('volunteer.form.social_required') }}
                                render={({ field }) => (
                                    <TextField {...field} label={t('volunteer.form.fb_label')} fullWidth sx={inputStyles} error={!!errors.fb_link} helperText={errors.fb_link?.message as string}
                                        InputProps={{ startAdornment: <InputAdornment position="start"><FacebookIcon color="primary" /></InputAdornment> }}
                                        onChange={(e) => { field.onChange(e); if (errors.linkedin_link) trigger('linkedin_link'); }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller name="linkedin_link" control={control}
                                rules={{ validate: (value, formValues) => !!value || !!formValues.fb_link || t('volunteer.form.social_required') }}
                                render={({ field }) => (
                                    <TextField {...field} label={t('volunteer.form.linkedin_label')} fullWidth sx={inputStyles} error={!!errors.linkedin_link} helperText={errors.linkedin_link?.message as string}
                                        InputProps={{ startAdornment: <InputAdornment position="start"><LinkedInIcon color="primary" /></InputAdornment> }}
                                        onChange={(e) => { field.onChange(e); if (errors.fb_link) trigger('fb_link'); }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller name="whatsapp" control={control}
                                render={({ field }) => (
                                    <TextField {...field} label={t('volunteer.form.whatsapp_label')} fullWidth sx={inputStyles} error={!!errors.whatsapp} helperText={errors.whatsapp?.message as string}
                                        InputProps={{ startAdornment: <InputAdornment position="start"><WhatsAppIcon color="success" /></InputAdornment> }}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </Paper>

                {/* 4. FINAL DETAILS */}
                <Paper elevation={0} sx={{ p: 4, mb: 4, borderRadius: 4, bgcolor: '#fdfbff', border: '1px dashed #d1c4e9' }}>
                    <SectionTitle icon={<AssignmentIndOutlinedIcon />} title={t('volunteer.form.final_details')} subtitle={t('volunteer.form.final_details_sub')} />

                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Controller name="prev_experience" control={control}
                                render={({ field }) => <TextField {...field}
                                    label={t('volunteer.form.prev_experience')}
                                    fullWidth multiline rows={3}
                                    sx={{ ...inputStyles, bgcolor: 'white' }}
                                    placeholder={t('volunteer.form.prev_experience_placeholder')}
                                    error={!!errors.prev_experience} helperText={errors.prev_experience?.message as string}
                                />}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, border: '1px solid #eee' }}>
                                <Typography variant="subtitle2" gutterBottom>{t('volunteer.form.join_team_question')} *</Typography>
                                <Controller name="join_team" control={control} rules={{ required: true }}
                                    render={({ field }) => (
                                        <RadioGroup {...field} row>
                                            <FormControlLabel value="Yes" control={<Radio color="secondary" />} label={t('volunteer.form.yes')} />
                                            <FormControlLabel value="No" control={<Radio color="secondary" />} label={t('volunteer.form.no')} />
                                        </RadioGroup>
                                    )}
                                />
                                {joinTeamValue === 'Yes' && (
                                    <Controller name="preferred_team" control={control}
                                        render={({ field }) => (
                                            <Select {...field} fullWidth size="small" displayEmpty sx={{ mt: 1, borderRadius: 2 }}>
                                                <MenuItem value="" disabled>{t('volunteer.form.select_team')}</MenuItem>
                                                <MenuItem value="BANCAT Durbar">{t('volunteer.form.durbar')}</MenuItem>
                                                <MenuItem value="Cancer Warriors">{t('volunteer.form.warriors')}</MenuItem>
                                            </Select>
                                        )}
                                    />
                                )}
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                p: 3,
                                borderRadius: 3,
                                border: '2px dashed',
                                borderColor: photoFile ? 'success.main' : '#cbd5e1',
                                bgcolor: photoFile ? alpha('#2e7d32', 0.05) : 'white',
                                textAlign: 'center',
                                transition: 'all 0.2s',
                                cursor: 'pointer',
                                '&:hover': { borderColor: '#582d82', bgcolor: alpha('#582d82', 0.02) },
                                position: 'relative'
                            }}>
                                <input
                                    accept="image/*,.heic"
                                    type="file"
                                    onChange={(e) => { if (e.target.files?.[0]) setPhotoFile(e.target.files[0]); }}
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                                />
                                <CloudUploadOutlinedIcon sx={{ fontSize: 40, color: photoFile ? 'success.main' : 'text.disabled', mb: 1 }} />
                                <Typography variant="subtitle1" fontWeight="600" color={photoFile ? 'success.main' : 'text.primary'}>
                                    {photoFile ? photoFile.name : t('volunteer.form.upload_photo')}
                                </Typography>
                                {!photoFile && <Typography variant="caption" color="text.secondary">{t('volunteer.form.photo_hint')}</Typography>}
                            </Box>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 4 }}>
                        <FormControlLabel
                            control={<Radio checked={true} color="primary" />}
                            label={<Typography variant="body2" color="text.secondary">{t('volunteer.form.declaration')}</Typography>}
                        />
                    </Box>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        endIcon={<FactCheckOutlinedIcon />}
                        sx={{
                            mt: 4,
                            py: 2,
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            borderRadius: 3,
                            background: 'linear-gradient(45deg, #582d82 30%, #a03c9b 90%)',
                            boxShadow: '0 8px 16px rgba(88, 45, 130, 0.2)',
                            textTransform: 'none',
                            transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 12px 20px rgba(88, 45, 130, 0.3)',
                                background: 'linear-gradient(45deg, #4a2570 30%, #8e3589 90%)',
                            }
                        }}
                    >
                        {t('volunteer.form.submit')}
                    </Button>
                </Paper>

            </Box>
        </Box>
    );
};
