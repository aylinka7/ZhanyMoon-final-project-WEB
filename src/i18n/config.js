import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './ru.json';
import ky from './ky.json';
import en from './en.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ru: { translation: ru },
            ky: { translation: ky },
            en: { translation: en }
        },
        fallbackLng: 'ru',
        interpolation: { escapeValue: false }
    });

export default i18n;