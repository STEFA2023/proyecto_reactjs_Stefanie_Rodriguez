import { Button } from '@mui/material';
import CartWidgetContainer from '../../common/cartWidget/CartWidgetContainer';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import StoreIcon from '@mui/icons-material/Store';

const navItems = ['Todo', 'Sport', 'Formal'];

export const Navbarpresentacional = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#86469C' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <StoreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Link to= "/" style={{ textDecoration: 'none' }} >
                    <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "#FFCDEA"}}
            >
            Ventas Web
            </Typography>
            </Link>
                    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                        {navItems.map((navItems) => (
                            <Button
                                key={navItems}
                                sx={{ my: 2, mx: 8, color: "#FFCDEA" }}
                                component={Link}
                                to={`/category/${navItems.toLowerCase()}`}
                            >
                                {navItems}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Link to="/cart">
                            <CartWidgetContainer />
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
