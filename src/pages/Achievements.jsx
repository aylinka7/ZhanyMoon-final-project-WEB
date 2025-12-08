import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Achievements() {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');

    const achievements = [
        { id: 1, title: 'Олимпиада по робототехнике', place: '🥇 1 место', year: '2024', category: 'robotics', image: null },
        { id: 2, title: 'Конкурс юных художников', place: '🥇 1 место', year: '2024', category: 'art', image: null },
        { id: 3, title: 'Математическая олимпиада', place: '🥈 2 место', year: '2024', category: 'math', image: null },
        { id: 4, title: 'Фестиваль творчества', place: '🥇 1 место', year: '2023', category: 'art', image: null },
        { id: 5, title: 'IT-Чемпионат', place: '🥉 3 место', year: '2023', category: 'robotics', image: null },
        { id: 6, title: 'Конкурс талантов', place: '🥇 1 место', year: '2023', category: 'other', image: null },
        { id: 7, title: 'Шахматный турнир', place: '🥇 1 место', year: '2024', category: 'math', image: null },
        { id: 8, title: 'Выставка детского творчества', place: '🏆 Гран-при', year: '2024', category: 'art', image: null },
        { id: 9, title: 'Научная конференция', place: '🥈 2 место', year: '2023', category: 'other', image: null },
        { id: 10, title: 'Робо-баттл', place: '🥇 1 место', year: '2024', category: 'robotics', image: null },
        { id: 11, title: 'Арт-фестиваль', place: '🥇 1 место', year: '2023', category: 'art', image: null },
        { id: 12, title: 'Олимпиада по логике', place: '🥇 1 место', year: '2024', category: 'math', image: null },
    ];

    const filters = [
        { key: 'all', label: 'Все', icon: '🎯' },
        { key: 'robotics', label: 'Робототехника', icon: '🤖' },
        { key: 'art', label: 'Творчество', icon: '🎨' },
        { key: 'math', label: 'Математика', icon: '🧮' },
        { key: 'other', label: 'Другое', icon: '⭐' },
    ];

    const filteredAchievements = activeFilter === 'all'
        ? achievements
        : achievements.filter(a => a.category === activeFilter);

    const stats = [
        { number: '150+', label: 'Наград', icon: '🏆', color: 'from-yellow-400 to-orange-500' },
        { number: '50+', label: 'Первых мест', icon: '🥇', color: 'from-yellow-300 to-yellow-500' },
        { number: '30+', label: 'Конкурсов', icon: '🎯', color: 'from-purple-400 to-pink-500' },
        { number: '7', label: 'Лет побед', icon: '📅', color: 'from-blue-400 to-indigo-500' },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 text-white overflow-hidden">
                {/* Animated Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 text-8xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>🏆</div>
                    <div className="absolute top-20 right-20 text-6xl opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>🥇</div>
                    <div className="absolute bottom-20 left-1/4 text-7xl opacity-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>⭐</div>
                    <div className="absolute bottom-10 right-1/3 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>🎖️</div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="inline-block text-7xl mb-6 animate-bounce">🏆</span>
                        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
                            {t('Achievements.title')}
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Гордимся каждым достижением наших талантливых учеников!
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

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-r ${stat.color} p-6 rounded-3xl text-white text-center shadow-xl transform hover:scale-105 transition-transform duration-300`}
                            >
                                <span className="text-4xl block mb-2">{stat.icon}</span>
                                <div className="text-4xl font-extrabold">{stat.number}</div>
                                <div className="text-white/90 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter & Achievements Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    activeFilter === filter.key
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                                        : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md'
                                }`}
                            >
                                <span>{filter.icon}</span>
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Achievements Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {filteredAchievements.map((achievement, index) => (
                            <div
                                key={achievement.id}
                                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {/* Image/Placeholder */}
                                <div className="relative h-48 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 flex items-center justify-center overflow-hidden">
                                    <div className="text-6xl group-hover:scale-125 transition-transform duration-500">
                                        {achievement.category === 'robotics' ? '🤖' :
                                            achievement.category === 'art' ? '🎨' :
                                                achievement.category === 'math' ? '🧮' : '⭐'}
                                    </div>

                                    {/* Year Badge */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-purple-600 shadow-lg">
                                        {achievement.year}
                                    </div>

                                    {/* Place Badge */}
                                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                        {achievement.place}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                                        {achievement.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All CTA */}
                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">И это только часть наших достижений!</p>
                        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300">
                            <span>🏆</span>
                            Все достижения
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonial/CTA Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-6xl mb-6 block">🌟</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                        Хотите, чтобы ваш ребенок стал победителем?
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        Запишите ребенка на пробное занятие и откройте его таланты вместе с нами!
                    </p>
                    <a
                        href="https://wa.me/996999123456"
                        className="inline-flex items-center gap-3 bg-white text-purple-600 hover:bg-gray-100 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        <span className="text-2xl">📝</span>
                        Записаться на пробное занятие
                    </a>
                </div>
            </section>
        </div>
    );
}