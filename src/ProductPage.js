import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CardActionArea, CircularProgress, Rating} from '@mui/material';
import LoginPrompt from "./LoginPrompt";

export default function ProductPage(){
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [loginPromptShowing, showLoginPrompt] = useState(false)
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

    const handleClick = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user == null){
            showLoginPrompt(true)
        }
    }

    const handleClose =()=> {
        showLoginPrompt(false)
    }

    return(
        <div>
            {
                !isLoading?
                    <>
                    {
                        error == null?
                        
                        <div style={{display:'flex', flexDirection:'row'}}>
                        {/* picture display  */}
                        <div style={{width:'50%', height:'70vh', marginLeft:'7%', marginTop:'5%'}}>
                            <img src={product.image} style={{width:'100%', height:'100%'}}/>
                        </div>
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
            {
                showLoginPrompt?
                    <LoginPrompt loginPromptShowing={loginPromptShowing} handleClose={handleClose}/>
                    :
                    ''
            }
 
        </div>
    )
}