import api from './patientService';

export interface GalleryImage {
    id: number;
    image_url: string;
    caption_en?: string;
    caption_bn?: string;
    order: number;
}

export interface Gallery {
    id: number;
    title_en: string;
    title_bn?: string;
    slug: string;
    description_en?: string;
    description_bn?: string;
    featured_image?: string;
    date?: string;
    is_published: boolean;
    view_count: number;
    images_count?: number;
    images?: GalleryImage[];
    created_at: string;
}

export const galleryService = {
    getAll: async () => {
        const response = await api.get<{ data: Gallery[] }>('/galleries');
        return response.data.data;
    },

    getBySlug: async (slug: string) => {
        const response = await api.get<Gallery>(`/galleries/${slug}`);
        return response.data;
    }
};
