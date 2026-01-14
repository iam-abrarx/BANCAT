import { useForm, Controller } from 'react-hook-form';
import { Box, Paper, TextField, Button, Grid, Typography, FormControlLabel, Switch, Alert, Card, CardHeader, CardContent, Divider, Stack, IconButton, AppBar, Toolbar, Container, Chip, Autocomplete } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { blogService } from '../../../services/blogService';
import { LoadingSpinner } from '../../../components/common/LoadingSpinner';
import { useState, useEffect, type ChangeEvent } from 'react';
import { getAssetUrl } from '../../../config/api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CloudUpload as CloudUploadIcon, ArrowBack as ArrowBackIcon, Close as CloseIcon, Public as PublicIcon, CalendarToday as CalendarIcon } from '@mui/icons-material';
import { toast } from 'react-hot-toast';

interface BlogFormData {
    title_en: string;
    title_bn: string;
    content_en: string;
    content_bn: string;
    author: string;
    image: any;
    is_published: boolean;
    published_at: string;
    slug: string;
    excerpt: string;
    categories: string[];
    tags: string[];
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
}

const CATEGORY_OPTIONS = ['Stories', 'News', 'Events', 'Medical', 'Fundraising', 'Awareness', 'Volunteers'];

export const AdminBlogForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const isEditMode = !!id;
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const { control, handleSubmit, reset, watch, setValue, formState: { errors, isDirty } } = useForm<BlogFormData>({
        defaultValues: {
            title_en: '',
            title_bn: '',
            content_en: '',
            content_bn: '',
            author: 'BANCAT Team',
            image: '',
            is_published: false,
            published_at: new Date().toISOString().slice(0, 16), // YYYY-MM-DDTHH:mm
            slug: '',
            excerpt: '',
            categories: [],
            tags: [],
            meta_title: '',
            meta_description: '',
            meta_keywords: '',
        }
    });

    const watchTitle = watch('title_en');
    const watchSlug = watch('slug');

    // Auto-generate slug from title if slug is empty
    useEffect(() => {
        if (!isEditMode && watchTitle && !watchSlug) {
            const generatedSlug = watchTitle
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
            setValue('slug', generatedSlug);
        }
    }, [watchTitle, watchSlug, setValue, isEditMode]);

    // Fetch existing blog data if edit mode
    const { data: blog, isLoading: isLoadingBlog } = useQuery({
        queryKey: ['blog', id],
        queryFn: () => blogService.getById(Number(id)),
        enabled: isEditMode,
    });

    useEffect(() => {
        if (blog) {
            reset({
                title_en: blog.title_en,
                title_bn: blog.title_bn || '',
                content_en: blog.content_en,
                content_bn: blog.content_bn || '',
                author: blog.author || '',
                image: blog.image || '',
                is_published: Boolean(blog.is_published),
                published_at: blog.published_at ? new Date(blog.published_at).toISOString().slice(0, 16) : new Date().toISOString().slice(0, 16),
                slug: blog.slug || '',
                excerpt: blog.excerpt || '',
                categories: blog.categories || [],
                tags: blog.tags || [],
                meta_title: blog.meta_title || '',
                meta_description: blog.meta_description || '',
                meta_keywords: blog.meta_keywords || '',
            });
            if (blog.image) {
                setPreviewUrl(getAssetUrl(blog.image) || null);
            }
        }
    }, [blog, reset]);

    const mutation = useMutation({
        mutationFn: (data: FormData) => {
            if (isEditMode) {
                return blogService.update(Number(id), data);
            }
            return blogService.create(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-blogs'] });
            toast.success(isEditMode ? 'Post updated successfully' : 'Post published successfully');
            navigate('/blogs');
        },
        onError: (error: any) => {
            console.error('Blog save error:', error);
            const message = error?.response?.data?.message || 'Failed to save post';
            toast.error(message);

            // Show validation errors if available
            if (error?.response?.data?.errors) {
                const validationErrors = error.response.data.errors;
                Object.values(validationErrors).forEach((err: any) => {
                    toast.error(Array.isArray(err) ? err[0] : err);
                });
            }
        }
    });

    const onSubmit = (data: BlogFormData, isDraft: boolean = false) => {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            const value = data[key as keyof BlogFormData];
            if (key === 'image') return;
            if (value === undefined || value === null) return;

            if (key === 'is_published') {
                formData.append(key, isDraft ? '0' : '1');
            } else if (Array.isArray(value)) {
                formData.append(key, JSON.stringify(value));
            } else if (typeof value === 'boolean') {
                formData.append(key, value ? '1' : '0');
            } else {
                formData.append(key, value.toString());
            }
        });

        if (selectedFile) {
            formData.append('image', selectedFile);
        }
        mutation.mutate(formData);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > 2 * 1024 * 1024) {
                alert('File size must be less than 2MB');
                e.target.value = '';
                return;
            }
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handlePreview = () => {
        const slug = watchSlug || 'preview-post';
        // Open frontend in new tab
        window.open(`http://localhost:5173/blogs/${slug}`, '_blank');
    };

    if (mutation.isPending || isLoadingBlog) return <LoadingSpinner />;

    return (
        <Box sx={{ pb: 10, bgcolor: '#f0f2f5', minHeight: '100vh', position: 'relative' }}>
            {/* Sticky Top Bar */}
            <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'white', borderBottom: '1px solid #e0e0e0' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <IconButton onClick={() => navigate('/blogs')} edge="start">
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h6" fontWeight="bold" color="text.primary">
                            {isEditMode ? 'Edit Post' : 'New Post'}
                        </Typography>
                        {isDirty && (
                            <Chip label="Unsaved Changes" size="small" color="warning" variant="outlined" />
                        )}
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Button variant="text" color="inherit" onClick={handlePreview}>Preview</Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleSubmit((data) => onSubmit(data, true))}
                        >
                            Save Draft
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={handleSubmit((data) => onSubmit(data, false))}
                            sx={{ px: 4, fontWeight: 'bold' }}
                        >
                            {isEditMode ? 'Update' : 'Publish'}
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>

            <Container maxWidth="xl" sx={{ mt: 4 }}>
                {mutation.isError && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {(mutation.error as any)?.response?.data?.message || 'An error occurred'}
                    </Alert>
                )}

                <Grid container spacing={3}>
                    {/* LEFT COLUMN: Main Editor */}
                    <Grid item xs={12} lg={9}>
                        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, border: '1px solid #e0e0e0' }}>
                            {/* Title */}
                            <Controller
                                name="title_en"
                                control={control}
                                rules={{ required: 'Title is required' }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        placeholder="Add Title"
                                        fullWidth
                                        multiline
                                        variant="standard"
                                        InputProps={{
                                            sx: { fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, mb: 2 },
                                            disableUnderline: true
                                        }}
                                        error={!!errors.title_en}
                                    />
                                )}
                            />

                            {/* Permalink Display (Simplified) */}
                            {watchSlug && (
                                <Box display="flex" alignItems="center" gap={1} mb={3} color="text.secondary">
                                    <Typography variant="body2">Permalink:</Typography>
                                    <Typography variant="body2" color="primary" sx={{ textDecoration: 'underline' }}>
                                        https://bancat.org.bd/blogs/{watchSlug}
                                    </Typography>
                                    <Button size="small" sx={{ minWidth: 'auto', p: 0.5 }}>Edit</Button>
                                </Box>
                            )}

                            {/* Rich Text Editor */}
                            <Box sx={{
                                '.ql-editor': { minHeight: 500, fontSize: '1.15rem', color: '#333', fontFamily: 'Georgia, serif', lineHeight: 1.8 },
                                '.ql-container': { border: 'none' },
                                '.ql-toolbar': { border: 'none', borderBottom: '1px solid #eee', position: 'sticky', top: 64, bgcolor: 'white', zIndex: 10 }
                            }}>
                                <Controller
                                    name="content_en"
                                    control={control}
                                    rules={{ required: 'Write something amazing...' }}
                                    render={({ field }) => (
                                        <ReactQuill
                                            theme="snow"
                                            value={field.value}
                                            onChange={field.onChange}
                                            placeholder="Start writing or type / to choose a block"
                                            modules={{
                                                toolbar: [
                                                    [{ 'header': [1, 2, 3, false] }],
                                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                    ['link', 'image', 'video'],
                                                    ['clean']
                                                ]
                                            }}
                                        />
                                    )}
                                />
                            </Box>
                        </Paper>

                        {/* Bangla Content (Collapsed or Separate Tab usually, but keeping below for now) */}
                        <Paper elevation={0} sx={{ p: 3, mt: 3, borderRadius: 2, border: '1px solid #e0e0e0', bgcolor: '#fafafa' }}>
                            <Typography variant="h6" gutterBottom>Bangla Translation (Optional)</Typography>
                            <Controller
                                name="title_bn"
                                control={control}
                                render={({ field }) => (
                                    <TextField {...field} label="Bangla Title" fullWidth variant="outlined" sx={{ mb: 2, bgcolor: 'white' }} />
                                )}
                            />
                            <Controller
                                name="content_bn"
                                control={control}
                                render={({ field }) => (
                                    <Box sx={{ bgcolor: 'white', '.ql-editor': { minHeight: 200 } }}>
                                        <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                                    </Box>
                                )}
                            />
                        </Paper>
                    </Grid>


                    {/* RIGHT COLUMN: Settings Sidebar */}
                    <Grid item xs={12} lg={3}>
                        <Stack spacing={2}>

                            {/* Status & Visibility */}
                            <Card variant="outlined" sx={{ borderRadius: 2 }}>
                                <CardHeader title="Summary" titleTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }} />
                                <Divider />
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Box display="flex" justifyContent="space-between" alignItems="center">
                                            <Typography variant="body2" color="text.secondary">Visibility</Typography>
                                            <Typography variant="body2" fontWeight="bold" color="primary">Public</Typography>
                                        </Box>
                                        <Box display="flex" justifyContent="space-between" alignItems="center">
                                            <Typography variant="body2" color="text.secondary">Publish</Typography>
                                            <Controller // Use text input for DateTime for simplicity
                                                name="published_at"
                                                control={control}
                                                render={({ field }) => (
                                                    <TextField
                                                        {...field}
                                                        type="datetime-local"
                                                        variant="standard"
                                                        InputProps={{ disableUnderline: true, style: { fontSize: '0.875rem' } }}
                                                    />
                                                )}
                                            />
                                        </Box>
                                        <Controller
                                            name="slug"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField {...field} label="URL Slug" size="small" fullWidth variant="outlined" helperText="bancat.org.bd/blogs/..." />
                                            )}
                                        />
                                        <Controller
                                            name="author"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField {...field} label="Author" size="small" fullWidth />
                                            )}
                                        />
                                    </Stack>
                                </CardContent>
                            </Card>

                            {/* Categories & Tags */}
                            <Card variant="outlined" sx={{ borderRadius: 2 }}>
                                <CardHeader title="Categories & Tags" titleTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }} />
                                <Divider />
                                <CardContent>
                                    <Typography variant="caption" color="text.secondary" gutterBottom>Categories</Typography>
                                    <Controller
                                        name="categories"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <Autocomplete
                                                multiple
                                                options={CATEGORY_OPTIONS}
                                                freeSolo
                                                value={value || []}
                                                onChange={(_, newValue) => onChange(newValue)}
                                                renderTags={(value: readonly string[], getTagProps) =>
                                                    value.map((option: string, index: number) => (
                                                        <Chip variant="outlined" label={option} size="small" {...getTagProps({ index })} />
                                                    ))
                                                }
                                                renderInput={(params) => <TextField {...params} placeholder="Select Categories" size="small" />}
                                            />
                                        )}
                                    />

                                    <Box mt={3}>
                                        <Typography variant="caption" color="text.secondary" gutterBottom>Tags</Typography>
                                        <Controller
                                            name="tags"
                                            control={control}
                                            render={({ field: { value, onChange } }) => (
                                                <Autocomplete
                                                    multiple
                                                    options={[]}
                                                    freeSolo
                                                    value={value || []}
                                                    onChange={(_, newValue) => onChange(newValue)}
                                                    renderTags={(value: readonly string[], getTagProps) =>
                                                        value.map((option: string, index: number) => (
                                                            <Chip variant="outlined" label={option} size="small" {...getTagProps({ index })} />
                                                        ))
                                                    }
                                                    renderInput={(params) => <TextField {...params} placeholder="Add tags..." size="small" />}
                                                />
                                            )}
                                        />
                                    </Box>
                                </CardContent>
                            </Card>

                            {/* Featured Image */}
                            <Card variant="outlined" sx={{ borderRadius: 2 }}>
                                <CardHeader title="Featured Image" titleTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }} />
                                <Divider />
                                <CardContent sx={{ textAlign: 'center', bgcolor: '#fbfbfb' }}>
                                    <input
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="featured-image-upload"
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="featured-image-upload" style={{ width: '100%', cursor: 'pointer' }}>
                                        {previewUrl ? (
                                            <Box position="relative">
                                                <Box
                                                    component="img"
                                                    src={previewUrl}
                                                    alt="Featured"
                                                    sx={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 2, border: '1px solid #ddd' }}
                                                />
                                                <Box sx={{ position: 'absolute', top: 5, right: 5, bgcolor: 'rgba(0,0,0,0.5)', borderRadius: '50%' }}>
                                                    <IconButton size="small" sx={{ color: 'white' }} onClick={(e) => {
                                                        e.preventDefault();
                                                        setSelectedFile(null);
                                                        setPreviewUrl(null);
                                                    }}>
                                                        <CloseIcon fontSize="small" />
                                                    </IconButton>
                                                </Box>
                                                <Typography variant="caption" display="block" sx={{ mt: 1, color: 'primary.main' }}>
                                                    Click to Replace
                                                </Typography>
                                            </Box>
                                        ) : (
                                            <Box sx={{ p: 4, border: '2px dashed #ccc', borderRadius: 2, '&:hover': { borderColor: 'primary.main', bgcolor: '#f0f7ff' }, transition: 'all 0.2s' }}>
                                                <CloudUploadIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
                                                <Typography variant="body2" fontWeight="bold">Upload Image</Typography>
                                                <Typography variant="caption" color="text.secondary">Drag & drop or click</Typography>
                                            </Box>
                                        )}
                                    </label>
                                </CardContent>
                            </Card>

                            {/* Excerpt */}
                            <Card variant="outlined" sx={{ borderRadius: 2 }}>
                                <CardHeader title="Excerpt" titleTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }} />
                                <Divider />
                                <CardContent>
                                    <Controller
                                        name="excerpt"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                multiline
                                                rows={4}
                                                fullWidth
                                                placeholder="Write a custom excerpt..."
                                                size="small"
                                                inputProps={{ style: { fontSize: '0.9rem' } }}
                                            />
                                        )}
                                    />
                                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                                        Create a custom summary for this post.
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
