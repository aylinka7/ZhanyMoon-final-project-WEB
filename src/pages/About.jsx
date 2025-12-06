import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-5xl font-bold text-center mb-16 text-[#004aad]">{t('About.title')}</h1>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <img src={logo} alt="Академ Кидс" className="rounded-3xl shadow-2xl mx-auto w-full max-w-md" />
                    <div className="space-y-6 text-lg">
                        <p>{t('About.text1')}</p>
                        <p>{t('About.text2')}</p>
                        <p>{t('About.text3')}</p>
                        <p className="text-2xl font-bold text-[#67bc45]">
                            {t('About.motto')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}