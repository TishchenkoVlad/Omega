import "../assets/css/serviceCart.css"
import Button from "../components/Button";
import React, { useState } from 'react';
import Modal from "./modal";


function ServiceCart({ title, content, price }) {
    const [modalActive, setModalActive] = useState( false)

    return (
        <div class="product-us">
            <div className="product-content">
                <h2 className="product-titleus">{title}</h2>
                <p className="product-contentus">{content}</p>
            </div>
            
            <div className="product-form">
                <p className="price">{price}</p>

                <Modal active={modalActive} setActive={setModalActive} />
                <button className='open-btn' onClick={() => setModalActive(true)}>Оставить заявку</button>
        
            </div>
        </div>
    )
}

export default ServiceCart;