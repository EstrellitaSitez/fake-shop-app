import { CircularProgress, Typography, Button } from "@mui/material"
import { useEffect, useState } from "react"
import UserContext from "./UserContext"

export default function CartItem({productId, quantity, addToTotal}){

    const [product, setProduct] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
        if (product == null){
            fetch('https://fakestoreapi.com/products/' + productId)
            .then(res=>res.json())
            .then(json=>setProduct(json))
        } else {
            setLoading(false)
            addToTotal(product.price * quantity)
        }

    }, [product])

    return(
        <div style={{borderBottom: '1px dotted black', width:'40%', marginLeft:'auto', marginRight:'auto', marginTop:'1%', padding:'2%'}}>   
            {
                isLoading?
                    <CircularProgress/>
                :

                            <div style={{display:'flex', flexDirection:'row'}}>
                        <img style={{width:'50%', height: '75%'}} src={product.image} alt={product.title}/>
                        <div style={{display:'flex', flexDirection:'column'}} >
                            <Typography variant='h4'> {product.title} </Typography>
                            <Typography variant='h5'> Quantity: {quantity} x ${product.price}</Typography>
                            <Typography variant='h6'> total: ${product.price * quantity} </Typography>
                        </div>
                    </div>
     
            }
        </div>
    )
}