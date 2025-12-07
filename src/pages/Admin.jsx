import { useEffect, useState } from 'react';
import { getApplications, deleteApplication } from '../services/api';

export default function Admin() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = () => {
        getApplications()
            .then(setApplications)
            .finally(() => setLoading(false));
    };

    const handleDelete = async (id) => {
        if (window.confirm('Удалить заявку?')) {
            await deleteApplication(id);
            loadApplications();
        }
    };

    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold text-[#004aad] mb-10">Все заявки</h1>
            {loading ? <p>Загрузка...</p> : null}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#004aad] text-white">
                    <tr>
                        <th className="p-4 text-left">Ребёнок</th>
                        <th className="p-4 text-left">Возраст</th>
                        <th className="p-4 text-left">Родитель</th>
                        <th className="p-4 text-left">Телефон</th>
                        <th className="p-4 text-left">Курс</th>
                        <th className="p-4 text-left">Дата</th>
                        <th className="p-4"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {applications.map((app) => (
                        <tr key={app.id} className="border-b hover:bg-gray-50">
                            <td className="p-4">{app.childName}</td>
                            <td className="p-4">{app.childAge}</td>
                            <td className="p-4">{app.parentName}</td>
                            <td className="p-4">{app.phone}</td>
                            <td className="p-4">{app.courseName}</td>
                            <td className="p-4">{new Date(app.createdAt).toLocaleDateString()}</td>
                            <td className="p-4">
                                <button onClick={() => handleDelete(app.id)} className="text-red-600 hover:underline">Удалить</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}