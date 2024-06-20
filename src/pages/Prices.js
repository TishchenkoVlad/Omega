import Layout from "../components/Layout";
import Button from "../components/Button";
import "../assets/css/prices.css"


function Prices () {
    return (
        
        <Layout>
        <body>
            <div>
                <h1> Цены на бухгалтерские услуги Омега-центр вас удивят! </h1>
            <p> Особенно, если вы уже знаете цены на бухгалтерские услуги штатных специалистов. Наняв бухгалтера, вы вынуждены
                будете кроме фиксированной зарплаты ежемесячно отчислять взносы в фонды, закупать канцтовары и расходники для оргтехники,
                оплачивать подписку на профильные издания и лицензионное ПО. Цены на аутсорсинг бухгалтерских услуг минимальны,
                да и расходов меньше — платите только за то, чем пользуетесь. Цены на бухгалтерский учет в Омега-центр такие:
                для ИП — от 4 450 рублей, для ООО — от 8 900 рублей в месяц. Если вам нужен весомый аргумент в пользу аутсорсинга
                бухгалтерии, воспользуйтесь калькулятором на этой странице — убедитесь, что цены на аутсорсинг бухгалтерских услуг
                доступны и выгодны! Цены на аутсорсинг бухгалтерских услуг в Омега-центр зависят от системы налогообложения,
                сотрудников и хозяйственных операций. Указав эти данные, вы получите результат сразу, без ввода контактных данных.
                Но если захотите, чтобы мы прислали коммерческое предложение, содержащее цены на бухгалтерские услуги, укажите е-мейл.</p>

            </div>
            
            <div>
                <h2> ВЕДЕНИЕ БУХГАЛТЕРИИ — ПРАЙС </h2>
            <p>Цена бухгалтерских услуг зависит от того, работают ли бухгалтера в штате или в аутсорсинговой компании.
                Также стоимость для юридического лица в Ростове-на-Дону и других регионах будет выше, если нужно сдавать полную
                отчётность, а не нулевую, что возможно при минимальном обороте. В аутсорсинговой компании можно выбрать разные
                тарифы: бухгалтерское обслуживание «под ключ» стоит дороже, но при большом объёме разовых услуг такой вариант в
                итоге окажется более выгодным. За счёт чего цена облуживания на аутсорсе ниже, чем у штатного бухгалтера?</p>

            </div>
            
            <h2>Калькулятор</h2>
            <div id="calculator">
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




        </body>
        </Layout>
        
    )
}

export default Prices;