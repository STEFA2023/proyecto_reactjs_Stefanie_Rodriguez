import { ProductCard } from "../../common/productCard/ProductCard";

const ItemListPresentacional = ({items}) => {

    return (
    <div>
        {       
        items.map( (item)=>{
            return (
                <div key={item.id}>
            <ProductCard  Image={item.img} Titulo={item.title} Price={item.price} Description={item.description} />
            </div>
            )
        }

        )
        }
        </div>
    )
};

export default ItemListPresentacional;
