import { AppBar, Box, Button, Container, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon, KeyboardArrowDown, Search } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LanguageToggle } from '../common/LanguageToggle';
import { MobileDrawer } from './MobileDrawer';
import { MegaMenu } from './MegaMenu';
import { DropdownMenu } from './DropdownMenu';
import { menuConfig } from './menuConfig';
import { TopBar } from './TopBar';

export const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const { user, logout } = useAuth();
    const location = useLocation();

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [menuAnchors, setMenuAnchors] = useState<Record<string, HTMLElement | null>>({});
    const [scrolled, setScrolled] = useState(false);
    const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
    };

    const handleMenuOpen = (menuId: string, event: React.MouseEvent<HTMLElement>) => {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        setMenuAnchors(prev => ({ ...prev, [menuId]: event.currentTarget }));
        setActiveMenu(menuId);
    };

    const handleMenuClose = () => {
        closeTimerRef.current = setTimeout(() => setActiveMenu(null), 100);
    };

    const handleMenuEnter = () => {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };

    return (
        <>
            {!isMobile && <TopBar />}
            <AppBar
                position="sticky"
                elevation={scrolled ? 4 : 0}
                sx={{
                    bgcolor: scrolled ? '#582d82' : '#8E44AD',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    top: 0,
                    zIndex: 1100,
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, lg: 60 } }}>
                        <Box sx={{ flexGrow: 1 }} />

                        {/* Desktop Navigation */}
                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', mr: 2 }}>
                                {menuConfig.filter(item => item.type !== 'cta').map(item => {
                                    const isActive = activeMenu === item.id || (item.id === 'home' && location.pathname === '/');

                                    if (item.type === 'link') {
                                        return (
                                            <Button
                                                key={item.id}
                                                component={RouterLink}
                                                to={item.path!}
                                                sx={{
                                                    color: 'white',
                                                    textTransform: 'none',
                                                    fontWeight: isActive ? 800 : 600,
                                                    fontSize: '0.9rem',
                                                    px: 2,
                                                    fontFamily: 'Montserrat',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                                        color: '#FFC107'
                                                    }
                                                }}
                                            >
                                                {item.label}
                                            </Button>
                                        );
                                    }

                                    return (
                                        <Box
                                            key={item.id}
                                            onMouseEnter={(e) => handleMenuOpen(item.id, e)}
                                            onMouseLeave={handleMenuClose}
                                            sx={{ position: 'relative' }}
                                        >
                                            <Button
                                                sx={{
                                                    color: 'white',
                                                    textTransform: 'none',
                                                    fontWeight: isActive ? 800 : 600,
                                                    fontSize: '0.9rem',
                                                    px: 2,
                                                    fontFamily: 'Montserrat',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                                                        color: '#FFC107'
                                                    }
                                                }}
                                                endIcon={<KeyboardArrowDown sx={{
                                                    transform: activeMenu === item.id ? 'rotate(180deg)' : 'none',
                                                    transition: 'transform 0.2s',
                                                    fontSize: 18
                                                }} />}
                                            >
                                                {item.label}
                                            </Button>

                                            {item.type === 'dropdown' && item.items && (
                                                <DropdownMenu
                                                    items={item.items}
                                                    anchorEl={menuAnchors[item.id]}
                                                    open={activeMenu === item.id}
                                                    onClose={handleMenuClose}
                                                    onMouseEnter={handleMenuEnter}
                                                    onMouseLeave={handleMenuClose}
                                                />
                                            )}

                                            {item.type === 'mega' && item.sections && (
                                                <MegaMenu
                                                    sections={item.sections}
                                                    anchorEl={menuAnchors[item.id]}
                                                    open={activeMenu === item.id}
                                                    onClose={handleMenuClose}
                                                    onMouseEnter={handleMenuEnter}
                                                    onMouseLeave={handleMenuClose}
                                                    featuredImage={item.featuredImage}
                                                />
                                            )}
                                        </Box>
                                    );
                                })}
                            </Box>
                        )}

                        {/* Right Side Actions */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                            {/* Search Pill */}
                            {!isMobile && (
                                <Box sx={{
                                    bgcolor: 'rgba(255, 255, 255, 0.12)',
                                    borderRadius: '50px',
                                    px: 2,
                                    py: 0.6,
                                    display: 'flex',
                                    alignItems: 'center',
                                    transition: 'all 0.2s',
                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                                        borderColor: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    '&:focus-within': {
                                        bgcolor: 'white',
                                        '& input': { color: '#2c0e45' },
                                        '& .search-icon': { color: '#8E44AD' }
                                    }
                                }}>
                                    <input
                                        placeholder="Search..."
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: 'white',
                                            outline: 'none',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            width: '140px',
                                            transition: 'color 0.2s'
                                        }}
                                    />
                                    <Search className="search-icon" sx={{ color: 'white', fontSize: 20, cursor: 'pointer', transition: 'color 0.2s' }} />
                                </Box>
                            )}

                            {/* Auth & Lang */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {user ? (
                                    <Button
                                        onClick={handleLogout}
                                        sx={{ color: 'white', textTransform: 'none', fontWeight: 700, fontSize: '0.85rem' }}
                                    >
                                        Logout
                                    </Button>
                                ) : (
                                    <Button
                                        component={RouterLink}
                                        to="/login"
                                        sx={{
                                            color: 'white',
                                            textTransform: 'none',
                                            fontWeight: 700,
                                            fontSize: '0.85rem',
                                            fontFamily: 'Montserrat',
                                            '&:hover': { color: '#FFC107' }
                                        }}
                                    >
                                        Login
                                    </Button>
                                )}
                                <Box component="span" sx={{ color: 'rgba(255, 255, 255, 0.3)', fontWeight: 300 }}>|</Box>
                                <LanguageToggle sx={{ color: 'white' }} />
                            </Box>

                            {/* Mobile Toggle */}
                            {isMobile && (
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                    onClick={() => setDrawerOpen(true)}
                                    sx={{ color: 'white' }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </>
    );
};
