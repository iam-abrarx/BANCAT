import { useQuery } from '@tanstack/react-query';
import { campaignService } from '../services/campaignService';

export const useCampaigns = (params?: { featured?: boolean }) => {
    return useQuery({
        queryKey: ['campaigns', params],
        queryFn: () => campaignService.getAll(params),
    });
};

export const useCampaign = (slug: string | undefined) => {
    return useQuery({
        queryKey: ['campaign', slug],
        queryFn: () => campaignService.getBySlug(slug!),
        enabled: !!slug,
    });
};
