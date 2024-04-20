import * as React from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { AppBar, Box, IconButton } from '@mui/material';
import { Link } from '@mui/material';



export const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
        <AppBar position="static" sx={{ bgcolor: '#86469C', height: '60px'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', margin: '0 30px' }}>
                    <IconButton sx={{ color: '#FFCDEA' }}>
                        <InstagramIcon />
                    </IconButton>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', margin: '0 30px' }}>
                    <IconButton sx={{ color: '#FFCDEA' }}>
                        <FacebookIcon />
                    </IconButton>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', margin: '0 30px' }}>
                    <IconButton sx={{ color: '#FFCDEA' }}>
                        <XIcon />
                    </IconButton>
                </a>
            </Box>
        </AppBar>
    );
}