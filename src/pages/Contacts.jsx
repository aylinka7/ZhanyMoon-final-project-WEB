import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Contacts() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: '📍',
            title: t('Contacts.info.addressTitle'),
            value: t('Contacts.address') || 'с. Арашан, ул. Ж. Акматова, 66, Дом Культуры, 2 этаж',
            color: 'from-purple-500 to-indigo-600'
        },
        {
            icon: '📱',
            title: t('Contacts.info.phoneTitle'),
            value: '+996 505 709 670',
            link: 'tel:+996505709670',
            color: 'from-green-500 to-emerald-600'
        },
        {
            icon: '💬',
            title: t('Contacts.info.whatsappTitle'),
            value: '+996 505 709 670',
            link: 'https://wa.me/996505709670',
            color: 'from-green-400 to-green-600'
        },
        {
            icon: '📧',
            title: t('Contacts.info.emailTitle'),
            value: 'info@academkids.kg',
            link: 'mailto:info@academkids.kg',
            color: 'from-blue-500 to-cyan-600'
        },
    ];

    const workingHours = [
        { day: t('Contacts.hours.weekdays'), hours: '09:00 - 15:00' },
        // { day: t('Contacts.hours.saturday'), hours: '10:00 - 17:00' },
        // { day: t('Contacts.hours.sunday'), hours: t('Contacts.hours.dayOff') },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', phone: '', message: '' });
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block text-6xl mb-6 animate-bounce">📞</span>
                    <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-white">
                            {t('Contacts.title')}
                        </span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        {t('Contacts.description')}
                    </p>
                </div>

                {/* Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
                    </svg>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-gray-500 text-sm font-medium mb-1">{info.title}</h3>
                                {info.link ? (
                                    <a
                                        href={info.link}
                                        className="text-lg font-bold text-gray-800 hover:text-purple-600 transition-colors"
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-lg font-bold text-gray-800">{info.value}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column - Contact Form & Working Hours */}
                        <div className="space-y-8">
                            {/* Quick Contact Form */}
                            {/*<div className="bg-white rounded-3xl shadow-xl p-8">*/}
                            {/*    <div className="flex items-center gap-3 mb-6">*/}
                            {/*        <span className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">*/}
                            {/*            ✉️*/}
                            {/*        </span>*/}
                            {/*        <h3 className="text-2xl font-bold text-gray-800">{t('Contacts.quick.title')}</h3>*/}
                            {/*    </div>*/}

                            {/*    {submitted && (*/}
                            {/*        <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-2xl flex items-center gap-3">*/}
                            {/*            <span className="text-2xl">✅</span>*/}
                            {/*            <span className="font-medium">{t('Contacts.quick.success')}</span>*/}
                            {/*        </div>*/}
                            {/*    )}*/}

                            {/*    <form onSubmit={handleSubmit} className="space-y-4">*/}
                            {/*        <div className="relative group">*/}
                            {/*            <input*/}
                            {/*                type="text"*/}
                            {/*                placeholder={t('Contacts.quick.namePlaceholder')}*/}
                            {/*                value={formData.name}*/}
                            {/*                onChange={(e) => setFormData({...formData, name: e.target.value})}*/}
                            {/*                required*/}
                            {/*                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all"*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*        <div className="relative group">*/}
                            {/*            <input*/}
                            {/*                type="tel"*/}
                            {/*                placeholder={t('Contacts.quick.phonePlaceholder')}*/}
                            {/*                value={formData.phone}*/}
                            {/*                onChange={(e) => setFormData({...formData, phone: e.target.value})}*/}
                            {/*                required*/}
                            {/*                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all"*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*        <div className="relative group">*/}
                            {/*            <textarea*/}
                            {/*                placeholder={t('Contacts.quick.messagePlaceholder')}*/}
                            {/*                value={formData.message}*/}
                            {/*                onChange={(e) => setFormData({...formData, message: e.target.value})}*/}
                            {/*                rows={4}*/}
                            {/*                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all resize-none"*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*        <button*/}
                            {/*            type="submit"*/}
                            {/*            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-500/30 transform hover:scale-[1.02] transition-all duration-300"*/}
                            {/*        >*/}
                            {/*            {t('Contacts.quick.submit')} 🚀*/}
                            {/*        </button>*/}
                            {/*    </form>*/}
                            {/*</div>*/}

                            {/* Working Hours */}
                            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-xl p-8 text-white">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl">
                                        ⏰
                                    </span>
                                    <h3 className="text-2xl font-bold">{t('Contacts.hours.title')}</h3>
                                </div>

                                <div className="space-y-4">
                                    {workingHours.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4"
                                        >
                                            <span className="font-medium">{item.day}</span>
                                            <span className={`font-bold ${item.hours === t('Contacts.hours.dayOff') ? 'text-pink-300' : 'text-yellow-300'}`}>
                                                {item.hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                                    <p className="text-white/80 mb-4">Нужна срочная консультация?</p>
                                    <a
                                        href="https://wa.me/996505709670"
                                        className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <span>💬</span>
                                        {t('Contacts.hours.writeWhatsApp')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Map */}
                        <div className="space-y-8">
                            {/* Map */}
                            {/*<div className="bg-white rounded-3xl shadow-xl overflow-hidden">*/}
                            {/*    <div className="p-6 border-b border-gray-100">*/}
                            {/*        <div className="flex items-center gap-3">*/}
                            {/*            <span className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">*/}
                            {/*                🗺️*/}
                            {/*            </span>*/}
                            {/*            <div>*/}
                            {/*                <h3 className="text-xl font-bold text-gray-800">{t('Contacts.map.title')}</h3>*/}
                            {/*                <p className="text-gray-500 text-sm">{t('Contacts.address') || 'г. Бишкек, ул. Токтогула 123'}</p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <iframe*/}
                            {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.174953847265!2d74.62893731549794!3d42.85294170851395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d5c5b5b5b5%3A0x9a8b7c6d5e4f3a2b!2z0JDQsNC30LTQsNC90YbQtdC90LjRgtC4LCDQkdGA0LjQvdC40YfQtdC90YbQutCwINCj0LjQv9C40YfQtdGB0YHQutC40Lkg0L7RgdGC0L7Qsg!5e0!3m2!1sru!2skg!4v1733234567890!5m2!1sru!2skg"*/}
                            {/*        width="100%"*/}
                            {/*        height="350"*/}
                            {/*        className="border-0"*/}
                            {/*        allowFullScreen=""*/}
                            {/*        loading="lazy"*/}
                            {/*        referrerPolicy="no-referrer-when-downgrade"*/}
                            {/*    ></iframe>*/}
                            {/*    <div className="p-6">*/}
                            {/*        <a*/}
                            {/*            href="https://maps.google.com/?q=с.+Арашан,+ул.+Ж.+Акматова,+66,+Дом+Культуры,+2+этаж"*/}
                            {/*            target="_blank"*/}
                            {/*            rel="noopener noreferrer"*/}
                            {/*            className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 rounded-2xl transition-colors"*/}
                            {/*        >*/}
                            {/*            <span>📍</span>*/}
                            {/*            {t('Contacts.map.open')}*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/* Карта 2GIS */}
                            {/*<div className="bg-white rounded-3xl shadow-xl overflow-hidden">*/}
                            {/*    <div className="p-6 border-b border-gray-100">*/}
                            {/*        <div className="flex items-center gap-3">*/}
                            {/*            <span className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">*/}
                            {/*                Map*/}
                            {/*            </span>*/}
                            {/*            <div>*/}
                            {/*                <h3 className="text-xl font-bold text-gray-800">Мы находимся здесь</h3>*/}
                            {/*                <p className="text-gray-500 text-sm">*/}
                            {/*                    с. Арашан, ул. Ж. Акматова, 66, Дом Культуры, 2 этаж*/}
                            {/*                </p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}

                                {/*/!* 2GIS карта — точный адрес! *!/*/}
                                {/*<div className="relative w-full h-96">*/}
                                {/*    <div*/}
                                {/*        className="dg-widget-link"*/}
                                {/*        style={{ width: '100%', height: '100%' }}>*/}
                                {/*        <a*/}
                                {/*            href="https://2gis.kg/bishkek/firm/70000001062313835"*/}
                                {/*            target="_blank"*/}
                                {/*            rel="noopener noreferrer"*/}
                                {/*            style={{*/}
                                {/*                display: 'block',*/}
                                {/*                width: '100%',*/}
                                {/*                height: '100%',*/}
                                {/*                border: 0*/}
                                {/*            }}*/}
                                {/*        >*/}
                                {/*            <img*/}
                                {/*                src="https://2gis.kg/bishkek/geo/70030076126363025/74.642628,42.731177"*/}
                                {/*                alt="2GIS Карта"*/}
                                {/*                style={{ width: '100%', height: '100%', objectFit: 'cover' }}*/}
                                {/*            />*/}
                                {/*        </a>*/}
                                {/*    </div>*/}
                                {/*    <script*/}
                                {/*        charset="utf-8"*/}
                                {/*        src="https://widgets.2gis.com/js/DGWidgetLoader.js"*/}
                                {/*        async*/}
                                {/*    ></script>*/}
                                {/*    <script charset="utf-8" dangerouslySetInnerHTML={{ __html: `*/}
                                {/*        new DGWidgetLoader({*/}
                                {/*            "width": "100%", */}
                                {/*            "height": "100%", */}
                                {/*            "borderColor": "#a3a3a3", */}
                                {/*            "pos": {"lat": 42.8531, "lon": 74.6308, "zoom": 18}, */}
                                {/*            "opt": {"city": "bishkek"}, */}
                                {/*            "org": [{"id": "70000001062313835"}]*/}
                                {/*        });*/}
                                {/*    `}}></script>*/}
                                {/*</div>*/}

                            {/*    <div className="p-6">*/}
                            {/*        <a*/}
                            {/*            href="https://2gis.kg/bishkek/geo/70030076126363025/74.642628,42.731177"*/}
                            {/*            target="_blank"*/}
                            {/*            rel="noopener noreferrer"*/}
                            {/*            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg"*/}
                            {/*        >*/}
                            {/*            Открыть в 2GIS*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/* Quick Actions */}
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="tel:+996505709670"
                                    className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1"
                                >
                                    <span className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-300">📞</span>
                                    <span className="font-bold text-gray-800">{t('Contacts.quick.call')}</span>
                                </a>
                                <a
                                    href="https://wa.me/996505709670"
                                    className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1"
                                >
                                    <span className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-300">💬</span>
                                    <span className="font-bold text-gray-800">{t('Contacts.quick.whatsapp')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-6xl mb-6 block">🎉</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                        {t('Contacts.cta.title')}
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
                        {t('Contacts.cta.text')}
                    </p>
                    <a
                        href="https://wa.me/996505709670"
                        className="inline-flex items-center gap-3 bg-white text-orange-600 hover:bg-gray-100 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        <span className="text-2xl">📝</span>
                        {t('Contacts.cta.button')}
                    </a>
                </div>
            </section>
        </div>
    );
}