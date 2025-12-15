import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { getCourses, submitApplication } from "../services/api.js";
import { useEffect, useState } from "react";
import i18n from "i18next";

export default function Main() {
    const { t } = useTranslation();

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
        return course.descriptionRu || '';
    };

    const [courses, setCourses] = useState([]);
    const [coursesLoading, setCoursesLoading] = useState(true);
    const [formSubmitting, setFormSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        childName: '', childAge: '', parentName: '', phone: '', courseName: '', message: ''
    });
    const [success, setSuccess] = useState('');
    const [errors, setErrors] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        getCourses()
            .then(setCourses)
            .catch(() => setError('Не удалось загрузить курсы'))
            .finally(() => setCoursesLoading(false));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setErrors({});
        setFormSubmitting(true);

      try {
        await submitApplication(formData);
        setSuccess('Спасибо! Мы свяжемся с вами в ближайшее время');
        setFormData({ childName: '', childAge: '', parentName: '', phone: '', courseName: '', message: '' });
      } catch (err) {
        setError(err.message);
      } finally {
        setFormSubmitting(false);
      }
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section with Animated Background */}
            <section className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating Shapes */}
                    <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                    <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-pink-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}></div>

                    {/* Stars/Sparkles */}
                    <div className="absolute top-1/4 left-1/3 text-yellow-300 text-4xl animate-pulse">✨</div>
                    <div className="absolute top-1/2 right-1/4 text-yellow-300 text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
                    <div className="absolute bottom-1/3 left-1/5 text-yellow-300 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>🌟</div>
                </div>

                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
                        {/* Left Content */}
                        <div className="text-center lg:text-left space-y-8">
                            <div className="relative inline-block">
                                <img
                                    src={logo}
                                    alt={t('Hero.logoAlt')}
                                    className="w-72 lg:w-96 mx-auto lg:mx-0 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                                    🎉 NEW!
                                </div>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-white">
                                    {/*{t('Hero.title')}*/}
                                    А.а.л.а.м Kids
                                </span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-white/90 max-w-xl w-100">
                                {t('Hero.subtitle')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <a
                                    href="https://wa.me/996999123456"
                                    className="group relative bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 px-8 py-5 rounded-2xl text-lg font-bold shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                {t('Hero.wa')}
                            </a>
                                <a
                                    href="tel:+996999123456"
                                    className="bg-white/20 backdrop-blur-sm border-2 border-white/50 hover:bg-white hover:text-purple-600 px-8 py-5 rounded-2xl text-lg font-bold shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                {t('Hero.call')}
                            </a>
                        </div>
                    </div>

                        {/* Right Content - Benefits Card */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-[3rem] transform rotate-3 opacity-50 blur-sm"></div>
                            <div className="relative bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/20 shadow-2xl">
                                <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12">
                                    <span className="text-3xl">🚀</span>
                                </div>

                                <h3 className="text-3xl font-bold mb-8 pt-4">{t('Hero.why')}</h3>

                                <ul className="space-y-5">
                                    {[
                                        { icon: '🎯', text: t('Hero.benefit1') },
                                        { icon: '👨‍🏫', text: t('Hero.benefit2') },
                                        { icon: '🎮', text: t('Hero.benefit3') },
                                        { icon: '🏆', text: t('Hero.benefit4') },
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 transform hover:translate-x-2 transition-transform duration-300"
                                        >
                                            <span className="text-3xl">{item.icon}</span>
                                            <span className="text-lg">{item.text}</span>
                                        </li>
                                    ))}
                        </ul>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-yellow-300">500+</div>
                                        <div className="text-sm text-white/70">Учеников</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-green-300">15+</div>
                                        <div className="text-sm text-white/70">Курсов</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-pink-300">5⭐</div>
                                        <div className="text-sm text-white/70">Рейтинг</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
                    </svg>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-24 bg-gray-50 relative">
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 text-6xl opacity-10">🎨</div>
                <div className="absolute bottom-10 right-10 text-6xl opacity-10">📚</div>

                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                            🎓 Наши программы
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            {t('Courses.title')}
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                            Выберите идеальный курс для вашего ребенка и откройте мир возможностей
                        </p>
                    </div>

                    {coursesLoading && (
                        <div className="flex justify-center items-center py-20">
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-purple-200 rounded-full animate-spin border-t-purple-600"></div>
                                <span className="absolute inset-0 flex items-center justify-center text-2xl">🎯</span>
                            </div>
                        </div>
                    )}

                    {error && !coursesLoading && (
                        <div className="text-center py-10">
                            <div className="inline-block bg-red-100 text-red-600 px-8 py-4 rounded-2xl">
                                <span className="text-2xl mr-2">😔</span> {error}
                            </div>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.slice(0, 6).map((c, index) => (
                            <div
                                key={c.id}
                                className="group bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image Container */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={`http://localhost:8080${c.imageUrl}`}
                                        alt={getLocalizedCourseName(c)}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Age Badge */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                        <span className="text-purple-600 font-bold">{c.age}</span>
                                    </div>

                                    {/* Floating Icon */}
                                    <div className="absolute -bottom-6 left-6 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                                        <span className="text-2xl text-white">
                                            {index % 3 === 0 ? '💻' : index % 3 === 1 ? '🎨' : '🧮'}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 pt-10">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                                        {getLocalizedCourseName(c)}
                                    </h3>
                                    <p className="text-gray-500 mt-3 line-clamp-2">
                                        {getLocalizedDescription(c) || 'Увлекательный курс для развития навыков вашего ребенка'}
                                    </p>

                                    <Link
                                        to="/courses"
                                        className="inline-flex items-center gap-2 mt-6 text-purple-600 font-bold group-hover:text-pink-600 transition-colors duration-300"
                                    >
                                        {t('Courses.more')}
                                        <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-12">
                        <Link
                            to="/courses"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            Все курсы
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Enrollment Form Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.12),transparent_30%)]"></div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-20 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <span className="inline-block text-5xl mb-4">📝</span>
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-4">
                            {t('Contacts.enroll')}
                        </h2>
                        <p className="text-white/80 text-xl max-w-2xl mx-auto">
                            Заполните форму и мы свяжемся с вами в течение 30 минут
                        </p>
                    </div>

                    {/* Success Message */}
                    {success && (
                        <div className="max-w-2xl mx-auto mb-8 p-6 bg-green-500/20 backdrop-blur-sm border-2 border-green-400/50 text-white rounded-2xl flex items-center gap-4 animate-bounce-in">
                            <span className="text-4xl">🎉</span>
                            <span className="text-lg font-medium">{success}</span>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && !Object.keys(errors).length && (
                        <div className="max-w-2xl mx-auto mb-8 p-6 bg-red-500/20 backdrop-blur-sm border-2 border-red-400/50 text-white rounded-2xl flex items-center gap-4">
                            <span className="text-4xl">😔</span>
                            <span className="text-lg font-medium">{error}</span>
                        </div>
                    )}

                    {/* Form Card */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 border border-white/20 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Child Name */}
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                                        <div className="relative">
                                            <input
                                                required
                                                type="text"
                                                placeholder={t('Form.childNamePlaceholder')}
                                                value={formData.childName}
                                                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                                className="w-full px-6 py-5 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-purple-400/50 transition-all shadow-lg placeholder-gray-400"
                                            />
                                            <label className="absolute -top-3 left-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                                                👶 {t('Form.childName') || "Имя ребёнка"}
                                            </label>
                                        </div>
                                        {errors.childName && <p className="mt-2 text-red-300 text-sm">{errors.childName}</p>}
                                    </div>

                                    {/* Age */}
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                                        <div className="relative">
                                            <input
                                                required
                                                type="text"
                                                inputMode="numeric"
                                                placeholder={t('Form.agePlaceholder')}
                                                value={formData.childAge}
                                                onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                                                className="w-full px-6 py-5 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-purple-400/50 transition-all shadow-lg placeholder-gray-400"
                                            />
                                            <label className="absolute -top-3 left-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                                                🎂 {t('Form.childAge') || "Возраст"}
                                            </label>
                                        </div>
                                        {errors.childAge && <p className="mt-2 text-red-300 text-sm">{errors.childAge}</p>}
                                    </div>

                                    {/* Parent Name */}
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                                        <div className="relative">
                                            <input
                                                required
                                                type="text"
                                                placeholder={t('Form.parentNamePlaceholder')}
                                                value={formData.parentName}
                                                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                                className="w-full px-6 py-5 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-purple-400/50 transition-all shadow-lg placeholder-gray-400"
                                            />
                                            <label className="absolute -top-3 left-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                                                👨‍👩‍👧 {t('Form.parentName')}
                                            </label>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                                        <div className="relative">
                                            <input
                                                required
                                                type="tel"
                                                placeholder={t('Form.phonePlaceholder')}
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-6 py-5 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-purple-400/50 transition-all shadow-lg placeholder-gray-400"
                                            />
                                            <label className="absolute -top-3 left-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                                                📱 {t('Form.phone')}
                                            </label>
                                        </div>
                                        {errors.phone && <p className="mt-2 text-red-300 text-sm">{errors.phone}</p>}
                                    </div>

                                    {/* Course Select */}
                                    <div className="md:col-span-2 relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                                        <div className="relative">
                                            <select
                                                required
                                                value={formData.courseName}
                                                onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                                                className="w-full px-6 py-5 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-purple-400/50 transition-all shadow-lg appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>
                                                    {t('Form.selectCourse')}
                                                </option>
                                                {courses.map((course) => (
                                                    <option key={course.id} value={getLocalizedCourseName(course)}>
                                                        {getLocalizedCourseName(course)} ({course.age})
                                                    </option>
                                                ))}
                                            </select>
                                            <label className="absolute -top-3 left-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                                                📚 {t('Form.course')}
                                            </label>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                        {errors.courseName && <p className="mt-2 text-red-300 text-sm">{errors.courseName}</p>}
                                    </div>

                                    {/* Message */}
                                    <div className="md:col-span-2 relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                                        <div className="relative">
                                            <textarea
                                                placeholder={t('Form.enrollMessage')}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                rows={4}
                                                className="w-full px-6 py-5 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-purple-400/50 transition-all shadow-lg resize-none placeholder-gray-400"
                                            />
                                            <label className="absolute -top-3 left-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                                                💬 Сообщение
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center pt-6">
                                    <button
                                        type="submit"
                                        disabled={formSubmitting}
                                        className="relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 text-white font-bold text-xl px-16 py-6 rounded-2xl shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {formSubmitting ? (
                                            <>
                                                <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                {t('Form.loading') || 'Отправляем...'}
                                            </>
                                        ) : (
                                            <>
                                                <span>🚀</span>
                                                {t('Form.submit')}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-6 mt-10">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full text-white/90">
                                <span className="text-xl">🔒</span>
                                <span className="text-sm">Безопасно</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full text-white/90">
                                <span className="text-xl">⚡</span>
                                <span className="text-sm">Быстрый ответ</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full text-white/90">
                                <span className="text-xl">💯</span>
                                <span className="text-sm">Гарантия качества</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}