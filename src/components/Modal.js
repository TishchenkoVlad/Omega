import "../assets/css/modal.css"
import '../assets/css/modal.css'; // Добавьте стили для модалки

import React, { useState } from 'react';


const Modal = ({ active, setActive }) => {
    const [formData, setFormData] = useState({
        
        email: '',
        phone: '',
        
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
        // Обработка данных формы
        console.log('Форма отправлена', formData);
        setActive(false); // Закрытие модального окна после отправки формы
    };

    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close-btn" onClick={() => setActive(false)}>&times;</span>
                <h2>Оставить заявку</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <button type="submit">Оставить заявку</button>
                </form>
            </div>
        </div>
    );
};


export default Modal;

