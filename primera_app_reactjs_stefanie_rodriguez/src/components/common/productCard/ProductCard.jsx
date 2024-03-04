import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ItemCountContainer } from "../itemCount/ItemCountContainer";

export const ProductCard = ({Titulo, Price, Description, Image}) => {
    return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
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
                <ItemCountContainer/>
                <Button variant="contained" endIcon={<AddShoppingCartIcon />}>Agregar al carrito
</Button>
            </CardActions>
        </Card>
    </div>
    )
}