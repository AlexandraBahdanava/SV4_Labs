import React, { useState, useEffect } from 'react';
import { TextField, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Input } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

function CardForm({ onSave, existingMaster, isEditing, isFormOpen, setIsFormOpen }) {
    const [name, setName] = useState('');
    const [experience, setExperience] = useState('');
    const [image, setImage] = useState('');
    const [features, setFeatures] = useState(['']);

    useEffect(() => {
        if (isEditing && existingMaster) {
            setName(existingMaster.name);
            setExperience(existingMaster.experience);
            setImage(existingMaster.image);
            setFeatures(existingMaster.features || ['']);
        }
    }, [isEditing, existingMaster]);

    const handleClose = () => {
        setIsFormOpen(false);
    };
    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleFeatureChange = (index, value) => {
        const updatedFeatures = [...features];
        updatedFeatures[index] = value;
        setFeatures(updatedFeatures);
    };

    const addFeature = () => {
        setFeatures([...features, '']);
    };

    const removeFeature = (index) => {
        setFeatures(features.filter((_, i) => i !== index));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({
            name,
            experience,
            image,
            features: features.filter(f => f)
        }, existingMaster ? existingMaster.id : null);

        if (!isEditing) {
            setName('');
            setExperience('');
            setImage('');
            setFeatures(['']);
        }
    };

    return (
        <Dialog open={isFormOpen} onClose={handleClose}>
            <DialogTitle>
                {isEditing ? 'Редактировать Карточку' : 'Добавить Карточку'}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    style={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent >
                    <TextField
                        label="ФИО мастера"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Опыт работы"
                        fullWidth
                        margin="normal"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                    />
                    <Input
                        type="file"
                        onChange={handleImageChange}
                        fullWidth
                        margin="normal"
                    />
                    <div>
                        {features.map((feature, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                                <TextField 
                                    label={`Специализация ${index + 1}`}
                                    fullWidth
                                    margin="normal"
                                    value={feature}
                                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                                    required={features.length === 1}
                                />
                                {features.length > 1 && (
                                    <IconButton onClick={() => removeFeature(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                )}
                            </div>
                        ))}
                        <Button startIcon={<AddCircleOutlineIcon />} onClick={addFeature} style={{color: 'rgb(187, 87, 118)'}} >
                            Добавить специализацию
                        </Button>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" style={{color: 'rgb(187, 87, 118)'}} >
                        {isEditing ? 'Обновить' : 'Добавить'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default CardForm;