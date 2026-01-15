import { Box, Paper, Typography, Grid, Fade, Popper, alpha } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import type { MenuSection } from './menuConfig';

interface MegaMenuProps {
    sections: MenuSection[];
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
    featuredImage?: {
        src: string;
        caption?: string;
    };
}

const containerVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: {
        opacity: 0, y: 5,
        transition: { duration: 0.1 }
    }
};

export const MegaMenu = ({
    sections,
    anchorEl,
    open,
    onClose,
    featuredImage,
}: MegaMenuProps) => {
    const { t } = useTranslation();
    // Defense against top-left rendering glitch
    if (open && !anchorEl) return null;

    return (
        <Popper
            open={open}
            anchorEl={anchorEl}
            placement="bottom"
            transition
            style={{ zIndex: 1300 }}
            modifiers={[{ name: 'offset', options: { offset: [0, 10] } }]}
        >
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={200}>
                    <Paper
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        elevation={8}
                        sx={{
                            minWidth: sections.length === 2 ? 600 : 900,
                            maxWidth: 1100,
                            borderRadius: '12px',
                            bgcolor: 'white',
                            overflow: 'hidden',
                            border: '1px solid rgba(0,0,0,0.08)',
                        }}
                    >
                        <Grid container>
                            <Grid item xs={12} md={featuredImage ? 8 : 12} sx={{ p: 4 }}>
                                <Grid container spacing={4}>
                                    {sections.map((section, sectionIndex) => (
                                        <Grid item xs={12} sm={sections.length === 2 ? 6 : sections.length === 4 ? 3 : 4} key={sectionIndex}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    color: '#8E44AD',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.1em',
                                                    mb: 2,
                                                    display: 'block',
                                                    borderBottom: '1px solid currentColor',
                                                    width: 'fit-content',
                                                    pb: 0.5
                                                }}
                                            >
                                                {t(section.title)}
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                                {section.items.map((item, itemIndex) => (
                                                    <Box
                                                        key={itemIndex}
                                                        component={RouterLink}
                                                        to={item.path}
                                                        onClick={onClose}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            p: 1.2,
                                                            mx: -1.2,
                                                            borderRadius: '8px',
                                                            textDecoration: 'none',
                                                            color: '#2c0e45',
                                                            transition: 'all 0.2s',
                                                            '&:hover': {
                                                                bgcolor: alpha('#8E44AD', 0.05),
                                                                transform: 'translateX(4px)',
                                                                '& .arrow': { opacity: 1, transform: 'translateX(0)' }
                                                            }
                                                        }}
                                                    >
                                                        <Box>
                                                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                                {t(item.label)}
                                                            </Typography>
                                                            {item.description && (
                                                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                                                                    {item.description}
                                                                </Typography>
                                                            )}
                                                        </Box>
                                                        <KeyboardArrowRight className="arrow" sx={{ fontSize: 18, opacity: 0, transform: 'translateX(-5px)', transition: 'all 0.2s' }} />
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                            {featuredImage && (
                                <Grid item xs={12} md={4}>
                                    <Box
                                        sx={{
                                            height: '100%',
                                            minHeight: 300,
                                            backgroundImage: `url(${featuredImage.src})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            p: 3,
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                            }
                                        }}
                                    >
                                        <Box sx={{ position: 'relative', zIndex: 1, color: 'white' }}>
                                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                                                {featuredImage.caption}
                                            </Typography>
                                            <Typography variant="caption" sx={{ opacity: 0.8, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                Learn More <KeyboardArrowRight sx={{ fontSize: 14 }} />
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )}
                        </Grid>
                    </Paper>
                </Fade>
            )}
        </Popper>
    );
};

export default MegaMenu;
