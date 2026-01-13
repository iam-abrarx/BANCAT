import api from '../lib/axios';


export interface DonationInitData {
    amount: number;
    payment_method: string;
    donor_name: string;
    donor_email?: string;
    donor_phone?: string;
    patient_id?: number;
    campaign_id?: number;
    program_id?: number;
    message?: string;
    category: string;
    donation_type?: 'one_time' | 'monthly';
}

export interface DonationResponse {
    donation: {
        id: number;
        transaction_id: string;
        amount: string;
        payment_status: string;
    };
    payment_url: string;
}

export const donationService = {
    initiate: async (data: DonationInitData) => {
        const response = await api.post<DonationResponse>('/donations/initiate', data);
        return response.data;
    },

    // Admin Methods
    getAllDonations: async (params?: { page?: number; status?: string; search?: string }) => {
        const response = await api.get('/admin/donations', { params });
        return response.data;
    },

    // Confirm donation (callback simulation)
    confirmDonation: async (transactionId: string) => {
        const response = await api.post(`/donations/callback?transaction_id=${transactionId}`);
        return response.data;
    }
};
