import React, { useState } from 'react';
import ExperienceFilter from './ExperienceFilter';

const ExperienceSlider = ({ onFilterChange }) => {
  const [experience, setExperience] = useState([0, 10]); // Измените диапазон по своему усмотрению

  const handleExperienceChange = (newValue) => {
    setExperience(newValue);
    onFilterChange(newValue);
  };

  return (
    <ExperienceFilter
      value={experience}
      onChange={handleExperienceChange}
    />
  );
};

export default ExperienceSlider;
