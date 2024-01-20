import React, { useState } from 'react';

function MasterSearch({ masters, onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        // Вызовите функцию onSearch и передайте ей запрос для поиска
        onSearch(searchQuery);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Введите имя мастера"
                value={searchQuery}
                onChange={handleInputChange}
            />
            <button onClick={handleSearchClick}>Поиск</button>
        </div>
    );
}

export default MasterSearch;