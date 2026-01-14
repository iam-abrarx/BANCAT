import { Routes, Route } from 'react-router-dom';
// import { DynamicPage } from './pages/DynamicPage'; // Removed
import { TeamPage } from './pages/TeamPage';
import { SEOHead } from './components/common/SEOHead';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SnackbarProvider } from 'notistack';


// Layout & Pages
import { Layout } from './components/layout/Layout';
import { BlogList } from './pages/BlogList';
import { BlogDetail } from './pages/BlogDetail';
import { TrainingPage } from './pages/TrainingPage';
import { CounsellingPage } from './pages/CounsellingPage';
import { SupervisionPage } from './pages/SupervisionPage';
import { LiveChatPage } from './pages/LiveChatPage';
import { Home } from './pages/Home';
import { Patients } from './pages/Patients';
import { PatientDetail } from './pages/PatientDetail';
import { Stories } from './pages/Stories';
import { StoryDetail } from './pages/StoryDetail';
import { Programs } from './pages/Programs';
import { ProgramDetail } from './pages/ProgramDetail';
import { Campaigns } from './pages/Campaigns';
import { CampaignDetail } from './pages/CampaignDetail';
import { StartCampaign } from './pages/StartCampaign';
import { DonationSuccess } from './pages/DonationSuccess';
import { ZakatCalculator } from './pages/ZakatCalculator';
import { DonationPage } from './pages/DonationPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { ContactPage } from './pages/ContactPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import AboutPage from './pages/AboutPage';
import ImpactPage from './pages/ImpactPage';
import { AlokNibash } from './pages/AlokNibash';
import { Partners } from './pages/Partners';
import { CancerInfo } from './pages/CancerInfo';
import { MaaBachao } from './pages/MaaBachao';
import { FAQPage } from './pages/FAQPage';
import { GalleryList } from './pages/Gallery/GalleryList';
import { GalleryDetail } from './pages/Gallery/GalleryDetail';
import { Testimonials } from './pages/Testimonials/Testimonials';

// Static Pages
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { RefundPolicy } from './pages/RefundPolicy';
import { ServicesPage } from './pages/ServicesPage';
import { PatientSupport } from './pages/PatientSupport';
import { MediaPage } from './pages/MediaPage';
import { MentalHealthPage } from './pages/MentalHealthPage';
import { RehabilitationPage } from './pages/RehabilitationPage';
import { HolisticSupportPage } from './pages/HolisticSupportPage';


import { useState, useEffect } from 'react';
import { LoadingPage } from './components/common/LoadingPage';
import { NotFound } from './pages/NotFound';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Premium splash effect
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <ErrorBoundary>
            <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Layout>
                    <SEOHead />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/patients" element={<Patients />} />
                        <Route path="/patients/:code" element={<PatientDetail />} />
                        <Route path="/stories" element={<Stories />} />
                        <Route path="/stories/:slug" element={<StoryDetail />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/programs/mental-health-support" element={<MentalHealthPage />} />
                        <Route path="/programs/holistic-support" element={<HolisticSupportPage />} />
                        <Route path="/programs/:slug" element={<ProgramDetail />} />
                        <Route path="/campaigns" element={<Campaigns />} />
                        <Route path="/campaigns/start" element={<StartCampaign />} />
                        <Route path="/campaigns/:slug" element={<CampaignDetail />} />
                        <Route path="/donation/success" element={<DonationSuccess />} />

                        <Route path="/volunteer" element={<VolunteerPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/search" element={<SearchResultsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/impact" element={<ImpactPage />} />
                        <Route path="/zakat-calculator" element={<ZakatCalculator />} />
                        <Route path="/alok-nibash" element={<AlokNibash />} />
                        <Route path="/partnerships/brands" element={<Partners />} />
                        <Route path="/partnerships/csr" element={<Partners />} />
                        <Route path="/cancer-info" element={<CancerInfo />} />
                        <Route path="/campaigns/maa-bachao" element={<MaaBachao />} />
                        <Route path="/faq" element={<FAQPage />} />


                        <Route path="/about/team" element={<TeamPage />} />

                        {/* Replaced Dynamic Pages */}
                        <Route path="/about/services" element={<ServicesPage />} />
                        {/* Mapped Missing Links to ServicesPage for now */}
                        <Route path="/about/supervision" element={<SupervisionPage />} />
                        <Route path="/about/training" element={<TrainingPage />} />
                        <Route path="/about/counselling" element={<CounsellingPage />} />

                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-of-use" element={<TermsOfUse />} />
                        <Route path="/refund-policy" element={<RefundPolicy />} />

                        <Route path="/support" element={<PatientSupport />} />
                        <Route path="/support/caregiver-support" element={<PatientSupport />} />
                        <Route path="/support/live-chat" element={<LiveChatPage />} />

                        {/* Projects Mapping */}
                        <Route path="/projects/mosabbir-alok-nibash-2" element={<AlokNibash />} /> {/* Placeholder */}
                        <Route path="/projects/alok-kantha" element={<Programs />} />
                        <Route path="/projects/alokon" element={<Programs />} />
                        <Route path="/projects/rehabilitation" element={<RehabilitationPage />} />

                        <Route path="/donate" element={<DonationPage />} />
                        <Route path="/donate/adopt-patient" element={<DonationPage />} />

                        <Route path="/media" element={<MediaPage />} />
                        <Route path="/gallery" element={<GalleryList />} />
                        <Route path="/gallery/:slug" element={<GalleryDetail />} />
                        <Route path="/testimonials" element={<Testimonials />} />

                        <Route path="/blogs" element={<BlogList />} />
                        <Route path="/blogs/:slug" element={<BlogDetail />} />

                        {/* Catch-all route */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </SnackbarProvider>
        </ErrorBoundary>
    );
}

export default App;
