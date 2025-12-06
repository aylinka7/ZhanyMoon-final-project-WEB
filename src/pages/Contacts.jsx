import { useTranslation } from 'react-i18next';

export default function Contacts() {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-5xl font-bold text-center mb-16 text-[#004aad]">{t('Contacts.title')}</h1>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-xl">
                            <h3 className="text-2xl font-bold text-[#004aad] mb-6">Контакты</h3>
                            <p className="text-lg"><strong>Адрес:</strong> {t('Contacts.address')}</p>
                            <p className="text-lg mt-4"><strong>Телефон/WhatsApp:</strong><br />
                                <a href="tel:+996999123456" className="text-[#67bc45] font-bold">+996 999 123 456</a>
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-[#004aad] to-[#67bc45] text-white p-8 rounded-3xl text-center">
                            <p className="text-2xl font-bold">Пн–Пт 09:00–19:00<br />Сб 10:00–17:00</p>
                        </div>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=..."
                            width="100%"
                            height="400"
                            className="rounded-3xl shadow-2xl"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                        <div className="text-center mt-8">
                            <a href="https://wa.me/996999123456" className="inline-block bg-[#67bc45] text-white font-bold text-2xl px-12 py-5 rounded-2xl hover:bg-[#5aa73d]">
                                {t('Contacts.enroll')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}