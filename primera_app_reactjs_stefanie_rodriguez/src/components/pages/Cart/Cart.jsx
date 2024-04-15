import { Link } from "react-router-dom";
import { Button} from "@mui/material";


export const Cart = () => {
    return (
        <div>
            <h1>Cart</h1>
            <Link to= "/checkout">
            <Button variant="contained">Finalizar compra</Button>
            </Link>
            </div>
    )
}
