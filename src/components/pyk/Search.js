// Search.js
import React, { useState } from 'react';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const response = await fetch(`https://api.omega-centre.ru/api/v1/new/search/query}`);
        const data = await response.json();
        setResults(data);
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Введите запрос" 
            />
            <button onClick={handleSearch} >Поиск</button>
            <ul>
                {results.map((item) => (
                    <li key={item.id}>{item.name}: {item.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
