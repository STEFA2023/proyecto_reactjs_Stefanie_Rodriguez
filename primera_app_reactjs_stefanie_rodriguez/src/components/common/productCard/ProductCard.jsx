import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from "@mui/material";


export const ProductCard = ({ id, Titulo, Price, Description, Image, button }) => {

    const addToCart = (productId, quantity) => {
        onAdd(productId, quantity);
    };

    return (
        <div>
            <Card sx={{ maxWidth: 400, bgcolor: "#FFCDEA" }}>
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
                        {button}
                    </CardActions>
                </Card>
        </div>
    )
}