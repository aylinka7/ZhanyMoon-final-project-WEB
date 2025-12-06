import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#004aad] text-white py-10 mt-auto">
            <div className="container mx-auto px-4 text-center space-y-4">
                <p className="text-2xl font-bold">Академ Кидс</p>
                <p className="text-lg">{t('Contacts.address') || 'г. Бишкек, ул. Токтогула 123'}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
                    <a href="tel:+996999123456" className="hover:text-[#67bc45] transition">
                        +996 999 123 456
                    </a>
                    <span className="hidden sm:inline">•</span>
                    <a href="https://wa.me/996999123456" className="hover:text-[#67bc45] transition">
                        WhatsApp
                    </a>
                </div>
                <p className="text-sm mt-6 opacity-80">
                    © 2025 Академ Кидс — Детский клуб творчества и развития
                </p>
            </div>
        </footer>
    );
}