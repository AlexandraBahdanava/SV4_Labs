import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

function SpecializationDropdown({ selectedSpecialization, onSpecializationChange, onApplyClick }) {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleApplyClick = () => {
        setButtonClicked(true);
        onApplyClick();
    };

    const handleSpecializationChange = (value) => {
        setButtonClicked(false);
        onSpecializationChange(value);
    };

    const specializationOptions = [
        'Классический маникюр и педикюр',
        'Спа-маникюр и педикюр',
        'Гель-лак и шеллак маникюр',
    ];

    return (
        <div>
            <FormControl variant="outlined" style={{ minWidth: 200, marginRight: 10 }}>
                <InputLabel id="specialization-label">Специализация</InputLabel>
                <Select
                    labelId="specialization-label"
                    id="specialization-select"
                    value={selectedSpecialization}
                    onChange={(e) => handleSpecializationChange(e.target.value)}
                    label="Специализация"
                >
                    <MenuItem value="">Все</MenuItem>
                    {specializationOptions.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SpecializationDropdown;
