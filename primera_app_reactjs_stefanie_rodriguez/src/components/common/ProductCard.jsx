import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const ProductCard = ({Titulo, Id, Price, Description}) => {
    return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {Titulo}<br></br>{Description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>
    )
}