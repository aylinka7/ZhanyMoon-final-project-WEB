import { useTranslation } from 'react-i18next';

export default function Achievements() {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-gradient-to-b from-[#004aad] to-[#67bc45] text-white">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-6xl font-bold mb-16">{t('Achievements.title')}</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {Array(12).fill().map((_, i) => (
                        <div key={i} className="bg-white/20 backdrop-blur rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition">
                            <div className="bg-gray-300 border-2 border-dashed w-full aspect-square" />
                            <p className="p-4 font-bold">1 место — 2024–2025</p>
                        </div>
                    ))}
                </div>
                <p className="text-4xl font-bold mt-16">150+ наград</p>
            </div>
        </section>
    );
}