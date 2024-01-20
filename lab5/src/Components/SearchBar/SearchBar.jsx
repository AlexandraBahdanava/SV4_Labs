import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        // Вызовите функцию onSearch и передайте ей запрос для поиска
        onSearch(searchQuery);
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <TextField
                type="text"
                placeholder="Введите имя мастера"
                value={searchQuery}
                onChange={handleInputChange}
                variant="outlined"
            />
            <Button onClick={handleSearchClick} variant="contained">
                Поиск
            </Button>
        </Box>
    );
}

export default SearchBar;
