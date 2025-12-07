import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';
import {getCourses} from '../services/api';
import i18n from 'i18next';

export default function Courses() {
    const {t} = useTranslation();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const IMAGE_BASE = 'http://localhost:8080';


    useEffect(() => {
        getCourses()
            .then(setCourses)
            .catch(() => setError('Не удалось загрузить курсы'))
            .finally(() => setLoading(false));
    }, []);

    // Функция для получения названия курса на текущем языке
    const getLocalizedCourseName = (course) => {
        const lang = i18n.language;
        if (lang === 'ky' && course.nameKy) return course.nameKy;
        if (lang === 'en' && course.nameEn) return course.nameEn;
        return course.nameRu || 'Без названия';
    };

    // Функция для получения описания курса на текущем языке
    const getLocalizedDescription = (course) => {
        const lang = i18n.language;
        if (lang === 'ky' && course.descriptionKy) return course.descriptionKy;
        if (lang === 'en' && course.descriptionEn) return course.descriptionEn;
        return course.descriptionRu || 'Описание скоро появится';
    };

    // Функция для создания ссылки WhatsApp с предзаполненным сообщением
    const getWhatsAppLink = (course) => {
        const courseName = getLocalizedCourseName(course);
        const message = encodeURIComponent(`${t('Form.enrollMessage')}: ${courseName} (${course.age})`);
        return `https://wa.me/996999123456?text=${message}`;
    };

    if (loading) {
        return (
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-16 text-[#004aad]">{t('Courses.title')}</h1>
                    <p className="text-xl text-gray-600">Загрузка курсов...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-16 text-[#004aad]">{t('Courses.title')}</h1>
                    <p className="text-xl text-red-600 mb-8">{error}</p>
                    <button onClick={() => window.location.reload()}
                            className="bg-[#67bc45] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#5aa73d] transition">
                        Попробовать снова
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-5xl font-bold text-center mb-4 text-[#004aad]">{t('Courses.title')}</h1>
                <p className="text-center text-xl text-gray-600 mb-16">
                    {courses.length} {t('Courses.available')}
                </p>

                {courses.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-2xl text-gray-500 mb-8">Курсы скоро появятся</p>
                        <button onClick={() => window.location.reload()}
                                className="bg-[#67bc45] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#5aa73d] transition">
                            Обновить
                        </button>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
                            >
                                {/* Иконка/изображение курса */}
                                <div className="relative h-64 overflow-hidden">
                                    {course.imageUrl ? (
                                        <img
                                            src={`${IMAGE_BASE}${course.imageUrl}`}
                                            alt={getLocalizedCourseName(course)}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#004aad] to-[#67bc45] flex items-center justify-center">
                                            <span className="text-white text-6xl">Course</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                                </div>

                                {/* Содержимое */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-[#004aad] mb-3 group-hover:text-[#67bc45] transition-colors">
                                        {getLocalizedCourseName(course)}
                                    </h3>

                                    <p className="text-gray-600 mb-2 flex items-center">
                                        <span className="text-[#67bc45] font-semibold mr-2">👶</span>
                                        {course.age}
                                    </p>

                                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                        {getLocalizedDescription(course)}
                                    </p>

                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-2xl font-bold text-[#67bc45]">
                                            {course.price} {t('Courses.pricePerMonth')}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {t('Courses.schedule')}
                                        </span>
                                    </div>

                                    {/* Кнопка WhatsApp */}
                                    <a
                                        href={getWhatsAppLink(course)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-gradient-to-r from-[#004aad] to-[#67bc45] text-white font-bold py-4 px-6 rounded-2xl hover:from-[#003a8a] hover:to-[#5aa73d] transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        {t('Courses.enroll')}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Если курсов больше 6 — кнопка "Показать все" (опционально) */}
                {courses.length > 6 && (
                    <div className="text-center mt-16">
                        <button
                            className="bg-[#67bc45] text-white px-12 py-4 rounded-2xl font-bold text-xl hover:bg-[#5aa73d] transition">
                            {t('Courses.showAll')} ({courses.length})
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}