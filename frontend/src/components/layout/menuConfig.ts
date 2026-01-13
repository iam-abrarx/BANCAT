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
        label: 'Home',
        path: '/',
        type: 'link',
    },

    // 2. About
    {
        id: 'about',
        label: 'About',
        type: 'mega', // Changed to mega to accommodate "Our Services" section
        sections: [
            {
                title: 'Who We Are',
                items: [
                    { label: 'About Us', path: '/about' },
                    { label: 'Our Team', path: '/about/team' },
                    { label: 'Privacy Policy', path: '/privacy-policy' },
                ],
            },
            {
                title: 'Our Services',
                items: [
                    { label: 'Supervision', path: '/about/supervision' },
                    { label: 'Training', path: '/about/training' },
                    { label: 'Counselling', path: '/about/counselling' },
                ],
            },
        ],
    },

    // 3. Support
    {
        id: 'support',
        label: 'Support',
        type: 'dropdown',
        items: [
            { label: 'Cancer Information', path: '/cancer-info' },
            { label: 'Caregiver Support', path: '/support/caregiver-support' },
            { label: 'Live Chat', path: '/support/live-chat' },
        ],
    },

    // 4. Our Work
    {
        id: 'our-work',
        label: 'Our Work',
        type: 'mega',

        sections: [
            {
                title: 'Ongoing Projects',
                items: [
                    { label: 'Mosabbir Alok Nibash 1', path: '/alok-nibash' },
                    { label: 'Mosabbir Alok Nibash 2', path: '/projects/mosabbir-alok-nibash-2' },
                    { label: 'Alok Kantha', path: '/projects/alok-kantha' },
                    { label: 'Alokon', path: '/projects/alokon' },
                ],
            },
            {
                title: 'FlagShip Initiative',
                items: [
                    { label: "Bangladesh's first cancer care village", path: '/alok-nibash' },
                ],
            },
            {
                title: 'Initiatives',
                items: [
                    { label: 'Holistic Support', path: '/programs/holistic-support' },
                    { label: 'Mental Health Support', path: '/programs/mental-health-support' },
                    { label: 'Rehabilitation', path: '/projects/rehabilitation' },
                ],
            },
        ],
    },

    // 5. Stories
    {
        id: 'stories',
        label: 'Stories',
        type: 'mega',

        sections: [
            {
                title: 'Categories',
                items: [
                    { label: 'Impact Stories', path: '/stories?category=impact' },
                    { label: 'Testimonials', path: '/testimonials' },
                ],
            },
            {
                title: 'Media',
                items: [
                    { label: 'Gallery', path: '/gallery' },
                    { label: 'Blogs', path: '/blogs' },
                ],
            },
        ],
    },

    // 6. Get Involved
    {
        id: 'get-involved',
        label: 'Get Involved',
        type: 'mega',

        sections: [
            {
                title: 'Volunteering',
                items: [
                    { label: 'Become a Volunteer', path: '/volunteer' },
                    { label: 'See Stories', path: '/stories' },
                ],
            },
            {
                title: 'Partnership',
                items: [
                    { label: 'Brand Partnership', path: '/partnerships/brands' },
                    { label: 'Join a Campaign', path: '/campaigns' },
                    { label: 'Adopt a Patient', path: '/donate/adopt-patient' },
                ],
            },
        ],
    },

    // 7. Contact
    {
        id: 'contact',
        label: 'Contact',
        type: 'dropdown',
        items: [
            { label: 'Contact Us', path: '/contact' },
            { label: 'FAQ', path: '/faq' },
        ],
    },
];

export default menuConfig;
