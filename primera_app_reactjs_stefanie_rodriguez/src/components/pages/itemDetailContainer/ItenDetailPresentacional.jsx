import { ProductCard } from "../../common/productCard/ProductCard";
import ItemCountContainer from "../../common/itemCount/ItemCountContainer";

export const ItemDetailPresentacional = ({ id, Titulo, Price, Description, Image, onAdd, initial}) => {
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
            {
                initial? <h2>Ya tiene {initial} en el carrito </h2> : <h4>No tienes unidades</h4>
            }
            <ItemCountContainer
            onAdd={onAdd}
            initial = {initial}
            />
        </div>
    );
};
