
//import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
//import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Layout from "../components/Layout";
import "../assets/css/about.css"
import Modal from '../components/Modal';
import React, { useState } from 'react';

function About() {
    
    //function MyMap() {  return (    <div className="YMap">  <YMaps>  <Map defaultState={{ center: [46.849564, 40.312824], zoom: 16 }} width="1200px" height="400px">  <Placemark geometry={[46.849564, 40.312824]} /> </Map></YMaps> </div> );}
//<MyMap />
    const [modalActive, setModalActive] = useState(false);


    return (
        <Layout>
            <h1>Контакты</h1>
            <div className="container-с">
                <p id='contacts'>Ростовская обл. г.Зерноград, ул. Ленина 35</p>
                <p id='contacts'>omega-center@yandex.ru</p>
                <p id='contacts'>+7 960 612 97 17</p>
                <p id='contacts'>График работы Пн-Пт: с 9:00 до 17:00</p>
                

            </div>
            <Modal active={modalActive} setActive={setModalActive} />
            <button className='open-btn' onClick={() => setModalActive(true)}>Оставить заявку</button>
        </Layout>
    );
};

export default About;
