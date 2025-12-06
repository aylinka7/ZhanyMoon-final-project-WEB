import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Логотип + название */}
                    <Link to="/" className="flex items-center gap-4">
                        <img src={logo} alt="Академ Кидс" className="w-20 h-20 object-contain" />
                        <span className="text-3xl font-bold text-[#004aad]">Академ Кидс</span>
                    </Link>

                    {/* Навигация */}
                    <nav className="flex flex-wrap justify-center gap-8 text-lg font-medium">
                        <Link to="/" className="hover:text-[#67bc45] transition">{t('Nav.home')}</Link>
                        <Link to="/about" className="hover:text-[#67bc45] transition">{t('Nav.about')}</Link>
                        <Link to="/courses" className="hover:text-[#67bc45] transition">{t('Nav.courses')}</Link>
                        <Link to="/achievements" className="hover:text-[#67bc45] transition">{t('Nav.achievements')}</Link>
                        <Link to="/contacts" className="hover:text-[#67bc45] transition">{t('Nav.contacts')}</Link>
                    </nav>

                    {/* Переключатель языка */}
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}