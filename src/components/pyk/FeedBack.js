import React, { useState } from 'react';
import axios from 'axios'; // Подключаем axios для HTTP запросов
import '../../assets/css/feedBack.css';

const FeedBack = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [score, setScore] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Валидация полей
        if (!title.trim() || !content.trim()) {
            setMessage('Пожалуйста, заполните все поля.');
            return;
        }

        try {
            const response = await axios.post('https://api.example.com/feedbacks/', {
                title,
                content,
                score,
            });
            console.log('Отзыв успешно отправлен!', response.data);
            setMessage('Отзыв успешно отправлен!'); // Уведомление об успешной отправке
            // Сброс полей формы после успешной отправки
            setTitle('');
            setContent('');
            setScore('');
        } catch (error) {
            console.error('Ошибка при отправке отзыва:', error);
            setMessage('Ошибка при отправке отзыва. Попробуйте снова.'); // Сообщение об ошибке
        }
    };

    return (
        <div>
            <h2>Оставить отзыв</h2>
            {message && <p>{message}</p>} {/* Отображение сообщения */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Скажите оценку:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        placeholder='Хорошо/Средне/Плохо'
                    />
                </div>
                <div>
                    <label>Текст отзыва:</label>
                    <textarea 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        placeholder='Текст отзыва:' 
                        required
                    />
                </div>
                <div>
                    <label>Оценка:</label>
                    <select value={score} onChange={(e) => setScore(e.target.value)} required>
                        <option value="">Выберите оценку</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type="submit">Отправить отзыв</button>
            </form>
        </div>
    );
}

export default FeedBack;
