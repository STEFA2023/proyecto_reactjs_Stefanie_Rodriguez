import { ProductCard } from "../common/productCard/ProductCard"

export const ItemDetail = ({ id, Titulo, Price, Description, Image}) => {
    return (
        <div>
            <ProductCard
            id= {id}
            Titulo={Titulo}
            Price={Price}
            Description={Description}
            Image={Image}
            />
        </div>
    );
};
