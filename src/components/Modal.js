import "../assets/css/modal.css"
import React from 'react';
import '../assets/css/modal.css'; // Добавьте стили для модалки
import Search from "./pyk/Search";

const Modal = ({ active, setActive }) => {
    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close-btn" onClick={() => setActive(false)}>&times;</span>
                <h2>Заявка</h2>
                <p >Форма для оставления заявки</p>
                <button>Оставить заявку</button>
                <div class="search">
                  <form action="#">
                      
                      <Search />
                  </form>
              </div>
            </div>
        </div>
    );
};

export default Modal;

