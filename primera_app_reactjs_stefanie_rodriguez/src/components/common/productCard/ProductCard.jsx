import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ItemCountContainer } from "../itemCount/ItemCountContainer";
import { Link } from "react-router-dom";


export const ProductCard = ({ id, Titulo, Price, Description, Image, onAdd}) => {
    return (
    <div>
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                alt=""
                height="400"
                image={Image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {Titulo}<br></br>{Description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${Price}
                </Typography>
            </CardContent>
            <CardActions>
            <ItemCountContainer productId={id}/>
            <Button variant="contained"  onClick={()=>onAdd(counter)} endIcon={<AddShoppingCartIcon />}>Agregar al carrito
</Button>
<Link to={`/item/${id}`}>
<Button variant="contained">Detalles</Button>
</Link>
            </CardActions>
        </Card>
    </div>
    )
}