import { useTranslation } from 'react-i18next';

export default function Courses() {
    const { t } = useTranslation();

    const courseKeys = ['robotics', 'mentalMath', 'english', 'programming', 'chess', 'creative'];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-5xl font-bold text-center mb-16 text-[#004aad]">{t('Courses.title')}</h1>
                <div className="grid md:grid-cols-3 gap-10 mt-12">
                    {courseKeys.map((key) => {
                        const courseName = t(`Courses.items.${key}.name`);
                        return (
                            <div key={key} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
                                <div className="h-48 bg-gradient-to-br from-[#004aad] to-[#67bc45] rounded-2xl mb-6" />
                                <h3 className="text-2xl font-bold text-[#004aad]">{courseName}</h3>
                                <p className="text-gray-600 mt-2">{t(`Courses.items.${key}.age`)} {t('Courses.ageRange')}</p>
                                <p className="mt-4 text-gray-700">{t(`Courses.items.${key}.desc`)}</p>
                                <a 
                                    href={`https://wa.me/996999123456?text=${encodeURIComponent(t('Form.enrollMessage') + ': ' + courseName)}`} 
                                    className="block mt-6 text-center bg-[#67bc45] text-white font-bold py-3 rounded-xl hover:bg-[#5aa73d] transition"
                                >
                                    {t('Courses.enroll')}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}