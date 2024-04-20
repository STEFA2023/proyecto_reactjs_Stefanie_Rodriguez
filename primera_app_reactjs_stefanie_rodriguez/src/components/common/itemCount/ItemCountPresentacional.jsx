import { Button, Grid } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCountPresentacional = ({ sumar, restar, counter, onAdd }) => {
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <Button variant="contained" onClick={restar}>-</Button>
            </Grid>
            <Grid item>
                <h4>{counter}</h4>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={sumar}>+</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={() => onAdd(counter)} endIcon={<AddShoppingCartIcon />}>Agregar al carrito</Button>
            </Grid>
        </Grid>
    );
};

export default ItemCountPresentacional;
