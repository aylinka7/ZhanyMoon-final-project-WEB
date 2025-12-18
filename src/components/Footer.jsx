import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import insta from '../assets/instagram.png';
import whats from '../assets/whatsapp.png';

export default function Footer() {
    const { t } = useTranslation();

    const socialLinks = [
        { name: 'Instagram', icon: insta, url: 'https://www.instagram.com/aalam_kids?igsh=MW1xaTQyNzNzM29oaQ==', color: 'from-pink-500 to-purple-600' },
        { name: 'WhatsApp', icon: whats, url: 'https://wa.me/996999123456', color: 'from-green-500 to-emerald-600' },
        // { name: 'Telegram', icon: '✈️', url: '#', color: 'from-blue-400 to-blue-600' },
        // { name: 'YouTube', icon: '🎬', url: '#', color: 'from-red-500 to-red-700' },
    ];

    const quickLinks = [
        { label: t('Nav.home'), path: '/' },
        { label: t('Nav.about'), path: '/about' },
        { label: t('Nav.courses'), path: '/courses' },
        { label: t('Nav.achievements'), path: '/achievements' },
        { label: t('Nav.contacts'), path: '/contacts' },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="Академ Кидс" className="w-16 h-16 object-contain" />
                            <div>
                                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                                    А.а.л.а.м Kids
                                </span>
                                <div className="text-xs text-gray-400">{t('Nav.aboutHeader')}</div>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          {t('Nav.description')}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className={`w-10 h-10 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-lg shadow-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300`}
                                    title={social.name}
                                >
                                  <img src={social.icon} alt=""/>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">🔗</span>
                          {t('Nav.navigation')}
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors duration-300"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:w-3 transition-all duration-300"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">📍</span>
                          {t('Contacts.title')}
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-xl mt-0.5">🏢</span>
                                <div>
                                    <div className="text-sm text-gray-400">{t('Contacts.info.addressTitle')}</div>
                                    <div className="text-white">{t('Contacts.address') || 'г. Бишкек, ул. Токтогула 123'}</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl mt-0.5">📱</span>
                                <div>
                                    <div className="text-sm text-gray-400">{t('Contacts.info.phoneTitle')}</div>
                                    <a href="tel:+996505709670" className="text-white hover:text-purple-400 transition-colors">
                                      +996 505 709 670
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-xl mt-0.5">⏰</span>
                                <div>
                                    <div className="text-sm text-gray-400">{t('Contacts.hours.title')}</div>
                                    <div className="text-white">{t('Footer.hoursValue')}</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    {/*<div>*/}
                    {/*    <h4 className="text-lg font-bold mb-6 flex items-center gap-2">*/}
                    {/*        <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">✉️</span>*/}
                    {/*        Подписка*/}
                    {/*    </h4>*/}
                    {/*    <p className="text-gray-400 text-sm mb-4">*/}
                    {/*        Получайте новости о курсах и акциях*/}
                    {/*    </p>*/}
                    {/*    <form className="space-y-3">*/}
                    {/*        <input*/}
                    {/*            type="email"*/}
                    {/*            placeholder="Ваш email"*/}
                    {/*            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"*/}
                    {/*        />*/}
                    {/*        <button*/}
                    {/*            type="submit"*/}
                    {/*            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"*/}
                    {/*        >*/}
                    {/*            Подписаться 🚀*/}
                    {/*        </button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © 2025 <span className="text-purple-400 font-semibold">А.а.л.а.м Kids</span> — {t('Footer.copyright')}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <a href="#" className="hover:text-white transition-colors">{t('Footer.privacy')}</a>
                            <a href="#" className="hover:text-white transition-colors">{t('Footer.terms')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}