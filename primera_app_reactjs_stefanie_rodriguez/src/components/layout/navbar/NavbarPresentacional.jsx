import React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import CartWidgetContainer from '../../common/cartWidget/CartWidgetContainer';
import { Link } from 'react-router-dom';


export const Navbarpresentacional = () => {
    return (
            <Stack spacing={2} direction="row">
                <Link to="/">
                    <Button variant="text">Inicio</Button>
                </Link>
                <Link to="/category/:id">
                    <Button variant="contained">Categorias</Button>
                </Link>
                <Link to="/cart">
                    <CartWidgetContainer />
                </Link>
            </Stack>
    )
}
