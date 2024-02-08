import { Greeting } from "../common/Greeting"
import { ProductCard } from "../common/ProductCard"

export const ItemListContainer = ()=>{
    return <div>
        <Greeting />
        <h4>Listado de productos:</h4>
        <ProductCard Titulo={"Remera"} Price = {"$2500"} Description = {"Elaborada en algodón"}/>
        <ProductCard/>
        <ProductCard/>
    </div>
}
