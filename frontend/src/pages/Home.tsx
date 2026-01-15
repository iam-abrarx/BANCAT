import { Hero } from '../components/home/Hero';

import { CampaignBanner } from '../components/campaigns/CampaignBanner';



import { StatsBanner } from '../components/home/StatsBanner';
import { ParallaxStory } from '../components/home/ParallaxStory';
import { PatientStoriesCarousel } from '../components/home/PatientStoriesCarousel';
import { ImpactCards } from '../components/home/ImpactCards';
import JoinUs from '../components/home/JoinUs';
import { AboutUs } from '../components/home/AboutUs';
import { VideoSection } from '../components/home/VideoSection';
import { Box } from '@mui/material';

export const Home = () => {
    return (
        <Box sx={{
            '& > *': {
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always'
            }
        }}>
            <Box><Hero /></Box>
            <Box sx={{ scrollSnapAlign: 'none !important' }}><StatsBanner /></Box>
            <Box><ParallaxStory /></Box>
            <Box><ImpactCards /></Box>
            <Box><AboutUs /></Box>
            <Box><VideoSection /></Box>
            <Box><PatientStoriesCarousel /></Box>
            <Box><JoinUs /></Box>
            <Box><CampaignBanner /></Box>
        </Box>
    );
};
