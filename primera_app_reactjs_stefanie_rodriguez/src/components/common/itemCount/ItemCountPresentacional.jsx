import {Button} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCountPresentacional = ({sumar, restar, counter, onAdd}) => {
    return (
    <div>
        <button onClick={restar}>-</button>
        <h4> {counter} </h4>
        <button onClick={sumar}>+</button>
        <Button variant="contained" onClick={() => onAdd(counter)} endIcon={<AddShoppingCartIcon />}>Agregar al carrito
</Button>       
    </div>
    );
};


export default ItemCountPresentacional;