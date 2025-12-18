import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import logo from '../assets/logo.png';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: t('Nav.home'), icon: '🏠' },
        { path: '/about', label: t('Nav.about'), icon: '💡' },
        { path: '/courses', label: t('Nav.courses'), icon: '📚' },
        { path: '/achievements', label: t('Nav.achievements'), icon: '🏆' },
        { path: '/contacts', label: t('Nav.contacts'), icon: '📞' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">

                    {/* Logo + Brand Name */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <img
                                src={logo}
                                alt="Академ Кидс"
                                className="relative w-14 h-14 object-contain transform group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                                А.а.л.а.м Kids
                            </span>
                            <div className="text-xs text-gray-500 font-medium w-44">{t('Nav.aboutHeader')}</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                                    isActive(link.path)
                                        ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30'
                                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                                }`}
                            >
                                <span className="flex items-center gap-2">
                                    <span className={`transition-transform duration-300 ${isActive(link.path) ? '' : 'group-hover:scale-125'}`}>
                                        {link.icon}
                                    </span>
                                    {link.label}
                                </span>
                                {!isActive(link.path) && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {/* CTA Button - Desktop */}
                        <a
                            href="tel:+996505709670"
                            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          {t('Nav.call')}
                        </a>

                        {/* Language Switcher */}
                        <LanguageSwitcher />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-purple-100 transition-colors"
                        >
                            <div className="flex flex-col gap-1.5">
                                <span className={`w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <nav className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    isActive(link.path)
                                        ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
                                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                                }`}
                            >
                                <span className="text-xl">{link.icon}</span>
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="tel:+996505709670"
                            className="flex items-center justify-center gap-2 mt-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-xl font-bold shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Позвонить нам
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}