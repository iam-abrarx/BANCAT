import { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqData: FAQItem[] = [
    // Donations & Payments
    {
        category: 'Donations & Payments',
        question: 'How can I donate to support cancer patients?',
        answer: 'You can donate easily through our website using bKash, Nagad, or debit/credit cards (Visa, Mastercard). Simply click "Donate" on any patient profile or the home page. We also accept direct bank transfers for larger amounts.'
    },
    {
        category: 'Donations & Payments',
        question: 'Is my donation tax-deductible?',
        answer: 'Yes, BANCAT is a registered charitable organization in Bangladesh. We provide official donation receipts that may be used for tax exemption purposes under applicable laws.'
    },
    {
        category: 'Donations & Payments',
        question: 'Can I set up a monthly recurring donation?',
        answer: 'Absolutely. Monthly giving allows us to plan ahead and provide consistent support to patients. You can select "Monthly" on our donation form to set up an automatic recurring contribution.'
    },
    {
        category: 'Donations & Payments',
        question: 'Do you accept donations from outside Bangladesh?',
        answer: 'Yes, we accept international credit cards. For large international wire transfers, please contact us at support@bancat.org.bd for our SWIFT code and banking details.'
    },
    {
        category: 'Donations & Payments',
        question: 'How much of my donation actually goes to the patient?',
        answer: 'We pride ourselves on transparency. 100% of Zakat funds go directly to patient care. For general donations, a small administrative percentage (approx. 5-10%) is used to cover operational costs like verification, hospital coordination, and platform maintenance, ensuring the organization remains sustainable.'
    },

    // Zakat
    {
        category: 'Zakat',
        question: 'Can I give my Zakat through BANCAT?',
        answer: 'Yes, BANCAT is fully Zakat-eligible. Many cancer patients come from improvised backgrounds and meet the Shariah criteria (Fakir or Miskin) to receive Zakat.'
    },
    {
        category: 'Zakat',
        question: 'How do you ensure Zakat is distributed correctly?',
        answer: 'We maintain a strict separation between Zakat and General funds. Zakat funds are ONLY used for the direct medical expenses, food, and medicine of eligible Muslim patients. Our distribution is overseen by a Shariah advisor to ensure compliance.'
    },
    {
        category: 'Zakat',
        question: 'Can I calculate my Zakat here?',
        answer: 'Yes, we have a Zakat Calculator feature on our website that helps you determine your payable Zakat based on your assets like gold, silver, cash, and variations.'
    },

    // Patient Assistance
    {
        category: 'Patient Assistance',
        question: 'How does a patient apply for help?',
        answer: 'Patients or their guardians can apply by visiting our office or filling out the "Get Support" form online. They must provide medical reports, a doctor\'s recommendation, and proof of financial need.'
    },
    {
        category: 'Patient Assistance',
        question: 'What kind of support does BANCAT provide?',
        answer: 'We provide financial aid for chemotherapy, radiotherapy, surgery, and medicine. Beyond money, we offer "Alok Nibash" (our patient guest house) for accommodation, ambulance services, and mental health counseling.'
    },
    {
        category: 'Patient Assistance',
        question: 'Do you verify the patients?',
        answer: 'Yes, every case is rigorously verified. Our team visits the patient in the hospital, checks medical records with the treating oncologist, and assesses the family\'s financial situation before listing them for fundraising.'
    },
    {
        category: 'Patient Assistance',
        question: 'What is Alok Nibash?',
        answer: 'Alok Nibash is our specialized shelter home for cancer patients and their caregivers who travel to Dhaka for treatment but cannot afford a place to stay. We provide free or subsidized accommodation, food, and care during their treatment period.'
    },

    // Volunteering & Involvement
    {
        category: 'Get Involved',
        question: 'How can I become a volunteer?',
        answer: 'We welcome volunteers from all walks of life! You can sign up via our "Volunteer" page. Opportunities range from hospital visits and spending time with children to helping with fundraising events and social media management.'
    },
    {
        category: 'Get Involved',
        question: 'Do you offer certificates for volunteers?',
        answer: 'Yes, active volunteers receive a certificate of appreciation after completing a certain number of hours or specific projects. It\'s a great way to build your portfolio while making a difference.'
    },
    {
        category: 'Get Involved',
        question: 'Can my company partner with BANCAT?',
        answer: 'We love corporate partnerships! Companies can collaborate through CSR initiatives, employee giving programs, or by sponsoring specific patient treatments or facilities like Alok Nibash.'
    },

    // Security & Technology
    {
        category: 'Security & Privacy',
        question: 'Is my personal data safe?',
        answer: 'Your privacy is paramount. We use industry-standard encryption to protect your personal and payment data. We never sell your information to third parties.'
    },
    {
        category: 'Security & Privacy',
        question: 'Can I stay anonymous when donating?',
        answer: 'Yes, you can choose to remain anonymous. Your name will not publicly appear on the donor list, though we will still need your details internally to send you a receipt.'
    },
];

export const FAQPage = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Group FAQs by category
    const groupedFAQs = faqData.reduce((acc, faq) => {
        if (!acc[faq.category]) {
            acc[faq.category] = [];
        }
        acc[faq.category].push(faq);
        return acc;
    }, {} as Record<string, FAQItem[]>);

    return (
        <Box sx={{ pt: { xs: 15, md: 20 }, pb: 8, minHeight: '100vh', bgcolor: '#f8f9fa' }}>
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontFamily: 'Montserrat',
                            color: '#2c3e50',
                            mb: 2
                        }}
                    >
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Common questions about donations, security, and our mission.
                    </Typography>
                </Box>

                {Object.entries(groupedFAQs).map(([category, faqs]) => (
                    <Box key={category} sx={{ mb: 6 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                mb: 3,
                                color: '#582d82', // Brand color
                                borderLeft: '4px solid #F39C12', // Accent color
                                pl: 2
                            }}
                        >
                            {category}
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {faqs.map((faq, index) => {
                                const panelId = `${category}-${index}`;
                                return (
                                    <Accordion
                                        key={panelId}
                                        expanded={expanded === panelId}
                                        onChange={handleChange(panelId)}
                                        elevation={0}
                                        sx={{
                                            borderRadius: '12px !important',
                                            border: '1px solid rgba(0,0,0,0.05)',
                                            '&:before': { display: 'none' },
                                            '&.Mui-expanded': {
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                                borderColor: 'transparent'
                                            }
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            sx={{ px: 3 }}
                                        >
                                            <Typography fontWeight={600} sx={{ color: '#333' }}>
                                                {faq.question}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ px: 3, pb: 3, color: '#555', lineHeight: 1.6 }}>
                                            {faq.answer}
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            })}
                        </Box>
                    </Box>
                ))}

                <Box sx={{ textAlign: 'center', mt: 8, p: 4, bgcolor: 'white', borderRadius: 4, border: '1px solid rgba(0,0,0,0.05)' }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                        Still have questions?
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Our support team is here to help you.
                    </Typography>
                    <a href="mailto:support@bancat.org.bd" style={{ color: '#582d82', fontWeight: 600, textDecoration: 'none' }}>
                        support@bancat.org.bd
                    </a>
                </Box>
            </Container>
        </Box>
    );
};
