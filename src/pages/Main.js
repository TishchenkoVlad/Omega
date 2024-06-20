import Button from "../components/Button";
import Layout from "../components/Layout";
import ServiceCart from "../components/ServiceCart";
import AdvantagesCart from "../components/AdvantagesCart";
import "../assets/css/main.css"

function Main () {
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
                        <h3>Опыт работы больше 10 лет</h3>
                        <p>У нас работают первоклассные специалисты, которые продолжают повышать свой уровень несмотря на
                                большой багаж знаний и опыта</p>
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
           
            <div id="calculator">
            <p>Калькулятор</p>
                <form action="">
                    <p>Организационно-правовая форма</p>

                    <div>
                        <input class="check-radio-btn" type="radio" id="ip" name="ippp" checked="" onclick="" value="1"/>
                        <label>ИП</label>
                    </div>

                    <div>
                        <input class="check-radio-btn" type="radio" id="ip" name="ippp" checked="" onclick="" value="2"/>
                        <label>ООО</label>
                    </div>

                    <p>Режим налогообложения</p>

                    <div>
                        <input class="check-radio-btn" type="radio" id="ip" name="ip-ooo" checked="" onclick="" value="1"/>
                        <label>УСН 6%</label>
                    </div>

                    <div>
                        <input class="check-radio-btn" type="radio" id="ip" name="ip-ooo" checked="" onclick="" value="2"/>
                        <label>УСН 14%</label>
                    </div>

                    <div>
                        <input class="check-radio-btn" type="radio" id="ip" name="ip-ooo" checked="" onclick="" value="3"/>
                        <label>Осн</label>
                    </div>

                    <div>
                        <input class="check-radio-btn" type="radio" id="ip" name="ip-ooo" checked="" onclick="" value="4"/>
                        <label>Патент</label>
                    </div>

                    <div>
                        <input class="check-radio-btn" type="radio" id="ip" name="ip-ooo" checked="" onclick="" value="5"/>
                        <label>УСН+патент</label>
                    </div>

                    <div>
                        <label>Кол-во сотрудников</label>
                        <input class="sotr" type="number" id="ip" name="number1" checked="" onclick=""/>
                    </div>

                    <label for="pet-select">Система налогообложения:</label>

                    <select name="variant" id="pet-select">
                        <option name="not" value="0">----</option>
                        <option name="onev" value="t1">Торговля(розничная)</option>
                        <option name="twov" value="t2">Грузоперевозки</option>
                        <option name="threev" value="t3">Общепит</option>
                        <option name="fourv" value="t4">Бытовые услуги</option>
                    </select>


                    <button name="add">Рассчитать</button>
                    <h3 id="total"></h3>
                </form>
                <Button>
                    Оставить заявку
                </Button>
            </div>

            <nav class="but_crl">
                <a href="#" id="scroll_top">Наверх</a>
            </nav>
        </Layout>
    )
}

export default Main;

