import { ProductCard } from "../../common/productCard/ProductCard";

const ItemListPresentacional = ({items}) => {
    return (
        <div>   
            <h1>Primera app ReactJs</h1>
            <h4>Listado de productos:</h4>
            {items.map((item) => (
                <div key={item.id}>
                    <ProductCard 
                        id={item.id} 
                        Image={item.img} 
                        Titulo={item.title} 
                        Price={item.price} 
                        Description={item.description} 
                    />
                </div>
            ))}
        </div>
    );
};

export default ItemListPresentacional;