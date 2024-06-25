import React, { useState } from 'react';
import '../assets/css/calculator.css';

const Calculator = () => {
    const [legalForm, setLegalForm] = useState('1');
    const [taxMode, setTaxMode] = useState('1');
    const [employees, setEmployees] = useState(0);
    const [businessType, setBusinessType] = useState('0');
    const [total, setTotal] = useState('');

    const calculatePrice = () => {
        if (employees < 0) {
            alert('Количество сотрудников не может быть отрицательным.');
            return;
        }

        const basePrices = {
            "1_1": 1000,
            "1_2": 1200,
            "1_3": 1500,
            "1_4": 1100,
            "1_5": 1300,
            "2_1": 2000,
            "2_2": 2200,
            "2_3": 2500,
            "2_4": 2100,
            "2_5": 2300
        };

        const businessTypeMultipliers = {
            "0": 1,
            "t1": 1.1,
            "t2": 1.2,
            "t3": 1.3,
            "t4": 1.4
        };

        const employeeCost = 100;
        const baseKey = `${legalForm}_${taxMode}`;
        const basePrice = basePrices[baseKey] || 0;
        const businessMultiplier = businessTypeMultipliers[businessType] || 1;
        const totalPrice = basePrice * businessMultiplier + (employeeCost * employees);

        setTotal(`Итоговая цена: ${totalPrice} рублей`);
        alert('Расчет выполнен успешно!');
    };

    return (
        <div id="calculator">
            <p>Калькулятор</p>
            <form onSubmit={(e) => { e.preventDefault(); calculatePrice(); }}>
                <p>Организационно-правовая форма</p>
                <div>
                    <input 
                        className="check-radio-btn" 
                        type="radio" 
                        id="ip" 
                        name="legalForm" 
                        value="1" 
                        checked={legalForm === '1'}
                        onChange={() => setLegalForm('1')}
                    />
                    <label htmlFor="ip">ИП</label>
                </div>
                <div>
                    <input 
                        className="check-radio-btn" 
                        type="radio" 
                        id="ooo" 
                        name="legalForm" 
                        value="2"
                        checked={legalForm === '2'}
                        onChange={() => setLegalForm('2')}
                    />
                    <label htmlFor="ooo">ООО</label>
                </div>
                
                <p>Режим налогообложения</p>
                <div>
                    <input 
                        className="check-radio-btn" 
                        type="radio" 
                        id="usn6" 
                        name="taxMode" 
                        value="1"
                        checked={taxMode === '1'}
                        onChange={() => setTaxMode('1')}
                    />
                    <label htmlFor="usn6">УСН 6%</label>
                </div>
                <div>
                    <input 
                        className="check-radio-btn" 
                        type="radio" 
                        id="usn14" 
                        name="taxMode" 
                        value="2"
                        checked={taxMode === '2'}
                        onChange={() => setTaxMode('2')}
                    />
                    <label htmlFor="usn14">УСН 14%</label>
                </div>
                <div>
                    <input 
                        className="check-radio-btn" 
                        type="radio" 
                        id="osn" 
                        name="taxMode" 
                        value="3"
                        checked={taxMode === '3'}
                        onChange={() => setTaxMode('3')}
                    />
                    <label htmlFor="osn">Осн</label>
                </div>
                <div>
                    <input 
                        className="check-radio-btn" 
                        type="radio" 
                        id="patent" 
                        name="taxMode" 
                        value="4"
                        checked={taxMode === '4'}
                        onChange={() => setTaxMode('4')}
                    />
                    <label htmlFor="patent">Патент</label>
                </div>
                <div>
                    <input 
                        className="check-radio-btn" 
                        type="radio" 
                        id="usnPatent" 
                        name="taxMode" 
                        value="5"
                        checked={taxMode === '5'}
                        onChange={() => setTaxMode('5')}
                    />
                    <label htmlFor="usnPatent">УСН+патент</label>
                </div>

                <div>
                    <label htmlFor="employees">Кол-во сотрудников</label>
                    <input 
                        className="sotr" 
                        type="number" 
                        id="employees" 
                        name="employees" 
                        value={employees} 
                        onChange={(e) => setEmployees(parseInt(e.target.value) || 0)}
                    />
                </div>

                <label htmlFor="businessType">Система налогообложения:</label>
                <select 
                    name="businessType" 
                    id="businessType" 
                    value={businessType} 
                    onChange={(e) => setBusinessType(e.target.value)}
                >
                    <option value="0">----</option>
                    <option value="t1">Торговля(розничная)</option>
                    <option value="t2">Грузоперевозки</option>
                    <option value="t3">Общепит</option>
                    <option value="t4">Бытовые услуги</option>
                </select>

                <button type="submit">Рассчитать</button>
                <h3 id="total">{total}</h3>
            </form>
            <div>
                <button className="open-btn" onClick={() => alert('Заявка оставлена!')}>Оставить заявку</button>
            </div>
        </div>
    );
};

export default Calculator;
