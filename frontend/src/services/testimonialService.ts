import api from './patientService';

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    image?: string;
    created_at?: string;
}

export const testimonialService = {
    getAll: async () => {
        const response = await api.get<Testimonial[]>('/testimonials');
        return response.data;
    }
};
