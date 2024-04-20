import { ProductCard } from "../../common/productCard/ProductCard";
import ItemCountContainer from "../../common/itemCount/ItemCountContainer";

export const ItemDetailPresentacional = ({ id, Titulo, Price, Description, Image, onAdd, initial}) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <ProductCard
            id= {id}
            Titulo={Titulo}
            Price={Price}
            Description={Description}
            Image={Image}
            onAdd={onAdd}
            />
            {
                initial? <h3>Ya tiene {initial} en el carrito </h3> : <h3>No tienes unidades</h3>
            }
            <ItemCountContainer
            onAdd={onAdd}
            initial = {initial}
            />
        </div>
    );
};
