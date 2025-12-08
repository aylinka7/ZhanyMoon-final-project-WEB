import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

export default function About() {
    const { t } = useTranslation();

    const values = [
        { icon: '🎯', title: 'Индивидуальный подход', desc: 'Учитываем особенности каждого ребенка' },
        { icon: '🎮', title: 'Игровое обучение', desc: 'Учимся через игру и творчество' },
        { icon: '👨‍🏫', title: 'Опытные педагоги', desc: 'Профессионалы с любовью к детям' },
        { icon: '🏆', title: 'Результаты', desc: '150+ наград и достижений' },
    ];

    const team = [
        { name: 'Анна Петрова', role: 'Директор', emoji: '👩‍💼' },
        { name: 'Мария Иванова', role: 'Педагог творчества', emoji: '👩‍🎨' },
        { name: 'Алексей Сидоров', role: 'Педагог робототехники', emoji: '👨‍🔬' },
        { name: 'Елена Козлова', role: 'Педагог музыки', emoji: '👩‍🎤' },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="inline-block text-6xl mb-6 animate-bounce">💡</span>
                        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-white">
                                {t('About.title')}
                            </span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Место, где каждый ребенок раскрывает свой потенциал через творчество, игру и радость познания
                        </p>
                    </div>
                </div>

                {/* Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
                    </svg>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        {/* Image */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[3rem] transform rotate-3 opacity-20 blur-sm"></div>
                            <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl">
                                <img
                                    src={logo}
                                    alt="Академ Кидс"
                                    className="w-full rounded-[2rem] object-contain"
                                />
                                {/* Floating Badge */}
                                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-2xl shadow-xl transform rotate-6">
                                    <span className="text-2xl mr-2">🎉</span>
                                    <span className="font-bold">С 2018 года</span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                                📖 Наша история
                            </span>
                            <h2 className="text-4xl font-bold text-gray-800">
                                Создаем будущее вместе с детьми
                            </h2>

                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                <p className="flex items-start gap-3">
                                    <span className="text-2xl mt-1">✨</span>
                                    {t('About.text1')}
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-2xl mt-1">🌟</span>
                                    {t('About.text2')}
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-2xl mt-1">💫</span>
                                    {t('About.text3')}
                                </p>
                            </div>

                            {/* Motto */}
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
                                <p className="text-2xl font-bold flex items-center gap-3">
                                    <span className="text-3xl">💬</span>
                                    {t('About.motto')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            💎 Наши ценности
                        </span>
                        <h2 className="text-4xl font-bold text-gray-800">
                            Почему выбирают нас
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-8 rounded-3xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                            >
                                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            👨‍👩‍👧‍👦 Наша команда
                        </span>
                        <h2 className="text-4xl font-bold text-gray-800">
                            Познакомьтесь с нашими педагогами
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {member.emoji}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-purple-600 font-medium">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
                        {[
                            { number: '7+', label: 'Лет опыта', icon: '📅' },
                            { number: '500+', label: 'Выпускников', icon: '🎓' },
                            { number: '15+', label: 'Курсов', icon: '📚' },
                            { number: '150+', label: 'Наград', icon: '🏆' },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
                                <span className="text-4xl mb-4 block">{stat.icon}</span>
                                <div className="text-4xl lg:text-5xl font-extrabold mb-2">{stat.number}</div>
                                <div className="text-white/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}