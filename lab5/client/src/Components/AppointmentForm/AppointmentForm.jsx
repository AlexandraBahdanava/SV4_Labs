import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AppointmentForm = () => {
  const [masters, setMasters] = useState([]);
  const [date, setDate] = useState('');
  const [selectedMaster, setSelectedMaster] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/data/masterData.json')
      .then(response => response.json())
      .then(data => setMasters(data))
      .catch(error => console.error("Ошибка при загрузке мастеров:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправка данных на сервер
      const response = await axios.post('http://localhost:3000/api/record/create', {
        recordDate: date,
        authorName: selectedMaster,
      });
      
      setMessage(response.data.message);
      // Дополнительная логика, например, обновление списка записей или перенаправление пользователя
    } catch (error) {
      console.error('Ошибка при отправке данных', error);
      setMessage('Произошла ошибка при записи к мастеру.');
    }
  };

  return (
    <div>
     <Typography variant="h4" align="center" style={{ color:'rgba(209, 79, 121, 0.852)', height: '3vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
       Запись к мастеру
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
      
          <TextField
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            variant="outlined"
            fullWidth
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel htmlFor="master">Выберите мастера:</InputLabel>
          <Select
            id="master"
            value={selectedMaster}
            onChange={(e) => setSelectedMaster(e.target.value)}
            required
            variant="outlined"
            fullWidth
          >
            {masters.map(master => (
              <MenuItem key={master.id} value={master.name}>
                {master.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="secondary" style={{
           width:'40%',
           backgroundColor: 'rgba(229, 124, 157, 0.852)',
           color: 'white',
           borderRadius: '7px',
           '&:hover': {
             backgroundColor: ' rgba(209, 79, 121, 0.852)',
           },
        }}>
          Записаться
        </Button>
      </form>
      {message && <Typography color="error">{message}</Typography>}
    </div>
  );
};

export default AppointmentForm;
