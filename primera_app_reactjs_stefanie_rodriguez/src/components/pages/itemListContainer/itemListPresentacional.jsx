import { ProductCard } from "../../common/productCard/ProductCard";

export const ItemListPresentacional = () => {
    return (
        <div><h4>Listado de productos:</h4>
        <ProductCard Titulo={"Remera"} Price={"$2500"} Description={"Elaborada en algodón"} Id={1} Stock={5}/>
        <ProductCard Titulo={"Pantalón"} Price={"$1800"} Description={"Elaborado en gabardina"} Id={2} Stock={3} />
        <ProductCard Titulo={"Zapatos"} Price={"$3500"} Description={"Elaborados con suela ortopédica"} Id={3} Stock={7}/></div>
    )
};

export default ItemListPresentacional;
