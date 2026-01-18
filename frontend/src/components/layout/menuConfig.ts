// Menu configuration for mega menu navigation
export interface MenuItem {
    label: string;
    path: string;
    icon?: string;
    description?: string;
}

export interface MenuSection {
    title: string;
    items: MenuItem[];
}

export interface NavItem {
    id: string;
    label: string;
    path?: string;
    type: 'link' | 'dropdown' | 'mega' | 'cta';
    sections?: MenuSection[];
    items?: MenuItem[];
    featuredImage?: {
        src: string;
        caption?: string;
    };
}



export const menuConfig: NavItem[] = [
    // 1. Home
    {
        id: 'home',
        label: 'nav.home',
        path: '/',
        type: 'link',
    },

    // 2. About
    {
        id: 'about',
        label: 'nav.menu_about',
        type: 'mega',
        sections: [
            {
                title: 'nav.about_item.who_we_are.title',
                items: [
                    { label: 'nav.about_item.who_we_are.about_us', path: '/about' },
                    { label: 'nav.about_item.who_we_are.team', path: '/about/team' },
                    { label: 'nav.about_item.who_we_are.privacy', path: '/privacy-policy' },
                ],
            },
            {
                title: 'nav.about_item.services.title',
                items: [
                    { label: 'nav.about_item.services.supervision', path: '/about/supervision' },
                    { label: 'nav.about_item.services.training', path: '/about/training' },
                    { label: 'nav.about_item.services.counselling', path: '/about/counselling' },
                ],
            },
        ],
    },

    // 3. Support
    {
        id: 'support',
        label: 'nav.menu_support',
        type: 'dropdown',
        items: [
            { label: 'nav.support_item.cancer_info', path: '/cancer-info' },
            { label: 'nav.support_item.caregiver', path: '/support/caregiver-support' },
            { label: 'nav.support_item.live_chat', path: '/support/live-chat' },
        ],
    },

    // 4. Our Work
    {
        id: 'our-work',
        label: 'nav.menu_our_work',
        type: 'mega',

        sections: [
            {
                title: 'nav.our_work_item.projects.title',
                items: [
                    { label: 'nav.our_work_item.projects.alok_nibash_1', path: '/alok-nibash' },
                    { label: 'nav.our_work_item.projects.alok_nibash_2', path: '/projects/mosabbir-alok-nibash-2' },
                    { label: 'nav.our_work_item.projects.alok_kantha', path: '/projects/alok-kantha' },
                    { label: 'nav.our_work_item.projects.alokon', path: '/projects/alokon' },
                ],
            },
            {
                title: 'nav.our_work_item.flagship.title',
                items: [
                    { label: 'nav.our_work_item.flagship.village', path: '/projects/alok-boshoti' },
                ],
            },
            {
                title: 'nav.our_work_item.initiatives.title',
                items: [
                    { label: 'nav.our_work_item.initiatives.holistic', path: '/programs/holistic-support' },
                    { label: 'nav.our_work_item.initiatives.mental_health', path: '/programs/mental-health-support' },
                    { label: 'nav.our_work_item.initiatives.rehabilitation', path: '/projects/rehabilitation' },
                ],
            },
            {
                title: 'nav.our_work_item.campaigns.title',
                items: [
                    { label: 'nav.our_work_item.campaigns.ramadan', path: '/campaigns/ramadan' },
                    { label: 'nav.our_work_item.campaigns.adopt', path: '/donate/adopt-patient' },
                    { label: 'nav.our_work_item.campaigns.hope', path: '/campaigns/hope-for-children' },
                    { label: 'nav.our_work_item.campaigns.hub', path: '/projects/community-health-hub' },
                    { label: 'nav.our_work_item.campaigns.mother', path: '/campaigns/save-a-mother' },
                ],
            },
        ],
    },

    // 5. Stories
    {
        id: 'stories',
        label: 'nav.menu_stories',
        type: 'mega',

        sections: [
            {
                title: 'nav.stories_item.categories.title',
                items: [
                    { label: 'nav.stories_item.categories.impact', path: '/stories?category=impact' },
                    { label: 'nav.stories_item.categories.testimonials', path: '/testimonials' },
                ],
            },
            {
                title: 'nav.stories_item.media.title',
                items: [
                    { label: 'nav.stories_item.media.gallery', path: '/gallery' },
                    { label: 'nav.stories_item.media.blogs', path: '/blogs' },
                ],
            },
        ],
    },

    // 6. Get Involved
    {
        id: 'get-involved',
        label: 'nav.menu_get_involved',
        type: 'mega',

        sections: [
            {
                title: 'nav.get_involved_item.partnership.title',
                items: [
                    { label: 'nav.get_involved_item.partnership.brand', path: '/partnerships/brands' },
                    { label: 'nav.get_involved_item.partnership.join_campaign', path: '/campaigns' },
                    { label: 'nav.get_involved_item.partnership.adopt', path: '/donate/adopt-patient' },
                    { label: 'nav.get_involved_item.partnership.become_donor', path: '/donate' },
                ],
            },
            {
                title: 'nav.get_involved_item.volunteering.title',
                items: [
                    { label: 'nav.get_involved_item.volunteering.become', path: '/volunteer' },
                    { label: 'nav.get_involved_item.volunteering.stories', path: '/stories' },
                ],
            },
        ],
    },

    // 7. Contact
    {
        id: 'contact',
        label: 'nav.menu_contact',
        type: 'dropdown',
        items: [
            { label: 'nav.contact_item.us', path: '/contact' },
            { label: 'nav.contact_item.faq', path: '/faq' },
        ],
    },
];

export default menuConfig;
