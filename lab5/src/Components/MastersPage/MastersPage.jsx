import React, { useState, useEffect } from 'react';
import MastersCard from '../Card/MastersCard';
import CardForm from '../CardForm/CardForm';
import { Container, Grid, Button, Typography } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import ExperienceSlider from '../ExperienceSlider/ExperienceSlider';
import SpecializationDropdown from '../SpecializationDropdown/SpecializationDropdown';

function MastersPage() {
    const [masters, setMasters] = useState([]);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingMaster, setEditingMaster] = useState(null);
  const [filteredMasters, setFilteredMasters] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  const [experienceFilter, setExperienceFilter] = useState([0, 10]);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');

    useEffect(() => {
        fetch('/data/masterData.json')
            .then(response => response.json())
            .then(data => setMasters(data))
            .catch(error => console.error("Ошибка при загрузке мастеров:", error));
    }, []);

    const handleSpecializationChange = (value) => {
        setSelectedSpecialization(value);
    };
  
    const handleSearch = (query) => {
        const filteredMasters = masters.filter(master =>
            master.name.toLowerCase().includes(query.toLowerCase()) &&
            (selectedSpecialization === '' || master.features.some(feature => feature.toLowerCase() === selectedSpecialization.toLowerCase())) &&
            master.experience >= experienceFilter[0] && master.experience <= experienceFilter[1]
        );
        setFilteredMasters(filteredMasters);
        setIsSearchPerformed(true);
    };

    const handleApplySpecializationFilter = () => {
        // Выполните здесь обновление результатов поиска, учитывая выбранную специализацию
        handleSearch(''); // Передайте пустой запрос, чтобы снова выполнить поиск с учетом специализации
    };

    const handleExperienceFilterChange = (value) => {
        setExperienceFilter(value);
        filterMastersByExperience(value);
      };

    const filterMastersByExperience = (value) => {
        const filteredMasters = masters.filter(master =>
          master.experience >= value[0] && master.experience <= value[1]
        );
        setFilteredMasters(filteredMasters);
      };

    const addOrUpdateMaster = (masterData, id) => {
        if (id) {
            setMasters(prevMasters =>
                prevMasters.map(master => master.id === id ? { ...master, ...masterData } : master)
            );
        } else {
            setMasters(prevMasters => [...prevMasters, { ...masterData, id: Date.now() }]);
        }
        setIsFormOpen(false);
        setEditingMaster(null);
    };

    const handleAddClick = () => {
        setEditingMaster(null);
        setIsFormOpen(true);
    };

    const handleEditClick = () => {
        const selectedIdArray = Array.from(selectedIds);
        if (selectedIdArray.length === 1) {
            const masterToEdit = masters.find(master => master.id === selectedIdArray[0]);
            setEditingMaster(masterToEdit);
            setIsFormOpen(true);
        } else {
            alert("Выберите объект для редактирования");
        }
    };

    const toggleSelect = (id) => {
        setSelectedIds(prevSelectedIds => {
            const newSelectedIds = new Set(prevSelectedIds);
            if (newSelectedIds.has(id)) {
                newSelectedIds.delete(id);
            } else {
                newSelectedIds.add(id);
            }
            return newSelectedIds;
        });
    };

    const removeSelectedMasters = () => {
        setMasters(prevMasters => prevMasters.filter(master => !selectedIds.has(master.id)));
        setSelectedIds(new Set());
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} style={{ marginBottom: '20px', justifyContent: 'center' }}>
                <Grid item>
                    <Button variant="contained" style={{ backgroundColor: 'rgb(187, 87, 118)' }} onClick={handleAddClick}>
                        Добавить
                    </Button>
                </Grid>
                <Grid item>
                    <Button style={{ backgroundColor: 'rgb(187, 87, 118)' }} variant="contained" onClick={handleEditClick} disabled={selectedIds.size !== 1}>
                        Редактировать
                    </Button>
                </Grid>
                <Grid item>
                    <Button style={{ backgroundColor: 'rgb(187, 87, 118)' }} variant="contained" onClick={removeSelectedMasters}>
                        Удалить
                    </Button>
                </Grid>
            </Grid>

            <SearchBar onSearch={handleSearch} />
            <ExperienceSlider onFilterChange={handleExperienceFilterChange} />
             <SpecializationDropdown
                selectedSpecialization={selectedSpecialization}
                onSpecializationChange={handleSpecializationChange}
                onApplyClick={handleApplySpecializationFilter}
            />

            {isSearchPerformed ? (
                filteredMasters.length === 0 ? (
                    <Typography variant="body1" align="center" color="textSecondary">
                        Нет мастеров, соответствующих вашему запросу.
                    </Typography>
                ) : (
                    <Grid container spacing={2}>
                        {filteredMasters.map(master => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={master.id}>
                                <MastersCard
                                    master={master}
                                    isSelected={selectedIds.has(master.id)}
                                    toggleSelect={() => toggleSelect(master.id)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )
            ) : (
                <Grid container spacing={2}>
                    {masters.map(master => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={master.id}>
                            <MastersCard
                                master={master}
                                isSelected={selectedIds.has(master.id)}
                                toggleSelect={() => toggleSelect(master.id)}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}

            {isFormOpen && (
                <CardForm
                    onSave={addOrUpdateMaster}
                    existingMaster={editingMaster}
                    isFormOpen={isFormOpen}
                    setIsFormOpen={setIsFormOpen}
                />
            )}
        </Container>
    );
}

export default MastersPage;
