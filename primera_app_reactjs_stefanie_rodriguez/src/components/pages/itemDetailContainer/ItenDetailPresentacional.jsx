import { ProductCard } from "../../common/productCard/ProductCard";
import ItemCountContainer from "../../common/itemCount/ItemCountContainer";

export const ItemDetailPresentacional = ({ id, Titulo, Price, Description, Image, onAdd}) => {
    return (
        <div>
            <ProductCard
            id= {id}
            Titulo={Titulo}
            Price={Price}
            Description={Description}
            Image={Image}
            onAdd={onAdd}
            />
            <ItemCountContainer
            onAdd={onAdd}
            />
        </div>
    );
};
