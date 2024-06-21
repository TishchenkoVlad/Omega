import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Layout from "../components/Layout";
import "../assets/css/about.css"


function About() {


    
    function MyMap() {
        return (
             
            <div className="YMap">
                <YMaps>
                    <Map defaultState={{ center: [46.849564, 40.312824], zoom: 9 }}>
                        <Placemark geometry={[46.849564, 40.312824]} />
                    </Map>
                </YMaps>
            </div>            
            
        );
    }
   

    return (
        <Layout>
            <div className="container-с">
                <h1>Контакты</h1>
                <p id='contacts'>
                    Ростовская обл. г.Зерноград, ул. Ленина 35
                    График работы
                    +7 960 612 97 17
                    Пн-Пт: с 9:00 до 17:00
                    omega-center@yandex.ru
                </p>
                <MyMap />
                

            </div>
        </Layout>
    );
};

export default About;
