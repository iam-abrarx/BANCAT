import api from './patientService'; // Reusing instance

export interface Blog {
    id: number;
    title_en: string;
    title_bn?: string;
    content_en: string;
    content_bn?: string;
    slug: string;
    image?: string;
    author?: string;
    is_published: boolean;
    published_at: string;
    views: number;
    created_at: string;
    excerpt?: string;
    categories?: string[];
    tags?: string[];
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
}

export const blogService = {
    getAll: async (params?: { page?: number; search?: string }) => {
        const response = await api.get<{ data: Blog[], links: any, meta: any }>('/admin/blogs', { params });
        return response.data;
    },

    getById: async (id: number) => {
        const response = await api.get<Blog>(`/admin/blogs/${id}`);
        return response.data;
    },

    create: async (data: any) => {
        const response = await api.post('/admin/blogs', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    },

    update: async (id: number, data: any) => {
        // Handle FormData with PUT method via POST
        if (data instanceof FormData) {
            data.append('_method', 'PUT');
            const response = await api.post(`/admin/blogs/${id}`, data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            return response.data;
        }

        const response = await api.put(`/admin/blogs/${id}`, data);
        return response.data;
    },

    delete: async (id: number) => {
        const response = await api.delete(`/admin/blogs/${id}`);
        return response.data;
    }
};
