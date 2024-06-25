// Search.js
import React, { useState, useEffect,  } from 'react';
import '../../assets/css/search.css';
import { Link } from "react-router-dom";


function Search() {
    const [query, setQuery] = useState(null);
    const [results, setResults] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false); // Состояние для отслеживания открытия/закрытия выпадающего списка


    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api.omega-centre.ru/api/v1/new/search/?search=`);
            const data = await response.json();
            setResults(data); // Обновление состояния результатов с полученными данными
            setDropdownOpen(true); // Открываем выпадающий список при получении результатов
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
            // Можно добавить обработку ошибок или информацию для пользователя
        }
    };

    useEffect(() => {
        // Выполняем поиск только если запрос не пустой
        if (query) {
            handleSearch();
        } else {
            setResults([]); // Очищаем результаты, если запрос пустой
            setDropdownOpen(false); // Закрываем выпадающий список
        }
    }, [query]); // Запускаем эффект при изменении запроса

    return (
        <div className='search-d'>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Введите запрос" 
            />{dropdownOpen && ( // Показываем выпадающий список только если он открыт
               
            <ul className='ul-search'>
                {results.map((item) => (
                    
                    //<Link to="/news">                            
                    <li key={item.id}>{item.name}: {item.content}</li>
                    //</Link > 
                    
                ))}
            </ul>
            )}
        </div>
    );
}

export default Search;