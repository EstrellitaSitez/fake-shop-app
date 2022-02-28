import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CardActionArea, CircularProgress } from '@mui/material';

export default function ProductPage(){
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    //fetching product instead of passing it down as prop so that it's still available when url is randomly accessed

    useEffect(()=> {
        if (product == null){
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
            .catch(err => setError(err))
        }

        if ((product != null) ||  (error != null)){
            setLoading(false)
        }

    }, [product, isLoading])

    return(
        <div>
            {
                !isLoading?
                    <>
                    {
                        error == null?
                        
                        <div style={{display:'flex', flexDirection:'row'}}>
                        {/* picture display  */}
                        <div style={{width:'50%', marginLeft:'7%', marginTop:'5%'}}>
                            <img src={product.image} style={{width:'100%'}}/>
                        </div>
                        <Card sx={{ maxWidth: '40%', marginTop:'10%', marginRight:'10%', border:'none', boxShadow:'none'}}>
                        <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div">
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{marginLeft:'2%'}}>
                        <Button style={{backgroundColor:'black', color:'whitesmoke'}}> Add to cart </Button>
                        </CardActions>
                    </CardActionArea>
                    </Card>
                 
                    </div>
                            :
                            "Oops! Looks like there's been an error. Check your internet connection and refresh the page."
                    }
                    </>
                :
                <div style={{width:'100vw', height:'100vh', textAlign:'center'}}>
                <CircularProgress/>
                </div>
            }
        </div>
    )
}