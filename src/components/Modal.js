import "../assets/css/modal.css";
import { useState } from 'react';
import axios from 'axios';

const Modal = ({ active, setActive }) => {
    const [formData, setFormData] = useState({
        email: '',
        number: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
    axios.post(
        'https://api.omega-centre.ru/api/v1/send-email/',
        {
            email: formData.email,
            number: formData.number,
        }
      );
        // Логика валидации может быть добавлена здесь перед отправкой
        console.log('Форма отправлена', formData);
        // Опционально: Сбросить поля формы после отправки
        setFormData({
            email: '',
            number: '',
        });
        setActive(false); // Закрыть модальное окно после отправки
    };

    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close-btn" onClick={() => setActive(false)}>&times;</span>
                <p className="modal-title">Оставить заявку</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            id="number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            required
                            placeholder="Телефон"
                        />
                    </div>
                    <button type="submit">Оставить заявку</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
