export interface Patient {
    id: number;
    code: string;
    name_en: string;
    name_bn: string;
    photo: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    cancer_type: string;
    diagnosis_date: string;
    location: string;
    medical_summary_en?: string;
    medical_summary_bn?: string;
    treatment_cost_required: number;
    treatment_cost_raised: number;
    raised_amount?: number;
    fund_raised?: number;
    prescriptions?: string[];
    is_active: boolean;
    is_featured: boolean;
    status: 'active' | 'completed' | 'archived';
    created_at: string;
    updated_at: string;
}

export interface PatientUpdate {
    id: number;
    patient_id: number;
    title_en: string;
    title_bn: string;
    content_en: string;
    content_bn: string;
    photo?: string;
    update_date: string;
    created_at: string;
}

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
}

export interface PaginatedResponse<T> {
    data: T[];
    current_page: number;
    last_page: number;
    total: number;
    per_page: number;
}
