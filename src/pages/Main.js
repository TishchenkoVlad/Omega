import Button from "../components/Button";
import Layout from "../components/Layout";
import ButCrl from '../components/pyk/ButCrl';
import ServiceCart from "../components/ServiceCart";
import AdvantagesCart from "../components/AdvantagesCart";
import "../assets/css/main.css"
import Modal from '../components/Modal';
import React, { useState } from 'react';
import Calculator from "../components/Calculator";


function Main () {

    const [modalActive, setModalActive] = useState(true);


    return (
        <Layout>
            <table class="kart">
                <nav id="kart">
                    
                    <AdvantagesCart>
                        
                        <h3>Опыт работы больше 10 лет</h3>
                        <p>У нас работают первоклассные специалисты, которые продолжают повышать свой уровень несмотря на
                            большой багаж знаний и опыта</p>                           
                        
                    </AdvantagesCart>

                    <AdvantagesCart>
                        <h3>Выгоднее, чем штатный бухгалтер</h3>
                        <p>Стоимость услуг начинается от 800 рублей за нулевую отчетность для вашей компании</p>
                       
                    </AdvantagesCart>

                    <AdvantagesCart>
                        <h3>Без лишних расходов</h3>
                            <p>Тарифы зависят от режима налогообложения, количества сотрудников и ежемесячных хозяйственных
                                операций.</p>                           
                        
                    </AdvantagesCart>

                    <AdvantagesCart>
                        <h3>Без рисков</h3>
                        <p>Если бухгалтер заболеет или уйдёт в отпуск на выполнении обязательств это не отобразиться</p>
                    </AdvantagesCart>
                   
                </nav>
            </table>
            <h1>Разовые бухгалтерские услуги:</h1>
            <table class="kartus">
                
                <nav id="kartus">
                    <ServiceCart
                        title="Составление отчетности и деклараций"
                        content="Составление декларации по первичной документации, введенной клиентом самостоятельно, не требующих дополнительного ввода данных и проверки корректности при отсутствии сотрудников"
                        price="800 руб. / 1 декларация"
                    />
                    
                    <ServiceCart
                        title="Составление отчетности и деклараций"
                        content="Услуга «Главный бухгалтер»"
                        price="800 руб. / 1 декларация"
                    />

                    <ServiceCart
                    title="Составление отчетности и декларацийм"
                        content="Тарифы зависят от режима налогообложения, количества сотрудников и ежемесячных хозяйственных
                        операций."
                        price="от 2 500 руб."
                    />                    

                    <ServiceCart
                    title="Опыт работы больше 10 лет"
                        content="У нас работают первоклассные специалисты, которые продолжают повышать свой уровень несмотря на
                        большой багаж знаний и опыта"
                        price="от 2 500 руб."
                    />                        

                    <ServiceCart
                    title="Без лишних расходов"
                    content="Тарифы зависят от режима налогообложения, количества сотрудников и ежемесячных хозяйственных
                    операций."
                    price="от 2 500 руб."
                />
                    
                </nav>
            </table>

            <h1>Посчитай цену своей услуги</h1>
           
            <Calculator />
            <ButCrl />
        </Layout>
    )
}

export default Main;

