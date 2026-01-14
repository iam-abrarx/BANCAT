import api from './patientService';

export const getTestimonials = async () => {
    // Attempt to get from admin endpoint, if fails fall back or just use public?
    // Based on TestimonialController (not fully visible but implied), index might be public.
    // Let's try /testimonials first as originally intended, but via api instance which handles base URL.
    const response = await api.get('/testimonials');
    return response.data;
};

export const createTestimonial = async (data: any) => {
    const response = await api.post('/admin/testimonials', data);
    return response.data;
};

export const updateTestimonial = async (id: number, data: any) => {
    if (data instanceof FormData) {
        data.append('_method', 'PUT');
        const response = await api.post(`/admin/testimonials/${id}`, data);
        return response.data;
    } else {
        const response = await api.put(`/admin/testimonials/${id}`, data);
        return response.data;
    }
};

export const deleteTestimonial = async (id: number) => {
    const response = await api.delete(`/admin/testimonials/${id}`);
    return response.data;
};
