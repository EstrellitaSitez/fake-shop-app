import { useEffect, useState } from "react"
import ProductsContainer from "./ProductsContainer"
import ShoppingBagImg from './shoppingBagsImage.jpeg'

import CircularProgress from '@mui/material/CircularProgress';

export default function HomePage(){

    const [products, setProducts] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
    useEffect(()=>{
        if (products == null){
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
            .catch(err => setError(err))
        }

        if ((products != null)|| (error != null)){
            setLoading(false)
        }
    }, [products, error, isLoading])

    const imgStyle= {width: '95vw', height:'80vh'}




    return(
        <div style={{textAlign:'center'}}>
          
          <div style={{width:'fit-content', height:'fit-content',marginLeft:'auto', marginRight:'auto'}}>
                        <img style={imgStyle} src={ShoppingBagImg} alt='shopping image' />
                        </div>
          
               
       
            {
                isLoading === false?
                    <>
                        {
                            error == null?
                                   
                                 <ProductsContainer products = {products}/>     
                              
                                :
                                'Products not available at this time'
                        }
                    </>
                    :
                    <CircularProgress />
            }
     
        </div>
    )
}