import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Link } from '@mui/material';
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
                <Typography variant="h6" style={{ flexGrow: 1 }} className='titleHeader'>
                Учет работы мастеров маникюрного салона
                </Typography>
               
            </Toolbar>
        </AppBar>
    );
}

export default Header;
