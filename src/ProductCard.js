import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ProductCard(props){
    let product = props.product


    console.log(product)

    return(
        <div style={{width:'33%', marginBottom:'1%'}}>
            <Link to={'/product/'+ product.id} >
               <Card sx={{ maxWidth: 345, padding:'5%' }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="400"
                        image={product.image}
                        alt={product.title}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div">
                            {product.title}
                        </Typography>
                        <Rating name="read-only" value={product.rating.rate} readOnly />
                    </CardContent>
                    </CardActionArea>
                 </Card>
             </Link>
        </div>
    )
}