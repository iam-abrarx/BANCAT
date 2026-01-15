import api from './patientService';

export interface VolunteerData {
    id?: number;
    name: string;
    email: string;
    phone: string; // mobile
    alt_phone?: string;
    father_name?: string;
    occupation?: string;
    institution?: string;
    current_address?: string;
    permanent_address?: any; // object or string
    social?: any;
    education?: any;
    prev_experience?: string;
    preferred_team?: string;
    photo?: string; // URL from backend
    status?: string;
    created_at?: string;
    // Legacy fields support (optional)
    bio?: string;
    skills?: string[];
    availability?: string;
}

export const volunteerService = {
    apply: async (data: FormData | VolunteerData) => {
        const isFormData = data instanceof FormData;
        const config = isFormData ? {
            headers: { 'Content-Type': 'multipart/form-data' }
        } : {};

        const response = await api.post('/volunteers/apply', data, config);
        return response.data;
    },

    // Admin Methods
    getAll: async (params?: { page?: number; status?: string }) => {
        const response = await api.get('/admin/volunteers', { params });
        return response.data;
    },

    getById: async (id: number) => {
        const response = await api.get(`/admin/volunteers/${id}`);
        return response.data;
    },

    updateStatus: async (id: number, data: { status?: string; admin_notes?: string }) => {
        const response = await api.put(`/admin/volunteers/${id}`, data);
        return response.data;
    },

    deleteVolunteer: async (id: number) => {
        const response = await api.delete(`/admin/volunteers/${id}`);
        return response.data;
    }
};
