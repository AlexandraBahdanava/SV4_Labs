import React from 'react';
import { Dialog, DialogTitle, DialogContent, List, ListItem, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Popout({ master, closePopout }) {
    return (
        <Dialog open={Boolean(master)} onClose={closePopout} aria-labelledby="popout-dialog-title">
            <DialogTitle id="popout-dialog-title">
                {master?.name}
                <IconButton
                    aria-label="close"
                    onClick={closePopout}
                    style={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <List>
                    {master?.features.map((feature, index) => (
                        <ListItem key={index}> Специализация{index+1}: {feature}</ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
}

export default Popout;