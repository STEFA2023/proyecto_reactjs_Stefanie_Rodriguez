import CartWidget from "../../common/cartWidget/CartWidget";

export const Navbar = ()=>{
    return <nav>
        <h3>Logo</h3>
        <ul>
            <li>Productos</li>
            <li>Categorias</li>
            <li>Sucursales</li>
            <h4>Carrito</h4>
            <CartWidget />
        </ul>
    </nav>
}