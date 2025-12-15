import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="flex gap-3">
            <button onClick={() => changeLang('ru')} className={`px-4 py-2 rounded-lg font-bold ${i18n.language === 'ru' ? 'bg-[#004aad] text-white' : 'bg-gray-200'}`}>РУС</button>
            <button onClick={() => changeLang('ky')} className={`px-4 py-2 rounded-lg font-bold ${i18n.language === 'ky' ? 'bg-[#004aad] text-white' : 'bg-gray-200'}`}>КЫР</button>
            <button onClick={() => changeLang('en')} className={`px-4 py-2 rounded-lg font-bold ${i18n.language === 'en' ? 'bg-[#004aad] text-white' : 'bg-gray-200'}`}>ENG</button>
        </div>
    );
}