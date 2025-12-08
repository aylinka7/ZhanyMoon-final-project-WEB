import { useEffect, useState } from 'react';
import { getApplications, deleteApplication } from '../services/api';

export default function Admin() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('date');
    const [deleteConfirm, setDeleteConfirm] = useState(null);

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = () => {
        setLoading(true);
        getApplications()
            .then(setApplications)
            .finally(() => setLoading(false));
    };

    const handleDelete = async (id) => {
        await deleteApplication(id);
        setDeleteConfirm(null);
        loadApplications();
    };

    const filteredApplications = applications
        .filter(app =>
            app.childName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.parentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.phone?.includes(searchTerm) ||
            app.courseName?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'date') return new Date(b.createdAt) - new Date(a.createdAt);
            if (sortBy === 'name') return a.childName?.localeCompare(b.childName);
            if (sortBy === 'course') return a.courseName?.localeCompare(b.courseName);
            return 0;
        });

    const stats = [
        { label: 'Всего заявок', value: applications.length, icon: '📋', color: 'from-purple-500 to-indigo-600' },
        { label: 'Сегодня', value: applications.filter(a => new Date(a.createdAt).toDateString() === new Date().toDateString()).length, icon: '📅', color: 'from-green-500 to-emerald-600' },
        { label: 'На этой неделе', value: applications.filter(a => new Date(a.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length, icon: '📊', color: 'from-blue-500 to-cyan-600' },
        { label: 'Курсов', value: [...new Set(applications.map(a => a.courseName))].length, icon: '📚', color: 'from-orange-500 to-amber-600' },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-extrabold flex items-center gap-3">
                                <span className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                    👨‍💼
                                </span>
                                Панель администратора
                            </h1>
                            <p className="text-white/70 mt-2">Управление заявками на курсы</p>
                        </div>
                        <button
                            onClick={loadApplications}
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors"
                        >
                            <span>🔄</span>
                            Обновить
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-3xl font-extrabold text-gray-800">{stat.value}</div>
                                    <div className="text-gray-500 text-sm">{stat.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Search & Filter Bar */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                            <input
                                type="text"
                                placeholder="Поиск по имени, телефону или курсу..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                            />
                        </div>
                        <div className="flex gap-2">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
                            >
                                <option value="date">📅 По дате</option>
                                <option value="name">👤 По имени</option>
                                <option value="course">📚 По курсу</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Applications Table */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="text-center">
                                <div className="w-16 h-16 border-4 border-purple-200 rounded-full animate-spin border-t-purple-600 mx-auto mb-4"></div>
                                <p className="text-gray-500">Загрузка заявок...</p>
                            </div>
                        </div>
                    ) : filteredApplications.length === 0 ? (
                        <div className="text-center py-20">
                            <span className="text-6xl block mb-4">📭</span>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Заявок не найдено</h3>
                            <p className="text-gray-500">
                                {searchTerm ? 'Попробуйте изменить параметры поиска' : 'Новые заявки появятся здесь'}
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                <tr className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                                    <th className="px-6 py-4 text-left font-semibold">👶 Ребёнок</th>
                                    <th className="px-6 py-4 text-left font-semibold">🎂 Возраст</th>
                                    <th className="px-6 py-4 text-left font-semibold">👨‍👩‍👧 Родитель</th>
                                    <th className="px-6 py-4 text-left font-semibold">📱 Телефон</th>
                                    <th className="px-6 py-4 text-left font-semibold">📚 Курс</th>
                                    <th className="px-6 py-4 text-left font-semibold">📅 Дата</th>
                                    <th className="px-6 py-4 text-center font-semibold">⚡ Действия</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredApplications.map((app, index) => (
                                    <tr
                                        key={app.id}
                                        className={`border-b border-gray-100 hover:bg-purple-50 transition-colors ${index % 2 === 0 ? 'bg-gray-50/50' : ''}`}
                                    >
                                        <td className="px-6 py-4">
                                            <span className="font-semibold text-gray-800">{app.childName}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {app.childAge} лет
                                                </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{app.parentName}</td>
                                        <td className="px-6 py-4">
                                            <a
                                                href={`tel:${app.phone}`}
                                                className="text-green-600 hover:text-green-700 font-medium hover:underline"
                                            >
                                                {app.phone}
                                            </a>
                                        </td>
                                        <td className="px-6 py-4">
                                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {app.courseName}
                                                </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 text-sm">
                                            {new Date(app.createdAt).toLocaleDateString('ru-RU', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <a
                                                    href={`https://wa.me/${app.phone?.replace(/\D/g, '')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 bg-green-100 hover:bg-green-200 text-green-600 rounded-xl flex items-center justify-center transition-colors"
                                                    title="WhatsApp"
                                                >
                                                    💬
                                                </a>
                                                <a
                                                    href={`tel:${app.phone}`}
                                                    className="w-10 h-10 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-xl flex items-center justify-center transition-colors"
                                                    title="Позвонить"
                                                >
                                                    📞
                                                </a>
                                                <button
                                                    onClick={() => setDeleteConfirm(app.id)}
                                                    className="w-10 h-10 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl flex items-center justify-center transition-colors"
                                                    title="Удалить"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Pagination Info */}
                    {!loading && filteredApplications.length > 0 && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-gray-500 text-sm">
                                Показано {filteredApplications.length} из {applications.length} заявок
                            </span>
                            <div className="flex items-center gap-2">
                                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">
                                    ← Назад
                                </button>
                                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                                    Вперёд →
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {deleteConfirm && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full animate-bounce-in">
                        <div className="text-center">
                            <span className="text-6xl block mb-4">⚠️</span>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Удалить заявку?</h3>
                            <p className="text-gray-500 mb-8">Это действие нельзя отменить</p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setDeleteConfirm(null)}
                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 rounded-2xl transition-colors"
                                >
                                    Отмена
                                </button>
                                <button
                                    onClick={() => handleDelete(deleteConfirm)}
                                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-2xl transition-colors"
                                >
                                    Удалить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}