import { AppBar, Button, Container, Box, IconButton, useTheme, useMediaQuery, Collapse } from '@mui/material';
import { Menu as MenuIcon, KeyboardArrowDown } from '@mui/icons-material';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { LanguageToggle } from '../common/LanguageToggle';
import { MobileDrawer } from './MobileDrawer';
import { MegaMenu } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import { useState, useEffect, useRef } from 'react';
import { menuConfig } from './menuConfig';
import { TopBar } from './TopBar';

export const Navbar = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Scroll state for hiding/showing TopBar
    const [showTopBar, setShowTopBar] = useState(true);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show TopBar ONLY if at top
            if (currentScrollY < 50) {
                setShowTopBar(true);
            } else {
                setShowTopBar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Menu state
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [menuAnchors, setMenuAnchors] = useState<Record<string, HTMLElement | null>>({});
    const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleMenuOpen = (menuId: string, event: React.MouseEvent<HTMLElement>) => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        setMenuAnchors(prev => ({ ...prev, [menuId]: event.currentTarget }));
        setActiveMenu(menuId);
    };

    const handleMenuClose = () => {
        closeTimerRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 150);
    };

    const handleMouseEnter = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    };

    return (
        <>
            {/* Fixed Header Overlay */}
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100,
                    transition: 'all 0.3s ease-in-out'
                }}
            >
                {/* Top Bar - Hides on scroll */}
                {!isMobile && (
                    <Collapse in={showTopBar} timeout={300}>
                        <TopBar />
                    </Collapse>
                )}

                <AppBar
                    position="sticky"
                    color="transparent"
                    elevation={0}
                    sx={{
                        bgcolor: '#8E44AD', // Static color
                        backdropFilter: 'none',
                        transition: 'background-color 0.4s ease-in-out', // Smooth color transition
                        top: 0,
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                >
                    <Container maxWidth={false} sx={{ maxWidth: '100% !important', px: 4 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                py: 1
                            }}
                        >
                            {/* Logo Removed from here as per new design (it's in TopBar) */}

                            {/* Desktop Nav */}
                            {!isMobile && (
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flex: 1, justifyContent: 'flex-start', ml: 55 }}>
                                    {menuConfig.filter(item => item.type !== 'cta').map(item => {
                                        const isActive = activeMenu === item.id || (item.id === 'home' && location.pathname === '/');

                                        if (item.type === 'link') {
                                            return (
                                                <Button
                                                    key={item.id}
                                                    component={RouterLink}
                                                    to={item.path!}
                                                    sx={{
                                                        fontWeight: isActive ? 700 : 500,
                                                        color: item.label === 'Home' ? '#FFC107' : 'white',
                                                        textTransform: 'none',
                                                        px: 2,
                                                        minWidth: 'auto',
                                                        '&:hover': {
                                                            color: '#FFC107',
                                                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                                                        },
                                                    }}
                                                >
                                                    {item.label}
                                                </Button>
                                            );
                                        }

                                        return (
                                            <Box
                                                key={item.id}
                                                onMouseEnter={(e) => {
                                                    handleMouseEnter();
                                                    handleMenuOpen(item.id, e);
                                                }}
                                                onMouseLeave={handleMenuClose}
                                                sx={{ position: 'relative' }}
                                            >
                                                <Button
                                                    onClick={(e) => handleMenuOpen(item.id, e)}
                                                    sx={{
                                                        fontWeight: isActive ? 700 : 500,
                                                        color: isActive ? '#FFC107' : 'white',
                                                        textTransform: 'none',
                                                        px: 2,
                                                        minWidth: 'auto',
                                                        '&:hover': {
                                                            color: '#FFC107',
                                                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                                                        },
                                                    }}
                                                    endIcon={<KeyboardArrowDown sx={{ color: 'white' }} />}
                                                >
                                                    {item.label}
                                                </Button>

                                                {item.type === 'dropdown' && item.items && (
                                                    <DropdownMenu
                                                        items={item.items}
                                                        anchorEl={menuAnchors[item.id] || null}
                                                        open={isActive && !!menuAnchors[item.id]}
                                                        onClose={handleMenuClose}
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseLeave={handleMenuClose}
                                                    />
                                                )}

                                                {item.type === 'mega' && item.sections && (
                                                    <MegaMenu
                                                        sections={item.sections}
                                                        anchorEl={menuAnchors[item.id] || null}
                                                        open={isActive && !!menuAnchors[item.id]}
                                                        onClose={handleMenuClose}
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseLeave={handleMenuClose}
                                                        featuredImage={item.featuredImage}
                                                    />
                                                )}
                                            </Box>
                                        );
                                    })}
                                </Box>
                            )}

                            {/* Right side */}
                            {!isMobile && (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    {/* Search Bar - White Pill */}
                                    <Box sx={{ bgcolor: 'white', borderRadius: '20px', px: 2, py: 0.5, display: 'flex', alignItems: 'center', maxHeight: 36 }}>
                                        {/* Override SearchBar styles or minimal version */}
                                        {/* Simplified Search Input for visual match */}
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            style={{
                                                border: 'none',
                                                outline: 'none',
                                                background: 'transparent',
                                                fontSize: '14px',
                                                width: '120px'
                                            }}
                                        />
                                        {/* Search Icon */}
                                        <svg width="16" height="16" fill="gray" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </Box>

                                    {/* Login / Lang */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'white', fontSize: '14px', fontWeight: 600 }}>
                                        {user ? (
                                            <Button
                                                onClick={handleLogout}
                                                sx={{ color: 'white', fontWeight: 600, textTransform: 'none' }}
                                            >
                                                {t('nav.logout', 'Logout')}
                                            </Button>
                                        ) : (
                                            <RouterLink to="/login" style={{ color: 'white', textDecoration: 'none' }}>
                                                Login
                                            </RouterLink>
                                        )}
                                        <span>|</span>
                                        <LanguageToggle sx={{ color: 'white' }} />
                                        {/* Note: LanguageToggle might need prop to enforce white text */}
                                    </Box>

                                </Box>
                            )}

                            {/* Mobile Menu Icon */}
                            {isMobile && (
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={() => setDrawerOpen(true)}
                                    sx={{ color: 'white' }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}
                        </Box>
                    </Container>
                </AppBar>
            </Box>

            <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </>
    );
};
