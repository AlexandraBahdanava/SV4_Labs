import React from 'react';
import { Slider, Typography } from '@mui/material';

const ExperienceFilter = ({ onChange, value }) => {
  return (
    <div>
      <Typography id="experience-slider" gutterBottom>
        Опыт работы (нажмите кнопку "Поиск" и начните перемещать ползунок):
      </Typography>
      <Slider
        value={value}
        onChange={(event, newValue) => onChange(newValue)}
        valueLabelDisplay="auto"
        aria-labelledby="experience-slider"
        min={0}
        max={10}
      />
    </div>
  );
};

export default ExperienceFilter;
