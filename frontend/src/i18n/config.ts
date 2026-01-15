import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import bn from './locales/bn.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            bn: { translation: bn },
        },
        fallbackLng: 'bn', // Default to Bangla
        interpolation: {
            escapeValue: false, // React already safe from XSS
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

i18n.on('languageChanged', (lng) => {
    if (lng === 'bn') {
        document.body.classList.add('font-bangla');
    } else {
        document.body.classList.remove('font-bangla');
    }
});

// Initialize class based on current language
if (i18n.language === 'bn') {
    document.body.classList.add('font-bangla');
}

export default i18n;
