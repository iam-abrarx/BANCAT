import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '../components/common/SEOHead';
import { ContactSupport } from '@mui/icons-material';

export const RefundPolicy = () => {
    const { i18n } = useTranslation();

    return (
        <>
            <SEOHead />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">

                    <Box mb={6} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            {i18n.language === 'en' ? 'Refund Policy' : 'অনুদান ফেরত সংক্রান্ত নীতিমালা (Donation Refund Policy)'}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {i18n.language === 'en'
                                ? 'Our commitment to donor transparency and trust.'
                                : 'আমাদের দাতা স্বচ্ছতা এবং আস্থার প্রতিশ্রুতি।'}
                        </Typography>
                    </Box>

                    <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
                        {i18n.language === 'en' ? (
                            // English Content
                            <>
                                <Typography variant="body1" paragraph>
                                    Bangladesh Cancer Aid Trust - BANCAT is instituting a donation refund policy to ensure fair and transparent processing of requests for refund of donations as digital payments are becoming more frequent. BANCAT expects that all donors will exercise due care and diligence while making donations. BANCAT also recognises that a donation may be made erroneously or donors may change their mind.
                                </Typography>
                                <Divider sx={{ my: 3 }} />

                                <Typography variant="body1" paragraph>
                                    BANCAT will examine each request for refund of donation and endeavor to make the refund. BANCAT may also seek further information / documents and donor must cooperate in this regard.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    However, BANCAT is not obliged to make refunds and may, in its discretion, decline any requests for refund of donations, particularly if a tax exemption certificate has been issued.
                                </Typography>

                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        If you would like your donation to BANCAT to be refunded,
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        You must request BANCAT in writing or by email for a refund and your request must reach BANCAT within 7 to 10 working days from the date on which you made the donation i.e. the date on which you:
                                    </Typography>
                                    <Typography variant="body1" component="div">
                                        <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                            <li>Made the donation online, electronically or through other means, OR</li>
                                            <li>Handed over the cheque / demand draft to BANCAT or someone authorised by BANCAT for this purpose, OR</li>
                                            <li>Despatched the cheque / demand draft to BANCAT by other means.</li>
                                        </ul>
                                    </Typography>
                                </Box>

                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        Refund Request Details
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        The written request stating reason for requesting refund must be sent to the address stated below and must contain all the following details pertaining to the donation:
                                    </Typography>
                                    <Typography variant="body1" component="div">
                                        <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                            <li>Date of donation</li>
                                            <li>Donation amount</li>
                                            <li>If donation was made through cheque/draft, please provide Cheque/Draft no.</li>
                                            <li>If donation was made through a credit card, please provide Credit Card no. (last 4 digits only).</li>
                                            <li>If donation was made online, please provide Donation-ID.</li>
                                        </ul>
                                    </Typography>
                                </Box>

                                <Box mt={4} display="flex" flexDirection="column" alignItems="center" bgcolor="#f5f5f5" p={4} borderRadius={2}>
                                    <ContactSupport color="primary" sx={{ fontSize: 50, mb: 1 }} />
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        Contact for Refund
                                    </Typography>
                                    <Typography variant="body1" textAlign="center" paragraph>
                                        <strong>Bangladesh Cancer Aid Trust</strong><br />
                                        House - 144, Road - 3, Block - A, Basundhara R/A, Dhaka - 1229
                                    </Typography>
                                    <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mt: 1 }}>
                                        <a href="mailto:support@bancat.org.bd" style={{ textDecoration: 'none', color: 'inherit' }}>support@bancat.org.bd</a>
                                    </Typography>
                                </Box>

                                <Typography variant="body2" sx={{ mt: 4, textAlign: 'center', fontStyle: 'italic', color: 'text.secondary' }}>
                                    All decisions of Bangladesh Cancer Aid Trust - BANCAT in this regard will be final and binding on the donor.
                                </Typography>
                            </>
                        ) : (
                            // Bengali Content
                            <>
                                <Typography variant="body1" paragraph>
                                    বাংলাদেশ ক্যান্সার এইড ট্রাস্ট -(BANCAT), ডিজিটাল পেমেন্টের ক্রমবর্ধমান ব্যবহারের প্রেক্ষিতে অনুদান ফেরতের অনুরোধগুলো স্বচ্ছ ও সুষ্ঠুভাবে সম্পন্ন করার লক্ষ্যে একটি 'অনুদান ফেরত সংক্রান্ত নীতিমালা' প্রবর্তন করছে। ব্যানক্যাট প্রত্যাশা করে যে, সকল দাতা অনুদান প্রদানের সময় যথাযথ সতর্কতা ও সচেতনতা অবলম্বন করবেন। ব্যানক্যাট এটিও স্বীকার করে যে, ভুলবশত অনুদান প্রদান করা হতে পারে অথবা দাতারা তাদের সিদ্ধান্ত পরিবর্তন করতে পারেন।
                                </Typography>
                                <Divider sx={{ my: 3 }} />

                                <Typography variant="body1" paragraph>
                                    ব্যানক্যাট অনুদান ফেরতের প্রতিটি অনুরোধ পরীক্ষা করে দেখবে এবং তা ফেরত দেওয়ার প্রচেষ্টা চালাবে। প্রয়োজনে ব্যানক্যাট আরও তথ্য বা নথিপত্র চাইতে পারে এবং দাতাকে এ বিষয়ে অবশ্যই সহযোগিতা করতে হবে।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    তবে, ব্যানক্যাট অনুদান ফেরত দিতে বাধ্য নয় এবং নিজস্ব বিবেচনা অনুযায়ী যেকোনো ফেরতের অনুরোধ প্রত্যাখ্যান করার অধিকার রাখে, বিশেষ করে যদি ইতোমধ্যে কর অব্যাহতির সনদ (tax exemption certificate) ইস্যু করা হয়ে থাকে।
                                </Typography>

                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        আপনি যদি ব্যানক্যাট-এ করা আপনার অনুদান ফেরত পেতে চান, তবে:
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        আপনাকে অনুদান ফেরতের জন্য ব্যানক্যাট-কে লিখিতভাবে বা ইমেলের মাধ্যমে অনুরোধ জানাতে হবে এবং আপনার অনুরোধটি অনুদান প্রদানের তারিখ থেকে ৭ থেকে ১০ কার্যদিবসের মধ্যে ব্যানক্যাট-র কাছে পৌঁছাতে হবে, অর্থাৎ যে তারিখে আপনি:
                                    </Typography>
                                    <Typography variant="body1" component="div">
                                        <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                            <li>অনলাইনে, ইলেকট্রনিকভাবে বা অন্য কোনো মাধ্যমে অনুদান প্রদান করেছেন, অথবা</li>
                                            <li>ব্যানক্যাট বা এই উদ্দেশ্যে ব্যানক্যাট কর্তৃক অনুমোদিত কোনো ব্যক্তির কাছে চেক বা ডিমান্ড ড্রাফট হস্তান্তর করেছেন, অথবা</li>
                                            <li>অন্য কোনো উপায়ে ব্যানক্যাট-র কাছে চেক বা ডিমান্ড ড্রাফট পাঠিয়েছেন।</li>
                                        </ul>
                                    </Typography>
                                </Box>

                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        অনুদান ফেরতের অনুরোধের বিবরণ
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        অনুদান ফেরতের কারণ উল্লেখ করে লিখিত অনুরোধটি নিচে দেওয়া ঠিকানায় পাঠাতে হবে এবং এতে অনুদান সংক্রান্ত নিম্নলিখিত সকল তথ্য অবশ্যই থাকতে হবে:
                                    </Typography>
                                    <Typography variant="body1" component="div">
                                        <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                            <li>অনুদানের তারিখ</li>
                                            <li>অনুদানের পরিমাণ</li>
                                            <li>যদি চেক বা ড্রাফটের মাধ্যমে অনুদান দেওয়া হয়, তবে চেক বা ড্রাফট নম্বর প্রদান করুন।</li>
                                            <li>যদি ক্রেডিট কার্ডের মাধ্যমে অনুদান দেওয়া হয়, তবে ক্রেডিট কার্ড নম্বর প্রদান করুন (শুধুমাত্র শেষ ৪টি ডিজিট)।</li>
                                            <li>যদি অনলাইনে অনুদান দেওয়া হয়, তবে অনুগ্রহ করে 'ডোনেশন-আইডি' (Donation-ID) প্রদান করুন।</li>
                                        </ul>
                                    </Typography>
                                </Box>

                                <Box mt={4} display="flex" flexDirection="column" alignItems="center" bgcolor="#f5f5f5" p={4} borderRadius={2}>
                                    <ContactSupport color="primary" sx={{ fontSize: 50, mb: 1 }} />
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        যোগাযোগ
                                    </Typography>
                                    <Typography variant="body1" textAlign="center" paragraph>
                                        <strong>বাংলাদেশ ক্যান্সার এইড ট্রাস্ট (Bangladesh Cancer Aid Trust)</strong><br />
                                        হাউস - ১৪৪, রোড - ৩, ব্লক - এ, বসুন্ধরা আর/এ, ঢাকা - ১২২৯
                                    </Typography>
                                    <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mt: 1 }}>
                                        <a href="mailto:support@bancat.org.bd" style={{ textDecoration: 'none', color: 'inherit' }}>support@bancat.org.bd</a>
                                    </Typography>
                                </Box>

                                <Typography variant="body2" sx={{ mt: 4, textAlign: 'center', fontStyle: 'italic', color: 'text.secondary' }}>
                                    এই বিষয়ে বাংলাদেশ ক্যান্সার এইড ট্রাস্ট - ব্যানক্যাট (BANCAT)-এর সকল সিদ্ধান্তই চূড়ান্ত বলে গণ্য হবে এবং তা দাতার জন্য বাধ্যতামূলক হবে।
                                </Typography>
                            </>
                        )}
                    </Paper>
                </Container>
            </Box>
        </>
    );
};
