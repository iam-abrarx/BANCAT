import axios from 'axios';
import { API_BASE_URL } from '../config/api';
import type { Blog, PaginatedResponse } from '../types';

export const blogService = {
    getAll: async (page = 1) => {
        const response = await axios.get<PaginatedResponse<Blog>>(`${API_BASE_URL}/blogs?page=${page}`);
        return response.data;
    },

    getBySlug: async (slug: string) => {
        const response = await axios.get<Blog>(`${API_BASE_URL}/blogs/${slug}`);
        return response.data;
    }
};
