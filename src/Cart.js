import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import UserContext from "./UserContext";

export default function Cart() {

    const [total, setTotal] = useState(0)


    const addToTotal = (num) => {
        setTotal(total+num)
    }

    const listProducts = (products) => {
       return products.map((product,i) => {
           return  <CartItem  addToTotal={addToTotal} key={i} productId={product.productId} quantity={product.quantity}/>
        })
    }

    return(
        <UserContext.Consumer>
            {
                ({user, cart}) => (
                    (user != null) ?
                        <div style={{textAlign:'center'}}>
                            {/* <Typography variant='h3' sx={{marginBottom:'3%'}}> CART </Typography> */}
                            {
                                cart != null ?
                                    <div >
                                        {listProducts(cart)}
                                        <Typography variant='h6'>Total: ${total} </Typography>
                                    </div>
                                    :
                                    <Typography variant='h4' sx={{marginTop:'10%'}}>
                                        You have no items in your cart
                                    </Typography>
                            }
                        </div>
                    :

                    <div  style={{textAlign:'center', marginTop: '10%'}}>You must log in to view cart</div>
                )
            }
        </UserContext.Consumer>
    )
}