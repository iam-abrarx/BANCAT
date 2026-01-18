import { useState } from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const faqData = {
    en: [
        {
            category: 'General Donation Questions',
            question: 'Where does my money go?',
            answer: 'BANCAT ensures that your contributions are utilized across three core pillars: Holistic Care (funding accommodation, nutrition, and medical supervision at Alok Nibash), Awareness Building (nationwide campaigns and the "Aloron" mental health platform), and Direct Support (covering emergency medical costs like chemotherapy and medication for underprivileged patients).'
        },
        {
            category: 'General Donation Questions',
            question: 'Is BANCAT a registered non-profit?',
            answer: 'Yes. Bangladesh Cancer Aid Trust (BANCAT) is a registered non-profit organization working to revolutionize cancer care in Bangladesh through collective philanthropy and the "Care is Cure" philosophy.'
        },
        {
            category: 'Ways to Give',
            question: 'What is a "Regular Donor"?',
            answer: 'A Regular Donor or "Monthly Guardian" pledges a fixed monthly amount to sustain Alok Nibash. You can choose packages like 500 BDT/month, 1,500 BDT/month, 5,000 BDT/month, or 10,000 BDT/month. Your monthly contribution ensures a steady source of support for patients throughout the year.'
        },
        {
            category: 'Ways to Give',
            question: 'Who are "Lifetime Donors" or "Patrons"?',
            answer: 'Lifetime Donors are visionaries who support long-term infrastructure. For 3,60,000 BDT, you can sponsor a bed at Alok Nibash for 1 year, covering accommodation, nutrition, and holistic care for patients using that bed.'
        },
        {
            category: 'Ways to Give',
            question: 'Can I donate to a specific medical package?',
            answer: 'Yes. We have Direct Impact packages: Blood Transfusion (1,000 BDT), Medicine Cost (1 month - 5,000 BDT), Chemotherapy (1 cycle - 15,000 BDT), Sponsor a Patient\'s Treatment (1 month - 20,000 BDT), and Radiotherapy (1 cycle - 75,000 BDT).'
        },
        {
            category: 'Payment & Security',
            question: 'Is donating online safe?',
            answer: 'Absolutely. We use international standard SSL encryption to keep your personal and financial information completely secure.'
        },
        {
            category: 'Payment & Security',
            question: 'What payment methods do you accept?',
            answer: 'We accept Mobile Wallets (bKash, Nagad, Rocket, Upay), Cards (VISA, Mastercard, Amex, DBBL Nexus), and Internet Banking via major Bangladeshi banks.'
        },
        {
            category: 'Payment & Security',
            question: 'Who are your payment gateway partners?',
            answer: 'We work with top-tier aggregators like SSLCommerz and AamarPay to ensure PCI-DSS compliant secure transactions.'
        },
        {
            category: 'Donation Management',
            question: 'Can I get a receipt for my donation?',
            answer: 'Yes. A digital receipt is automatically emailed to you for every online donation. For large amounts or bank transfers, contact support@bancat.org.bd for an official acknowledgement letter.'
        },
        {
            category: 'Donation Management',
            question: 'What is your refund policy?',
            answer: 'We have a specific refund policy for accidental errors. Please visit our "Refund Policy" page for details.'
        },
        {
            category: 'Donation Management',
            question: 'Can I give Zakat?',
            answer: 'Yes. BANCAT has a dedicated fund for Zakat and Sadaqah, strictly utilized for "Mustahiq" underprivileged cancer fighters.'
        }
    ],
    bn: [
        {
            category: 'অনুদান সংক্রান্ত সাধারণ প্রশ্ন',
            question: 'আমার অনুদানের অর্থ কোথায় ব্যয় করা হয়?',
            answer: 'ব্যানকাট (BANCAT) নিশ্চিত করে যেন আপনার অবদান মূলত তিনটি প্রধান ক্ষেত্রে ব্যবহৃত হয়: পূর্ণাঙ্গ সেবা (Holistic Care): ‘মোসাব্বির আলোক নিবাস’ সেন্টারে রোগীদের বিনামূল্যে আবাসন, পুষ্টিকর খাবার এবং চিকিৎসা তত্ত্বাবধান নিশ্চিত করা। সচেতনতা বৃদ্ধি: ক্যান্সার সেবার ব্যবধান কমিয়ে আনতে দেশব্যাপী প্রচারণা এবং ‘আলোড়ন’ নামক মানসিক স্বাস্থ্য প্ল্যাটফর্মের কার্যক্রম পরিচালনা করা। সরাসরি সহায়তা: সুবিধাবঞ্চিত রোগীদের জন্য কেমোথেরাপি, রেডিওথেরাপি এবং জীবন রক্ষাকারী ওষুধের মতো জরুরি চিকিৎসা ব্যয় বহন করা।'
        },
        {
            category: 'অনুদান সংক্রান্ত সাধারণ প্রশ্ন',
            question: 'ব্যানকাট (BANCAT) কি একটি নিবন্ধিত অলাভজনক সংস্থা?',
            answer: 'হ্যাঁ। বাংলাদেশ ক্যান্সার এইড ট্রাস্ট (BANCAT) একটি নিবন্ধিত অলাভজনক সংস্থা। আমরা সম্মিলিত পরোপকার এবং "Care is Cure" দর্শনের মাধ্যমে বাংলাদেশের ক্যান্সার চিকিৎসায় একটি বৈপ্লবিক পরিবর্তন আনতে কাজ করছি।'
        },
        {
            category: 'অনুদান প্রদানের উপায়সমূহ',
            question: '‘নিয়মিত দাতা’ (Regular Donor) বলতে কী বোঝায়?',
            answer: 'নিয়মিত দাতা বা ‘মান্থলি গার্ডিয়ান’ হলেন তারা, যারা প্রতি মাসে নির্দিষ্ট পরিমাণ অনুদান প্রদানের অঙ্গীকার করেন। আলোক নিবাসের স্থায়িত্ব বজায় রাখার জন্য এই অনুদান অত্যন্ত গুরুত্বপূর্ণ। আপনি নিচের যেকোনো একটি প্যাকেজ বেছে নিতে পারেন: ৫০০ টাকা / মাস, ১,৫০০ টাকা / মাস, ৫,০০০ টাকা / মাস, ১০,০০০ টাকা / মাস। আপনার মাসিক অনুদান সম্পদের একটি নিয়মিত উৎস নিশ্চিত করে, যা সারা বছর রোগীদের জীবন বদলে দিতে সাহায্য করে।'
        },
        {
            category: 'অনুদান প্রদানের উপায়সমূহ',
            question: '‘আজীবন দাতা’ (Lifetime Donor) বা ‘পৃষ্ঠপোষক’ (Patron) কারা?',
            answer: 'আজীবন দাতা হলেন সেই সব দূরদর্শী ব্যক্তি যারা দীর্ঘমেয়াদী অবকাঠামো এবং রোগীদের নিরাপত্তা নিশ্চিত করতে সহায়তা করেন। বড় মাপের প্রভাব তৈরিতে আগ্রহী দাতাদের জন্য আমাদের একটি বিশেষ প্যাকেজ রয়েছে: আলোক নিবাসে একটি শয্যা (বেড) স্পন্সর করা (১ বছর): ৩,৬০,০০০ টাকা। এটি সারা বছর ধরে সেই শয্যাটি ব্যবহারকারী বিভিন্ন রোগীর আবাসন, পুষ্টি এবং সামগ্রিক সেবার সম্পূর্ণ ব্যয় বহন করে।'
        },
        {
            category: 'অনুদান প্রদানের উপায়সমূহ',
            question: 'আমি কি নির্দিষ্ট কোনো চিকিৎসা প্যাকেজে অনুদান দিতে পারি?',
            answer: 'হ্যাঁ। আমাদের বেশ কিছু ‘সরাসরি প্রভাব’ (Direct Impact) ফেলবে এমন প্যাকেজ রয়েছে: রক্ত পরিসঞ্চালন (Blood Transfusion): ১,০০০ টাকা, ওষুধ খরচ (১ মাস): ৫,০০০ টাকা, কেমোথেরাপি (১টি সাইকেল): ১৫,০০০ টাকা, একজন রোগীর চিকিৎসা স্পন্সর করা (১ মাস): ২০,০০০ টাকা, রেডিওথেরাপি (১টি সাইকেল): ৭৫,০০০ টাকা।'
        },
        {
            category: 'পেমেন্ট এবং নিরাপত্তা',
            question: 'অনলাইনে অনুদান দেওয়া কি নিরাপদ?',
            answer: 'অবশ্যই। আমরা আপনার তথ্যের নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দেই। আমাদের ওয়েবসাইট আন্তর্জাতিক মানের SSL (Secure Sockets Layer) এনক্রিপশন ব্যবহার করে, যা আপনার ব্যক্তিগত ও আর্থিক তথ্যের আদান-প্রদানকে সম্পূর্ণ সুরক্ষিত রাখে।'
        },
        {
            category: 'পেমেন্ট এবং নিরাপত্তা',
            question: 'আপনারা কোন কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?',
            answer: 'আমাদের সুরক্ষিত পেমেন্ট গেটওয়ের মাধ্যমে আপনি বিভিন্ন পদ্ধতিতে অনুদান দিতে পারেন: মোবাইল ওয়ালেট: বিকাশ, নগদ, রকেট এবং উপায়। কার্ড: ভিসা (VISA), মাস্টারকার্ড, আমেরিকান এক্সপ্রেস (Amex) এবং ডিবিবিএল নেক্সাস। ইন্টারনেট ব্যাংকিং: বাংলাদেশের প্রধান ব্যাংকগুলোর মাধ্যমে সরাসরি ট্রান্সফার।'
        },
        {
            category: 'পেমেন্ট এবং নিরাপত্তা',
            question: 'আপনাদের পেমেন্ট গেটওয়ে পার্টনার কারা?',
            answer: 'প্রতিটি লেনদেন যেন PCI-DSS কমপ্লায়েন্ট পরিবেশে সম্পন্ন হয়, তা নিশ্চিত করতে আমরা বাংলাদেশের শীর্ষস্থানীয় ও নির্ভরযোগ্য পেমেন্ট অ্যাগ্রিগেটর SSLCommerz এবং AamarPay-এর সাথে কাজ করি।'
        },
        {
            category: 'অনুদান ব্যবস্থাপনা',
            question: 'আমি কি আমার অনুদানের রসিদ পেতে পারি?',
            answer: 'হ্যাঁ। প্রতিটি অনলাইন অনুদানের জন্য একটি ডিজিটাল রসিদ স্বয়ংক্রিয়ভাবে আপনার নিবন্ধিত ইমেল ঠিকানায় পাঠিয়ে দেওয়া হয়। বড় অংকের অনুদান বা ব্যাংক ট্রান্সফারের ক্ষেত্রে আনুষ্ঠানিক স্বীকৃতিপত্রের (Acknowledgement letter) জন্য অনুগ্রহ করে আমাদের সাথে support@bancat.org.bd এই ঠিকানায় যোগাযোগ করুন।'
        },
        {
            category: 'অনুদান ব্যবস্থাপনা',
            question: 'আপনাদের রিফান্ড (অর্থ ফেরত) পলিসি কী?',
            answer: 'আমরা জানি যে অনুদান প্রদানের ক্ষেত্রে অনিচ্ছাকৃত ভুল হতে পারে। এই ধরণের সমস্যা মোকাবেলায় আমাদের একটি রিফান্ড বা অর্থ ফেরত সংক্রান্ত সুনির্দিষ্ট নীতিমালা রয়েছে। বিস্তারিত জানতে “Refund Policy” বা “অনুদান ফেরত সংক্রান্ত নীতিমালা” পেইজটি ভিজিট করুন।'
        },
        {
            category: 'অনুদান ব্যবস্থাপনা',
            question: 'আমি কি জাকাত প্রদান করতে পারি?',
            answer: 'হ্যাঁ। ব্যানকাট-এর ‘জাকাত এবং সাদাকা’র জন্য একটি নিবেদিত ফান্ড রয়েছে। এই অর্থ কঠোরভাবে শুধুমাত্র ‘মুস্তাহিক’ বা জাকাত গ্রহণের যোগ্য সুবিধাবঞ্চিত ক্যান্সার যোদ্ধাদের চিকিৎসা ও সেবায় ব্যয় করা হয়।'
        }
    ]
};

