import api from './patientService';

export interface Campaign {
    id: number;
    slug: string;
    name_en: string;
    name_bn: string;
    description_en: string;
    description_bn: string;
    banner_image: string;
    goal_amount: number;
    raised_amount: number;
    start_date: string;
    end_date: string;
    is_active: boolean;
    is_featured: boolean;
    status: 'pending' | 'approved' | 'rejected';
    submitter_name?: string;
    submitter_email?: string;
    submitter_phone?: string;
    admin_notes?: string;
}

export const campaignService = {
    getAll: async (params?: { featured?: boolean }) => {
        const response = await api.get<Campaign[]>('/campaigns', { params });
        return response.data;
    },

    getBySlug: async (slug: string) => {
        const response = await api.get<Campaign>(`/campaigns/${slug}`);
        return response.data;
    },

    getCampaignById: async (id: number) => {
        // Assuming admin endpoint exists or public show endpoint accepts ID
        // Usually admin needs specific endpoint or we use public show if ID supported?
        // Let's try admin endpoint if typically available, or just standard show if it accepts ID
        // Based on other services, likely /admin/campaigns/{id} or we add it. 
        // Backend Routes (step 23): Route::put('/campaigns/{id}', [CampaignController::class, 'update']);
        // But READ? 
        // Route::get('/campaigns/{slug}', [CampaignController::class, 'show']);
        // Admin routes:
        // Route::put('/campaigns/{id}', ...
        // No explicit GET /admin/campaigns/{id} shown in Step 23 for Admin group?
        // Wait, Step 23: 
        // Route::get('/campaigns', [CampaignController::class, 'index']); (Public)
        // Route::get('/campaigns/{slug}', [CampaignController::class, 'show']); (Public)
        // Admin routes group:
        // Route::post('/campaigns', [CampaignController::class, 'store']);
        // Route::put('/campaigns/{id}', [CampaignController::class, 'update']);
        // No GET /admin/campaigns/{id} !
        // So I might need to add it to api.php or use public endpoint?
        // But public uses slug. 
        // I will assume I need to ADD it to backend as well or find a way.
        // For now, I will add it to service and then check backend.
        const response = await api.get<Campaign>(`/admin/campaigns/${id}`);
        return response.data;
    },

    // Admin Methods
    createCampaign: async (data: any) => {
        const response = await api.post('/admin/campaigns', data);
        return response.data;
    },

    updateCampaign: async (id: number, data: any) => {
        if (data instanceof FormData) {
            data.append('_method', 'PUT');
            const response = await api.post(`/admin/campaigns/${id}`, data);
            return response.data;
        }
        const response = await api.put(`/admin/campaigns/${id}`, data);
        return response.data;
    },

    deleteCampaign: async (id: number) => {
        const response = await api.delete(`/admin/campaigns/${id}`);
        return response.data;
    },

    updateStatus: async (id: number, data: { status: string; is_active: boolean }) => {
        const response = await api.put(`/admin/campaigns/${id}`, data);
        return response.data;
    }
};
