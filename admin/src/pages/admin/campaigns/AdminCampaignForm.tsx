import { useForm, Controller } from 'react-hook-form';
import { Box, Paper, TextField, Button, Grid, Typography, FormControlLabel, Switch, Alert } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { campaignService } from '../../../services/campaignService';
import { LoadingSpinner } from '../../../components/common/LoadingSpinner';
import { useState, useEffect, type ChangeEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAssetUrl } from '../../../config/api';

interface CampaignFormData {
    name_en: string;
    name_bn: string;
    description_en: string;
    description_bn: string;
    banner_image: string;
    goal_amount: number;
    start_date: string;
    end_date: string;
    is_active: boolean;
    is_featured: boolean;
}

export const AdminCampaignForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const isEditMode = !!id;

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const { control, handleSubmit, reset, watch, formState: { errors } } = useForm<CampaignFormData>({
        defaultValues: {
            name_en: '',
            name_bn: '',
            description_en: '',
            description_bn: '',
            banner_image: '',
            goal_amount: 0,
            start_date: '',
            end_date: '',
            is_active: true,
            is_featured: false,
        }
    });

    const currentBannerUrl = watch('banner_image');

    // Fetch existing data for edit
    const { data: campaign } = useQuery({
        queryKey: ['campaign', id],
        queryFn: () => campaignService.getCampaignById(Number(id)),
        enabled: isEditMode,
    });

    useEffect(() => {
        if (campaign) {
            reset({
                ...campaign,
                start_date: campaign.start_date ? new Date(campaign.start_date).toISOString().split('T')[0] : '',
                end_date: campaign.end_date ? new Date(campaign.end_date).toISOString().split('T')[0] : '',
            });
        }
    }, [campaign, reset]);

    const mutation = useMutation({
        mutationFn: (data: FormData) => {
            if (isEditMode) {
                return campaignService.updateCampaign(Number(id), data);
            }
            return campaignService.createCampaign(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-campaigns'] });
            navigate('/campaigns');
        },
    });

    const onSubmit = (data: CampaignFormData) => {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            const value = data[key as keyof CampaignFormData];
            if (key === 'banner_image') return;
            if (value === undefined || value === null) return;

            if (typeof value === 'boolean') formData.append(key, value ? '1' : '0');
            else formData.append(key, value.toString());
        });

        if (selectedFile) {
            formData.append('banner_image', selectedFile);
        }
        mutation.mutate(formData);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    if (mutation.isPending) return <LoadingSpinner />;

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {isEditMode ? 'Edit Campaign' : 'Add New Campaign'}
            </Typography>

            <Paper sx={{ p: 4 }}>
                {mutation.isError && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {(mutation.error as any)?.response?.data?.message || 'An error occurred'}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="name_en"
                                control={control}
                                rules={{ required: 'Title (English) is required' }}
                                render={({ field }) => (
                                    <TextField {...field} label="Title (English)" fullWidth required error={!!errors.name_en} helperText={errors.name_en?.message} />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="name_bn"
                                control={control}
                                render={({ field }) => (
                                    <TextField {...field} label="Title (Bangla)" fullWidth />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Controller
                                name="goal_amount"
                                control={control}
                                rules={{ required: 'Goal Amount is required', min: 1 }}
                                render={({ field }) => (
                                    <TextField {...field} type="number" label="Goal Amount (৳)" fullWidth required />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="caption" sx={{ mb: 1, display: 'block', fontWeight: 600 }}>Banner Image</Typography>
                            <Box
                                sx={{
                                    border: '2px dashed #e0e0e0',
                                    borderRadius: 2,
                                    p: 2,
                                    textAlign: 'center',
                                    bgcolor: 'background.default',
                                    transition: 'all 0.2s',
                                    cursor: 'pointer',
                                    '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover' }
                                }}
                            >
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="banner-image-upload"
                                    type="file"
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="banner-image-upload" style={{ width: '100%', cursor: 'pointer', display: 'block' }}>
                                    {(selectedFile || (isEditMode && currentBannerUrl)) ? (
                                        <Box sx={{ position: 'relative' }}>
                                            <Box
                                                component="img"
                                                src={selectedFile ? URL.createObjectURL(selectedFile) : getAssetUrl(currentBannerUrl)}
                                                alt="Banner Preview"
                                                sx={{ width: '100%', maxHeight: 200, objectFit: 'cover', borderRadius: 2 }}
                                                onError={(e: any) => { if (!e.target.dataset.errored) { e.target.dataset.errored = 'true'; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150'%3E%3Crect fill='%23e0e0e0' width='300' height='150'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='16' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E"; } }}
                                            />
                                            <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
                                                {selectedFile ? selectedFile.name : 'Current Banner'} (Click to change)
                                            </Typography>
                                        </Box>
                                    ) : (
                                        <Box sx={{ py: 3 }}>
                                            <Typography variant="body2" color="primary" fontWeight="bold">
                                                Upload Banner Image
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Replaces URL input
                                            </Typography>
                                        </Box>
                                    )}
                                </label>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Controller
                                name="start_date"
                                control={control}
                                render={({ field }) => (
                                    <TextField {...field} type="date" label="Start Date" fullWidth InputLabelProps={{ shrink: true }} />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="end_date"
                                control={control}
                                render={({ field }) => (
                                    <TextField {...field} type="date" label="End Date" fullWidth InputLabelProps={{ shrink: true }} />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Controller
                                name="description_en"
                                control={control}
                                rules={{ required: 'Description (English) is required' }}
                                render={({ field }) => (
                                    <TextField {...field} label="Description (English)" multiline rows={4} fullWidth required error={!!errors.description_en} helperText={errors.description_en?.message} />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="description_bn"
                                control={control}
                                render={({ field }) => (
                                    <TextField {...field} label="Description (Bangla)" multiline rows={4} fullWidth />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Controller
                                name="is_active"
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={<Switch checked={field.value} onChange={field.onChange} />}
                                        label="Active (Collecting donations)"
                                    />
                                )}
                            />
                            <Controller
                                name="is_featured"
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={<Switch checked={field.value} onChange={field.onChange} />}
                                        label="Featured on Homepage"
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                            <Button variant="outlined" onClick={() => navigate('/campaigns')}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" size="large">
                                {isEditMode ? 'Update Campaign' : 'Create Campaign'}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};
