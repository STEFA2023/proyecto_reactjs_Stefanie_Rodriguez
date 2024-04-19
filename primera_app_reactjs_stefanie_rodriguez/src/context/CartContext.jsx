import { createContext, useState } from "react";


export const CartContext = createContext();


const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        
        let exist = existInCart(product.id);

        if(exist) {
            let addToExistence = cart.map((elemento) => {
                if (elemento.id === product.id){
                    return {...elemento, quantity: product.quantity,
                    };
                } else {
                    return elemento;
                }
            });

            setCart(addToExistence);
        } else {
            setCart([...cart, product]);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const existInCart = (id) =>{
        let exist = cart.some((elemento) => elemento.id === id );
        return exist;
    };

    const removeById = (id) =>{
        let removeOfCart = cart.filter((elemento)=> elemento.id !== id)
        setCart(removeOfCart)
    }

    const getTotalItems =()=> {
        let totalItems = cart.reduce((acumulador ,elemento)=>{
            return acumulador + elemento.quantity
        }, 0)
        return totalItems
    }

    const getTotalPrice = ()=>{
        let totalShopping = cart.reduce((acumulador, elemento) => {
            return acumulador + (elemento.quantity * elemento.price)
        }, 0)

        return totalShopping
    }

    const getTotalItemsById = (id) =>{
        let product = cart.find((elemento)=> elemento.id === id)

        if(product){
            return product.quantity
        } else {}
        return product
    }

    let data  ={
        cart,
        addToCart,
        clearCart,
        removeById,
        getTotalItems,
        getTotalPrice,
        getTotalItemsById
    };

    return <CartContext.Provider value={ data }>
        {children}
    </CartContext.Provider>;
};

export default CartContextProvider;