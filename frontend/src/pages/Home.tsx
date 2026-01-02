import { Hero } from '../components/home/Hero';
import { ProgramsGrid } from '../components/programs/ProgramsGrid';
import { CampaignBanner } from '../components/campaigns/CampaignBanner';



import { StatsBanner } from '../components/home/StatsBanner';
import { ParallaxStory } from '../components/home/ParallaxStory';
import { ImpactCards } from '../components/home/ImpactCards';
import { MissionVision } from '../components/home/MissionVision';
import JoinUs from '../components/home/JoinUs';
import { VideoSection } from '../components/home/VideoSection';
import { Box } from '@mui/material';

export const Home = () => {
    return (
        <Box>
            <Hero />
            <StatsBanner />
            {/* Partners removed as it is now part of MissionVision */}
            <ParallaxStory />
            <ImpactCards />
            <MissionVision />
            <JoinUs />
            <VideoSection />

            <CampaignBanner />
            <ProgramsGrid />

            {/* <FeaturedPatients /> */}

        </Box>
    );
};
