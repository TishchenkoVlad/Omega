import Button from "../components/Button";
import Layout from "../components/Layout";
import ServiceCart from "../components/ServiceCart";
import AdvantagesCart from "../components/AdvantagesCart";

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
                    <ServiceCart>
                        <h3>Составление отчетности и деклараций</h3>
                        <p>Составление декларации по первичной документации, введенн...</p>
                        <h3>800 руб. / 1 декларация</h3>                   
                                                
                    </ServiceCart>
                    
                    <ServiceCart>
                            <h4>Составление отчетности и деклараций</h4>
                            <p>Услуга «Главный бухгалтер»</p>
                            <h4>800 руб. / 1 декларация</h4>
                        

                    </ServiceCart>

                    <ServiceCart>
                        <h4>Составление отчетности и декларацийм</h4>
                            <p>Тарифы зависят от режима налогообложения, количества сотрудников и ежемесячных хозяйственных
                                операций.</p>
                            <h4>от 2 500 руб.</h4>
                        

                    </ServiceCart>

                    <ServiceCart>
                        <h4>Опыт работы больше 10 лет</h4>
                            <p>У нас работают первоклассные специалисты, которые продолжают повышать свой уровень несмотря на
                                большой багаж знаний и опыта</p>
                            <h4>от 2 500 руб.</h4>
                        

                    </ServiceCart>

                    <ServiceCart>
                        <h4>Без лишних расходов</h4>
                            <p>Тарифы зависят от режима налогообложения, количества сотрудников и ежемесячных хозяйственных
                                операций.</p>
                            <h4>от 2 500 руб.</h4>
                        

                    </ServiceCart>
                    
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

