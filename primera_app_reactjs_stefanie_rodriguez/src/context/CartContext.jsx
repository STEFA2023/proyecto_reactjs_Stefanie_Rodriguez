import { createContext, useState } from "react"


export const CartContext = createContext()


const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        
        let exist = existInCart(product.id)

        if(exist) {
            let addToExistece = cart.map((elemento) => {
                if (elemento.id === product.id){
                    return {...elemento, quantity: elemento.quantity + product.quantity}
                } else {
                    return elemento
                }
            })

            setCart(addToExistece)

        } else {
            setCart([...cart, product])
        }
    };

    const clearCart = () => {
        setCart([])
    };

    const existInCart = (id) =>{
        let exist = cart.some((element) => element.id === id )
        return exist
    };

    const removeById = (id) =>{
        let removeOfCart = cart.filter((elemento)=> elemento.id !== id)
        setCart(removeOfCart)
    }

    let data={
        cart,
        addToCart,
        clearCart,
        removeById
    }

    return <CartContext.Provider value={ data }>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider