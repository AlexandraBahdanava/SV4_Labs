import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <AppBar position="static">
            <Toolbar className='toolbar'>
                <Drawer
                    anchor="left"
                    open={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                >
                    <List>
                        <ListItem component={RouterLink} to="/" onClick={() => setIsMenuOpen(false)}>
                            <ListItemText primary="Главная" />
                        </ListItem>
                        <ListItem component={RouterLink} to="/master" onClick={() => setIsMenuOpen(false)}>
                            <ListItemText primary="Мастера" />
                        </ListItem>
                        <ListItem component={RouterLink} to="/openinghours" onClick={() => setIsMenuOpen(false)}>
                            <ListItemText primary="График работы" />
                        </ListItem>
                        <ListItem component={RouterLink} to="/appointmentform" onClick={() => setIsMenuOpen(false)}>
                            <ListItemText primary="Записаться" />
                        </ListItem>
                        <ListItem component={RouterLink} to="/record" onClick={() => setIsMenuOpen(false)}>
                            <ListItemText primary="Мои записи" />
                        </ListItem>
                    </List>
                </Drawer>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuToggle}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }} className='titleHeader'>
                Учет работы мастеров маникюрного салона
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