export const FAQPage = () => {
    const { i18n } = useTranslation();
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Ensure language is typed correctly for indexing or fallback to 'en'
    const currentLang = (i18n.language === 'bn' ? 'bn' : 'en') as keyof typeof faqData;
    const categories = Array.from(new Set(faqData[currentLang].map(item => item.category)));


    return (
        <>
            {/* Assuming SEOHead is a component that needs to be rendered */}
            {/* <SEOHead /> */}
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="md">
                    <Box mb={6} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            {currentLang === 'en' ? 'Frequently Asked Questions' : 'সাধারণ জিজ্ঞাসা (FAQ)'}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {currentLang === 'en'
                                ? 'Find answers to common questions about your support and our mission.'
                                : 'আপনার সহায়তা এবং আমাদের মিশন সম্পর্কে সাধারণ প্রশ্নের উত্তর খুঁজুন।'}
                        </Typography>
                    </Box>

                    {categories.map((category) => (
                        <Box key={category} mb={4}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#582d82', mb: 2 }}>
                                {category}
                            </Typography>
                            {faqData[currentLang].filter(item => item.category === category).map((item, index) => {
                                const panelId = `${category}-${index}`;
                                return (
                                    <Accordion
                                        key={panelId}
                                        expanded={expanded === panelId}
                                        onChange={handleChange(panelId)}
                                        elevation={0}
                                        sx={{
                                            mb: 2,
                                            borderRadius: '8px !important',
                                            '&:before': { display: 'none' },
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            border: '1px solid rgba(0,0,0,0.05)'
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            sx={{ px: 3 }}
                                        >
                                            <Typography fontWeight={600} sx={{ color: '#333' }}>
                                                {item.question}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ px: 3, pb: 3, color: '#555', lineHeight: 1.6 }}>
                                            {item.answer}
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            })}
                        </Box>
                    ))}

                    <Box sx={{ textAlign: 'center', mt: 8, p: 4, bgcolor: 'white', borderRadius: 4, border: '1px solid rgba(0,0,0,0.05)' }}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            Still have questions?
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            House 144, Road 3, Block A, Basundhara R/A, Dhaka
                        </Typography>
                        <a href="mailto:support@bancat.org.bd" style={{ color: '#582d82', fontWeight: 600, textDecoration: 'none' }}>
                            support@bancat.org.bd
                        </a>
                    </Box>
                </Container>
            </Box>
        </>
    );
};
