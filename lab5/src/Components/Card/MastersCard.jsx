import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import Popout from '../PopoutWindow/Popout';

function MastersCard({ master, isSelected, toggleSelect }) {
    const [isPopoutOpen, setIsPopoutOpen] = useState(false);

    const handleCardClick = () => {
        if (!isPopoutOpen) {
            toggleSelect(master.id);
        }
    };

    const togglePopout = (e) => {
        e.stopPropagation();
        setIsPopoutOpen(!isPopoutOpen);
    };


    const cardMediaStyle = {
        height: 140, // Высота изображения в карточке
    };

    return (
        <>
            <Card 
                onClick={handleCardClick}
                style={{
                    border: isSelected ? '2px solid rgb(187, 87, 118)' : 'none'
                }
                    
                }
            >
                <CardMedia
                    component="img"
                    image={master.image}
                    alt={master.name}
                />
                <CardContent style={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {master.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {master.experience}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={togglePopout}>Подробнее</Button>
                </CardActions>
            </Card>
            {isPopoutOpen && <Popout master={master} closePopout={togglePopout} />}
        </>
    );
}

export default MastersCard;