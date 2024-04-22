import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from 'sweetalert2';



export const Cart = () => {

    const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext);

    const totalShopping = getTotalPrice();

    const alertaVaciarCart = () => {

        Swal.fire({
            title: "Deseas vaciar el carrito?",
            icon: "info",
            html: "Si lo haces, se perderá toda la informacion del carrito",
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:`Sí`,
            cancelButtonText: `No`,
        
        }).then((result) => {

            if (result.isConfirmed) {
                clearCart()
                Swal.fire("Eliminado", "", "success");
            } else if (result.isDenied) {
                Swal.fire("El carrito queda como estaba", "", "info");
            }
        });

    };

    return (
        <div style={{ margin: '20px' }}>
            <h1>Carrito</h1>
            {cart.map((product, index) => (
                <div key={index}>
                    <h3>Producto: {product.title}</h3>
                    <img src={product.img} width="100" ></img>
                    <h4>Cantidad: {product.quantity}</h4>
                    <h4>Precio: $ {product.price}</h4>
                    <Button variant="contained" onClick={() => removeById(product.id)} >Eliminar Producto</Button>
                </div>
            ))}
            <h3>El total a pagar es: $ {totalShopping} </h3>
            <Button variant="contained" style={{ margin: '5px' }} onClick={alertaVaciarCart} >Vaciar carrito</Button>
            <Link to="/checkout">
                <Button variant="contained" style={{ margin: '5px' }}>Finalizar compra</Button>
            </Link>
        </div>
    );
};
