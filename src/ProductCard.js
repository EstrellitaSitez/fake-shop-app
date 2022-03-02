import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating , CardActions, Button} from '@mui/material';
import { Link } from 'react-router-dom';


export default function ProductCard(props){
    let product = props.product
    let handleClick = props.handleClick



    return(
        <>  
        {
            props.context == 'homepage'?
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
        :
        <Card sx={{ maxWidth: '40%', marginTop:'10%', marginRight:'10%', border:'none', boxShadow:'none'}}>
                        <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                {product.title}
                            </Typography>
                            <Rating style={{marginBottom:'2%'}} name="read-only" value={product.rating.rate} readOnly />
                            <Typography gutterBottom variant="h6" component="div">
                                {product.description}
                            </Typography>
                            <Typography variant='h5'>
                                ${product.price}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{marginLeft:'2%'}}>
                        <Button onClick={handleClick} style={{backgroundColor:'black', color:'whitesmoke'}}> Add to cart </Button>
                        </CardActions>
                    </CardActionArea>
                    </Card>
        }
        </>

    )
}