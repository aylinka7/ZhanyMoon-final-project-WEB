import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { getCourses } from '../services/api';
import i18n from 'i18next';

export default function Courses() {
    const { t } = useTranslation();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // const [activeFilter, setActiveFilter] = useState('all');
    const [visibleCourses, setVisibleCourses] = useState(6);

    const IMAGE_BASE = 'https://zhany-moon.onrender.com';

    useEffect(() => {
        getCourses()
            .then(setCourses)
            .catch(() => setError(t('Courses.loadError')))
            .finally(() => setLoading(false));
    }, [t]);

    const getLocalizedCourseName = (course) => {
        const lang = i18n.language;
        if (lang === 'ky' && course.nameKy) return course.nameKy;
        if (lang === 'en' && course.nameEn) return course.nameEn;
        return course.nameRu || 'Без названия';
    };

    const getLocalizedDescription = (course) => {
        const lang = i18n.language;
        if (lang === 'ky' && course.descriptionKy) return course.descriptionKy;
        if (lang === 'en' && course.descriptionEn) return course.descriptionEn;
        return course.descriptionRu || 'Описание скоро появится';
    };

    const getWhatsAppLink = (course) => {
        const courseName = getLocalizedCourseName(course);
        const message = encodeURIComponent(`${t('Form.enrollMessage')}: ${courseName} (${course.age})`);
        return `https://wa.me/996999123456?text=${message}`;
    };

    const getCourseIcon = (index) => {
        const icons = ['💻', '🎨', '🧮', '🤖', '🎵', '📐', '🔬', '🎭', '✏️', '🧩'];
        return icons[index % icons.length];
    };

    const getCourseColor = (index) => {
        const colors = [
            'from-purple-500 to-indigo-600',
            'from-pink-500 to-rose-600',
            'from-blue-500 to-cyan-600',
            'from-green-500 to-emerald-600',
            'from-orange-500 to-amber-600',
            'from-violet-500 to-purple-600',
        ];
        return colors[index % colors.length];
    };

    // Loading State
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                            {t('Courses.title')}
                        </h1>
                    </div>

                    {/* Loading Animation */}
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="relative">
                            <div className="w-20 h-20 border-4 border-purple-200 rounded-full animate-spin border-t-purple-600"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl animate-bounce">📚</span>
                            </div>
                        </div>
                        <p className="mt-6 text-xl text-gray-600 font-medium">{t('Courses.loading')}</p>
                    </div>
                </div>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
                            {t('Courses.title')}
                        </h1>

                        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-10">
                            <span className="text-6xl block mb-6">😔</span>
                            <p className="text-xl text-red-500 font-medium mb-6">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                🔄 Попробовать снова
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/3 text-8xl opacity-10 animate-bounce" style={{ animationDuration: '3s' }}>📚</div>
                    <div className="absolute top-20 right-1/4 text-6xl opacity-10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>🎨</div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block text-6xl mb-6 animate-bounce">📚</span>
                    <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-white">
                            {t('Courses.title')}
                        </span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                        {t('Courses.heroSubtitle')}
                    </p>

                    {/* Course Count Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                        <span className="text-2xl">🎯</span>
                        <span className="text-lg font-semibold">
                            {courses.length} {t('Courses.available') || 'курсов доступно'}
                        </span>
                    </div>
                </div>

                {/* Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
                    </svg>
                </div>
            </section>

            {/* Courses Grid Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">

                    {courses.length === 0 ? (
                        /* Empty State */
                        <div className="text-center py-20">
                            <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-12">
                                <span className="text-8xl block mb-6">📭</span>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('Courses.emptyTitle')}</h3>
                                <p className="text-gray-600 mb-8">{t('Courses.emptyText')}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                                >
                                    🔄 {t('Courses.reload')}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Courses Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {courses.slice(0, visibleCourses).map((course, index) => (
                                    <div
                                        key={course.id}
                                        className="group bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3"
                                    >
                                        {/* Image Section */}
                                        <div className="relative h-56 overflow-hidden">
                                            {course.imageUrl ? (
                                                <img
                                                    src={`${IMAGE_BASE}${course.imageUrl}`}
                                                    alt={getLocalizedCourseName(course)}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    // onLoad={() => console.log('Изображение загружено:', `${IMAGE_BASE}${course.imageUrl}`)}
                                                    // onError={() => console.log('Ошибка загрузки изображения:', `${IMAGE_BASE}${course.imageUrl}`)}
                                                />
                                            ) : (
                                                <div className={`w-full h-full bg-gradient-to-br ${getCourseColor(index)} flex items-center justify-center`}>
                                                    <span className="text-8xl text-white/30 group-hover:scale-125 transition-transform duration-500">
                                                        {getCourseIcon(index)}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Age Badge */}
                                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                                <span className="text-purple-600 font-bold flex items-center gap-1">
                                                    <span>👶</span> {course.age}
                                                </span>
                                            </div>

                                            {/* Course Icon Badge */}
                                            <div className={`absolute -bottom-7 left-6 w-14 h-14 bg-gradient-to-br ${getCourseColor(index)} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                                                <span className="text-2xl">{getCourseIcon(index)}</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 pt-10">
                                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 mb-3 line-clamp-2">
                                                {getLocalizedCourseName(course)}
                                            </h3>

                                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                                {getLocalizedDescription(course)}
                                            </p>

                                            {/* Price & Schedule */}
                                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                                                <div>
                                                    <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">
                                                        {course.price}
                                                    </span>
                                                    <span className="text-gray-500 text-sm ml-1">
                                                        {t('Courses.pricePerMonth') || '/ мес'}
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs text-gray-400 block">Расписание</span>
                                                    <span className="text-sm text-gray-600 font-medium">
                                                        {t('Courses.schedule') || 'Гибкое'}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <a
                                                href={getWhatsAppLink(course)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-green-500/30 transform hover:scale-[1.02] transition-all duration-300"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                                </svg>
                                                {t('Courses.enroll') || 'Записаться'}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {courses.length > visibleCourses && (
                                <div className="text-center mt-16">
                                    <button
                                        onClick={() => setVisibleCourses(prev => prev + 6)}
                                        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
                                    >
                                        <span>📚</span>
                                        {t('Courses.showAll') || 'Показать ещё'} ({courses.length - visibleCourses})
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-6xl mb-6 block">🎯</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                        Не нашли подходящий курс?
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        {t('Courses.ctaText')}
                    </p>
                    <a
                        href="https://wa.me/996999123456"
                        className="inline-flex items-center gap-3 bg-white text-purple-600 hover:bg-gray-100 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        <span className="text-2xl">💬</span>
                        {t('Courses.ctaButton')}
                    </a>
                </div>
            </section>
        </div>
    );
}
