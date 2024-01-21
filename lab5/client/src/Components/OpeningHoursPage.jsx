import React from 'react';
import data from '../data.json';
import { Container, Typography, Paper } from '@mui/material';
import jsPDF from "jspdf";
import Button from "@mui/material/Button";

function OpeningHoursPage() { 

    const createPDF = () => {
        const doc = new jsPDF();
        
        doc.text("Working Hours:", 10, 10);
        doc.text("Monday - Friday: 9:00 AM - 8:00 PM", 10, 30);
        doc.text("Saturday: 10:00 AM - 6:00 PM", 10, 40);
        doc.text("Sunday: Closed", 10, 50);
        
        doc.save("nail_salon_opening_hours.pdf");
    };

        return (
            <>
            <Container
             style={{
                marginTop: '40px',
                color: 'rgba(229, 124, 157, 0.852)'
            }}>
            <Typography variant="h4" component="h1" gutterBottom>
                График работы маникюрного салона
            </Typography>
            <Typography variant="body1" gutterBottom>
                Наш маникюрный салон готов предложить вам высококачественные услуги и индивидуальный подход к каждому клиенту.
            </Typography>

            <Typography variant="body1" gutterBottom>
                Рабочие часы:
            </Typography>

            <Typography variant="body1" gutterBottom>
                Понедельник - Пятница: 9:00 - 20:00
            </Typography>

            <Typography variant="body1" gutterBottom>
                Суббота: 10:00 - 18:00
            </Typography>

            <Typography variant="body1" gutterBottom>
                Воскресенье: Выходной
            </Typography>
                <Button variant="contained" onClick={createPDF}style={{
           width:'40%',
           backgroundColor: 'rgba(229, 124, 157, 0.852)',
           color: 'white',
           borderRadius: '7px',
           '&:hover': {
             backgroundColor: ' rgba(209, 79, 121, 0.852)',
           },
        }}>
                    Скачать расписание
                </Button>
            <Paper style={{ padding: '20px', marginTop: '20px',  color: 'rgba(229, 124, 157, 0.852)' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Работы наших мастеров
                </Typography>
                <div className='block' style={{ display: 'flex', justifyContent: 'center' }}>
    {data.map((el) => (
        <div className='product' key={el.id} style={{ margin: '0 10px' }}>
            <img className='product__image' style={{ width: "300px", height: "300px", objectFit: "cover" }} src={el.img} alt={`Product ${el.id}`} />
        </div>
    ))}
</div>

            
            </Paper>
        </Container>
            </>
        )
}

export default OpeningHoursPage;