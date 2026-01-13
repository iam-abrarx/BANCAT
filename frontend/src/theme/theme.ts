import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Brand Colors
const colors = {
    primary: {
        main: '#6A1B9A', // Deep Purple - Brand Primary
        light: '#914AAF',
        dark: '#4A148C',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#f5aa21', // Amber - Brand Action
        light: '#f7bb4d',
        dark: '#e09a1a',
        contrastText: '#2c0e45',
    },
    background: {
        default: '#F5F5F5',
        paper: '#FFFFFF',
    },
    text: {
        primary: '#212121',
        secondary: '#757575',
    },
};

// Create base theme
let theme = createTheme({
    palette: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        text: colors.text,
    },
    typography: {
        fontFamily: [
            'Poppins',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h3: {
            fontWeight: 600,
        },
        button: {
            textTransform: 'none', // Keep natural casing
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '8px 24px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    },
                },
                containedPrimary: {
                    background: `linear-gradient(45deg, ${colors.primary.main} 30%, ${colors.primary.light} 90%)`,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.1)',
                    },
                },
            },
        },
    },
});

// Add responsive font sizes
theme = responsiveFontSizes(theme);

export default theme;
