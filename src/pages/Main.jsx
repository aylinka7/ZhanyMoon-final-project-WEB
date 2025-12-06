import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Main() {
    const { t } = useTranslation();

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
                    <div className="grid md:grid-cols-3 gap-10">
                        {['robotics', 'mentalMath', 'english', 'programming', 'chess', 'creative'].map((key) => (
                            <div key={key} className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition">
                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-[#004aad]">{t(`Courses.items.${key}.name`)}</h3>
                                <p className="text-gray-600 mt-3">{t(`Courses.items.${key}.age`)} {t('Courses.ageRange')}</p>
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
                    <h2 className="text-5xl font-bold mb-12">{t('Contacts.enroll')}</h2>
                    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8">
                        <form className="space-y-6 text-left" onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const data = Object.fromEntries(formData);
                            // Открываем WhatsApp с предзаполненным сообщением
                            const message = encodeURIComponent(
                                `${t('Contacts.enroll')}\n` +
                                `${t('Form.messageName')}: ${data.name}\n` +
                                `${t('Form.messagePhone')}: ${data.phone}\n` +
                                `${t('Form.messageAge')}: ${data.age}\n` +
                                `${t('Form.messageCourse')}: ${data.course || t('Form.notSelected')}`
                            );
                            window.open(`https://wa.me/996999123456?text=${message}`, '_blank');
                        }}>
                            <div>
                                <label className="block mb-2 font-semibold">{t('Form.name')}</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl text-gray-900"
                                    placeholder={t('Form.namePlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-semibold">{t('Form.phone')}</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl text-gray-900"
                                    placeholder={t('Form.phonePlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-semibold">{t('Form.childAge')}</label>
                                <input 
                                    type="text" 
                                    name="age" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl text-gray-900"
                                    placeholder={t('Form.agePlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-semibold">{t('Form.course')}</label>
                                <select name="course" className="w-full px-4 py-3 rounded-xl text-gray-900">
                                    <option value="">{t('Form.selectCourse')}</option>
                                    {['robotics', 'mentalMath', 'english', 'programming', 'chess', 'creative'].map((key) => (
                                        <option key={key} value={t(`Courses.items.${key}.name`)}>
                                            {t(`Courses.items.${key}.name`)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-white text-[#004aad] hover:bg-gray-100 px-10 py-5 rounded-xl text-xl font-bold transition"
                            >
                                {t('Form.submit')}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}