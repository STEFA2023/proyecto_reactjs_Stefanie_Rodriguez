import { ProductCard } from "../../common/productCard/ProductCard";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ItemListPresentacional = ({items}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div>   
                <h3>Listado de productos:</h3>
                <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid item xs={6} sm={3} key={item.id}>
                        <ProductCard 
                            id={item.id} 
                            Image={item.img} 
                            Titulo={item.title} 
                            Price={item.price}
                            button={ 
                                <Link to={`/item/${item.id}`}>
                                    <Button variant="contained">Detalles</Button>
                                </Link>
                            } 
                        />
                    </Grid>
                    
                ))}
                </Grid>
        </div>
    </div>
    );
};

export default ItemListPresentacional;