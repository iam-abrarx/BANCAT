import { Box, Paper, Typography, Fade, Popper, alpha } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { KeyboardArrowRight } from '@mui/icons-material';
import type { MenuItem } from './menuConfig';

interface DropdownMenuProps {
    items: MenuItem[];
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
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

export const DropdownMenu = ({
    items,
    anchorEl,
    open,
    onClose,
}: DropdownMenuProps) => {
    // Defense against top-left rendering glitch
    if (open && !anchorEl) return null;

    return (
        <Popper
            open={open}
            anchorEl={anchorEl}
            placement="bottom-start"
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
                            minWidth: 220,
                            borderRadius: '12px',
                            bgcolor: 'white',
                            overflow: 'hidden',
                            border: '1px solid rgba(0,0,0,0.08)',
                            p: 1
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            {items.map((item, index) => (
                                <Box
                                    key={index}
                                    component={RouterLink}
                                    to={item.path}
                                    onClick={onClose}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        p: 1.2,
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        color: '#2c0e45',
                                        transition: 'all 0.2s',
                                        '&:hover': {
                                            bgcolor: alpha('#8E44AD', 0.05),
                                            transform: 'translateX(4px)',
                                            color: '#8E44AD',
                                            '& .arrow': { opacity: 1, transform: 'translateX(0)' }
                                        }
                                    }}
                                >
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                        {item.label}
                                    </Typography>
                                    <KeyboardArrowRight className="arrow" sx={{ fontSize: 18, opacity: 0, transform: 'translateX(-5px)', transition: 'all 0.2s' }} />
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Fade>
            )}
        </Popper>
    );
};

export default DropdownMenu;
