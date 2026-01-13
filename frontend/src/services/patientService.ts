import api from '../lib/axios';
import type { Patient } from '../types';


export const patientService = {
    getAll: async (params?: { featured?: boolean; cancer_type?: string; page?: number; per_page?: number; district?: string; search?: string; sort?: string }) => {
        const response = await api.get<{ data: Patient[], links: any, meta: any }>('/patients', { params });
        return response.data;
    },

    getByCode: async (code: string) => {
        const response = await api.get<Patient & { updates?: any[] }>(`/patients/${code}`);
        return response.data;
    },

    // Admin Methods
    createPatient: async (data: any) => {
        const response = await api.post('/admin/patients', data);
        return response.data;
    },

    updatePatient: async (id: number, data: any) => {
        const response = await api.put(`/admin/patients/${id}`, data);
        return response.data;
    },

    deletePatient: async (id: number) => {
        const response = await api.delete(`/admin/patients/${id}`);
        return response.data;
    }
};

export default api;
