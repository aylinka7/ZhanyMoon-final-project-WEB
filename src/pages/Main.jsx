import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import {getCourses, submitApplication} from "../services/api.js";
import {useEffect, useState} from "react";
import i18n from "i18next";

export default function Main() {
    const { t } = useTranslation();

    const getLocalizedCourseName = (course) => {
        const lang = i18n.language; // 'ru', 'ky' или 'en'
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
    const [loading, setLoading] = useState(true);
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
            .finally(() => setLoading(false));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setErrors({});
        setLoading(true);

        try {
            await submitApplication(formData);
            setSuccess('Спасибо! Мы свяжемся с вами в ближайшее время');
            setFormData({ childName: '', childAge: '', parentName: '', phone: '', courseName: '', message: '' });
        } catch (err) {
            // Если бэкенд вернул конкретную ошибку поля
            if (err.message.includes('Неверный номер телефона')) {
                setErrors({ ...errors, phone: 'Неверный формат телефона (пример: +996555123456)' });
            } else {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#004aad] to-[#67bc45] text-white py-24">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <img src={logo} alt={t('Hero.logoAlt')} className="w-96 mx-auto md:mx-0 drop-shadow-2xl" />
                        <h1 className="text-5xl md:text-6xl font-bold mt-8">{t('Hero.title')}</h1>
                        <p className="text-2xl mt-4">{t('Hero.subtitle')}</p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                            <a href="https://wa.me/996999123456" className="bg-[#67bc45] hover:bg-[#5aa73d] px-10 py-5 rounded-xl text-xl font-bold">
                                {t('Hero.wa')}
                            </a>
                            <a href="tel:+996999123456" className="bg-white text-[#004aad] hover:bg-gray-100 px-10 py-5 rounded-xl text-xl font-bold">
                                {t('Hero.call')}
                            </a>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl text-lg space-y-4">
                        <h3 className="text-3xl font-bold">{t('Hero.why')}</h3>
                        <ul className="space-y-3">
                            <li>{t('Hero.benefit1')}</li>
                            <li>{t('Hero.benefit2')}</li>
                            <li>{t('Hero.benefit3')}</li>
                            <li>{t('Hero.benefit4')}</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Курсы */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-[#004aad]">{t('Courses.title')}</h2>
                    {loading ? <p className="text-center">Загрузка курсов...</p> : null}
                    {error ? <p className="text-center text-red-500">{error}</p> : null}
                    <div className="grid md:grid-cols-3 gap-10">
                        {courses
                            .slice(0, 6)
                            .map((c) => (
                            <div key={c.id} className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition">
                                <img
                                    src={`http://localhost:8080${c.imageUrl}`}
                                    alt={getLocalizedCourseName(c)}
                                    className="w-full h-64 object-cover rounded-t-3xl group-hover:scale-110 transition-transform duration-500"
                                />
                                {/*<div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6" />*/}
                                <h3 className="text-2xl font-bold text-[#004aad]">{getLocalizedCourseName(c)}</h3>
                                <p className="text-gray-600 mt-3">{c.age}</p>
                                <Link to="/courses" className="inline-block mt-6 text-[#67bc45] font-bold hover:underline">
                                    {t('Courses.more')} →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Форма */}
            <section className="py-20 bg-gradient-to-r from-[#004aad] to-[#67bc45] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-12">{t('Contacts.enroll')}</h2>

                    {/* Успех и общая ошибка */}
                    {success && (
                        <div className="max-w-2xl mx-auto mb-8 p-5 bg-green-100 border-2 border-green-400 text-green-800 rounded-2xl font-medium text-xl">
                            {success}
                        </div>
                    )}
                    {error && !Object.keys(errors).length && (
                        <div className="max-w-2xl mx-auto mb-8 p-5 bg-red-100 border-2 border-red-400 text-red-800 rounded-2xl font-medium text-xl">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">

                            {/* Имя ребёнка */}
                            <div className="relative">
                                <input
                                    required
                                    type="text"
                                    placeholder={t('Form.childNamePlaceholder')}
                                    value={formData.childName}
                                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                    className="w-full px-6 py-5 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/40 transition-shadow shadow-lg"
                                />
                                <label className="absolute -top-3 left-6 bg-gradient-to-r from-[#004aad] to-[#67bc45] px-3 text-sm font-medium">
                                    {t('Form.childName') || "Имя ребёнка"}
                                </label>
                                {errors.childName && <p className="mt-1 text-red-300 text-sm text-left">{errors.childName}</p>}
                            </div>

                            {/* Возраст — только цифры */}
                            <div className="relative">
                                <input
                                    required
                                    type="text"
                                    inputMode="numeric"
                                    pattern="\d*"
                                    placeholder={t('Form.agePlaceholder')}
                                    value={formData.childAge}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (/^\d*$/.test(value)) {
                                            setFormData({ ...formData, childAge: value });
                                            setErrors({ ...errors, childAge: '' });
                                        }
                                    }}
                                    className="w-full px-6 py-5 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/40 transition-shadow shadow-lg"
                                />
                                <label className="absolute -top-3 left-6 bg-gradient-to-r from-[#004aad] to-[#67bc45] px-3 text-sm font-medium">
                                    {t('Form.childAge') || "Возраст ребёнка"}
                                </label>
                                {errors.childAge && <p className="mt-1 text-red-300 text-sm text-left">{errors.childAge}</p>}
                            </div>

                            {/* Имя родителя */}
                            <div className="relative">
                                <input
                                    required
                                    type="text"
                                    placeholder={t('Form.parentNamePlaceholder')}
                                    value={formData.parentName}
                                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                    className="w-full px-6 py-5 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/40 transition-shadow shadow-lg"
                                />
                                <label className="absolute -top-3 left-6 bg-gradient-to-r from-[#004aad] to-[#67bc45] px-3 text-sm font-medium">
                                    {t('Form.parentName')}
                                </label>
                            </div>

                            {/* Телефон */}
                            <div className="relative">
                                <input
                                    required
                                    type="tel"
                                    placeholder={t('Form.phonePlaceholder')}
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-6 py-5 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/40 transition-shadow shadow-lg"
                                />
                                <label className="absolute -top-3 left-6 bg-gradient-to-r from-[#004aad] to-[#67bc45] px-3 text-sm font-medium">
                                    {t('Form.phone')}
                                </label>
                                {errors.phone && <p className="mt-1 text-red-300 text-sm text-left">{errors.phone}</p>}
                            </div>

                            {/* Выбор курса из API */}
                            <div className="md:col-span-2 relative">
                                <select
                                    required
                                    value={formData.courseName}
                                    onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                                    className="w-full px-6 py-5 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/40 transition-shadow shadow-lg appearance-none bg-white cursor-pointer"
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
                                <label className="absolute -top-3 left-6 bg-gradient-to-r from-[#004aad] to-[#67bc45] px-3 text-sm font-medium">
                                    {t('Form.course')}
                                </label>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                {errors.courseName && <p className="mt-1 text-red-300 text-sm text-left">{errors.courseName}</p>}
                            </div>

                            {/* Сообщение */}
                            <div className="md:col-span-2">
          <textarea
              placeholder={t('Form.enrollMessage')}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-6 py-5 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/40 transition-shadow shadow-lg resize-none"
          />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-10 bg-white text-[#004aad] hover:bg-gray-100 disabled:opacity-70 font-bold text-2xl px-20 py-6 rounded-3xl shadow-2xl transition-all transform hover:scale-105 disabled:cursor-not-allowed"
                        >
                            {loading ? t('Form.loading') || 'Отправляем...' : t('Form.submit')}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}