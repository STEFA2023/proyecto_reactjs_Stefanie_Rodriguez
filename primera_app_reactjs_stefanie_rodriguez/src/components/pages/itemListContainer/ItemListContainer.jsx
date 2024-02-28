import { Greeting } from "../../common/greeting/Greeting"
import { ProductCard } from "../../common/productCard/ProductCard"

export const ItemListContainer = ()=>{
    return <div>
        <Greeting />
        <h4>Listado de productos:</h4>
        <ProductCard Titulo={"Remera"} Price = {"$2500"} Description = {"Elaborada en algodón"} Id={1}/>
        <ProductCard Titulo={"Pantalón"} Price={"$1800"} Description={"Elaborado en gabardina"} Id={2}/>
        <ProductCard Titulo={"Zapatos"} Price={"$3500"} Description={"Elaborados con suela ortopédica"}Id={3}/>
    </div>
}
