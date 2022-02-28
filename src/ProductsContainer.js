import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"
import { Typography } from "@mui/material"
import DropDown from "./DropDown"

export default function ProductsContainer(props){

    const [products, setProducts] = useState(props.products)
    const [categories, setCategories] = useState(null)
    
    useEffect(()=>{
        if (categories == null){
            fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>setCategories(data))
        }

    }, [categories, products])


    const makeProductCards = () => {
       return products.map((product)=>{
            return(
               <ProductCard product = {product}/>
            )
        })
    }

    const filterBy = (filter)=>{
        let newList = props.products.filter((product) => product.category == filter)
        console.log("NEW LIST", newList)
        setProducts(newList)
    }

    return(
        <>  
            <div >
            <Typography  style={{margin:'1%'}} variant='h2'>
                Shop
            </Typography>
            <div style={{color:'darkgray', float:'right', marginRight:'2%'}}> 
                <DropDown label='Shop by Category' options={categories} action={filterBy}/> 
            </div>
            <br></br>
            </div>
        <div style={{display:'flex', flextDirection:'row', flexWrap:'wrap', marginTop:'1%', maxWidth:'96vw', marginLeft:'10%',}}>
            {makeProductCards()}
        </div>
        </>
    )
}