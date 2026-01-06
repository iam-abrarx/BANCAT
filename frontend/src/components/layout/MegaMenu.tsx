import { Box, Paper, Typography, Grid, Fade, Popper, useTheme, alpha } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { KeyboardArrowRight } from '@mui/icons-material';
import type { MenuSection } from './menuConfig';

interface MegaMenuProps {
    sections: MenuSection[];
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    featuredImage?: {
        src: string;
        caption?: string;
    };
}

// Enhanced Animation variants
const containerVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "fluid" feel
            staggerChildren: 0.04,
            delayChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: { duration: 0.05, ease: "easeInOut" }, // Faster exit
    },
};

const sectionVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

export const MegaMenu = ({
    sections,
    anchorEl,
    open,
    onClose,
    onMouseEnter,
    onMouseLeave,
    featuredImage,
}: MegaMenuProps) => {
    const theme = useTheme();

    return (
        <Popper
            open={open}
            anchorEl={anchorEl}
            placement="bottom-start"
            transition
            style={{ zIndex: 1300 }}
            modifiers={[
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12], // Consistent gap
                    },
                },
                {
                    name: 'eventListeners',
                    options: {
                        scroll: false,
                    },
                },
            ]}
            popperOptions={{
                strategy: 'fixed',
            }}
        >
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={{ enter: 350, exit: 100 }}>
                    <Paper
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        elevation={0}
                        sx={{
                            minWidth: featuredImage ? 900 : 700,
                            maxWidth: 1100,
                            p: 0,
                            borderRadius: '0 0 24px 24px', // Square top, rounded bottom
                            // Clean White Look
                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(142, 68, 173, 0.1)', // Subtle purple border
                            boxShadow: '0 20px 60px -10px rgba(44, 14, 69, 0.15)', // Deep purple shadow
                            overflow: 'hidden',
                            position: 'relative',
                        }}
                    >
                        {/* Decorative Top Accent */}
                        <Box
                            sx={{
                                height: '3px',
                                width: '100%',
                                background: 'linear-gradient(90deg, #8E44AD 0%, #D2B4DE 50%, #8E44AD 100%)', // Purple gradient
                                backgroundSize: '200% auto',
                                animation: 'gradientFlow 3s linear infinite',
                                '@keyframes gradientFlow': {
                                    '0%': { backgroundPosition: '0% 50%' },
                                    '100%': { backgroundPosition: '200% 50%' },
                                }
                            }}
                        />

                        <Grid container>
                            {/* Links Section */}
                            <Grid item xs={12} md={featuredImage ? 8 : 12} sx={{ p: 5 }}>
                                <Grid container spacing={6}>
                                    {sections.map((section, sectionIndex) => (
                                        <Grid item xs={12} sm={6} key={sectionIndex}>
                                            <motion.div variants={sectionVariants}>
                                                <Typography
                                                    variant="overline"
                                                    sx={{
                                                        color: '#8E44AD', // Purple
                                                        fontWeight: 800,
                                                        letterSpacing: '0.1em',
                                                        mb: 3,
                                                        display: 'inline-block',
                                                        borderBottom: '2px solid',
                                                        borderColor: alpha('#8E44AD', 0.1),
                                                        pb: 0.5,
                                                        fontSize: '0.75rem',
                                                    }}
                                                >
                                                    {section.title}
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                                    {section.items.map((item, itemIndex) => (
                                                        <motion.div
                                                            key={itemIndex}
                                                            variants={itemVariants}
                                                        >
                                                            <Box
                                                                component={RouterLink}
                                                                to={item.path}
                                                                onClick={onClose}
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 2,
                                                                    p: 1.5,
                                                                    mx: -1.5,
                                                                    borderRadius: '12px',
                                                                    textDecoration: 'none',
                                                                    color: 'text.primary',
                                                                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                                                    position: 'relative',
                                                                    '&:hover': {
                                                                        bgcolor: alpha('#8E44AD', 0.05), // Light purple hover
                                                                        transform: 'translateX(6px)',
                                                                    },
                                                                    '& .icon-arrow': {
                                                                        opacity: 0,
                                                                        transform: 'translateX(-10px)',
                                                                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                                    },
                                                                    '&:hover .icon-arrow': {
                                                                        opacity: 1,
                                                                        transform: 'translateX(0)',
                                                                    }
                                                                }}
                                                            >
                                                                <Box sx={{ flex: 1 }}>
                                                                    <Typography
                                                                        variant="body1"
                                                                        sx={{
                                                                            fontWeight: 600,
                                                                            fontSize: '0.95rem',
                                                                            color: '#2c0e45', // Dark purple text
                                                                        }}
                                                                    >
                                                                        {item.label}
                                                                    </Typography>
                                                                    {item.description && (
                                                                        <Typography
                                                                            variant="caption"
                                                                            sx={{
                                                                                color: 'text.secondary',
                                                                                display: 'block',
                                                                                mt: 0.5,
                                                                                fontSize: '0.8rem',
                                                                                fontWeight: 400,
                                                                                lineHeight: 1.4,
                                                                            }}
                                                                        >
                                                                            {item.description}
                                                                        </Typography>
                                                                    )}
                                                                </Box>
                                                                <KeyboardArrowRight
                                                                    className="icon-arrow"
                                                                    sx={{
                                                                        fontSize: 20,
                                                                        color: '#8E44AD',
                                                                    }}
                                                                />
                                                            </Box>
                                                        </motion.div>
                                                    ))}
                                                </Box>
                                            </motion.div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                            {/* Featured Image Section */}
                            {featuredImage && (
                                <Grid item xs={12} md={4} sx={{ position: 'relative' }}>
                                    <motion.div
                                        initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
                                        animate={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
                                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                        style={{ height: '100%', width: '100%' }}
                                    >
                                        <Box
                                            sx={{
                                                height: '100%',
                                                minHeight: 320,
                                                position: 'relative',
                                                backgroundImage: `url(${featuredImage.src})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        >
                                            {/* Purple Overlay */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    background: 'linear-gradient(to top, rgba(44, 14, 69, 0.8) 0%, rgba(142, 68, 173, 0.2) 100%)',
                                                    mixBlendMode: 'multiply'
                                                }}
                                            />

                                            {featuredImage.caption && (
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        left: 0,
                                                        right: 0,
                                                        p: 4,
                                                        zIndex: 2,
                                                    }}
                                                >
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.4 }}
                                                    >
                                                        <Typography
                                                            variant="h5"
                                                            fontWeight={700}
                                                            color="white"
                                                            sx={{
                                                                textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                                                mb: 1
                                                            }}
                                                        >
                                                            {featuredImage.caption}
                                                        </Typography>
                                                        <Typography
                                                            variant="button"
                                                            sx={{
                                                                color: 'white',
                                                                fontWeight: 600,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 1,
                                                                opacity: 0.9,
                                                                fontSize: '0.85rem'
                                                            }}
                                                        >
                                                            Learn More <KeyboardArrowRight fontSize="small" />
                                                        </Typography>
                                                    </motion.div>
                                                </Box>
                                            )}
                                        </Box>
                                    </motion.div>
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
