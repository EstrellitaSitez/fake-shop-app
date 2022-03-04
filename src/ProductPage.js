import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "./UserContext";

import { CircularProgress} from '@mui/material';
import LoginPrompt from "./LoginPrompt";
import ProductCard from "./ProductCard";


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
                        
                        <UserContext.Consumer>
                            {
                                ({user, addToCart}) => (
                                    <ProductCard 
                                        context = 'product page' 
                                        handleClick={()=>{
                                            if(user == null){
                                                showLoginPrompt(true)
                                            } else{
                                                addToCart(product)
                                            }
                                        }} 
                                        product = {product}/>
                            
                                )
                        }
                        </UserContext.Consumer>
                      
                        
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