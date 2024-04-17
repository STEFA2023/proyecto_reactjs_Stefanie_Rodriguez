import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export const ProductCard = ({ id, Titulo, Price, Description, Image}) => {

    const addToCart = (productId, quantity) => {
        onAdd(productId, quantity);
    };

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
<Link to={`/item/${id}`}>
<Button variant="contained">Detalles</Button>
</Link>
            </CardActions>
        </Card>
    </div>
    )
}