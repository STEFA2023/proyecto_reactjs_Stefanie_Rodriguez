import { Link } from "react-router-dom";
import { Button} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


export const Cart = () => {

    const {cart, clearCart, removeById} = useContext(CartContext)

    return (
        <div>
            <h1>Carrito</h1>
            {cart.map((product) => (
                <div key={product.id}>
                    <h3>Producto: {product.title}</h3>
                    <img src= {product.img} width="100" ></img>
                    <h4>Cantidad: {product.quantity}</h4>
                    <h4>Precio: {product.price}</h4>
                    <Button variant="contained" onClick={() => removeById(product.id)} >Eliminar Producto</Button>
                    </div>)
            )}
            <Button variant="contained" onClick = {clearCart} >Vaciar carrito</Button>            
            <Link to= "/checkout">
            <Button variant="contained">Finalizar compra</Button>
            </Link>
            </div>
    )
}
