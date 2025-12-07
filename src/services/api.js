const API_BASE = 'http://localhost:8080/api';

export const getCourses = async () => {
    const response = await fetch(`${API_BASE}/courses`);
    if (!response.ok) throw new Error('Не удалось загрузить курсы');
    return response.json();
};

export const submitApplication = async (data) => {
    const response = await fetch(`${API_BASE}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        let errorMessage = 'Ошибка отправки заявки';

        try {
            const errorData = await response.json();
            // Если бэкенд вернул массив ошибок — берём первую
            if (errorData.errors && errorData.errors.length > 0) {
                errorMessage = errorData.errors[0].defaultMessage;
            } else if (errorData.message) {
                errorMessage = errorData.message;
            }
        } catch (e) {
            // Если не JSON — просто статус
            errorMessage = `Ошибка ${response.status}`;
        }

        throw new Error(errorMessage);
    }

    return response.text(); // "Спасибо! Мы свяжемся..."
};

export const getApplications = async () => {
    const response = await fetch(`${API_BASE}/applications`);
    if (!response.ok) throw new Error('Не удалось загрузить заявки');
    return response.json();
};

export const deleteApplication = async (id) => {
    const response = await fetch(`${API_BASE}/applications/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Не удалось удалить заявку');
    return response.text();
};