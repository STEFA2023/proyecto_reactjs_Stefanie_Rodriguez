import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";

export const Navbar = ()=>{
    return <nav>
        <h3>Logo</h3>
        <ul>
            <li>Productos</li>
            <li>Categorias</li>
            <li>Sucursales</li>
            <h4>Carrito</h4>
            <CartWidgetContainer />
        </ul>
    </nav>
}