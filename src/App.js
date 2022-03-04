import './App.css';
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Header from './Header';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import LoginPage from './LoginPage';
import { useEffect, useState } from 'react';
import UserContext from './UserContext'
import Cart from './Cart';


function App() {
  let navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [cart, setCart] = useState(null)


  const theme = createTheme({
    typography: {
        fontFamily: 'League Gothic'
                    
    }
  })

  useEffect(()=>{
    if((user != null) && (cart == null)){
      fetch('https://fakestoreapi.com/carts/user/'+ user.id)
            .then(res=>res.json())
            .then(json=>
              {
                //order by date, we want the most recent cart
                if (json.length != 0){
                  let newest = json.sort(function(a,b){
                    return new Date(b.date) - new Date(a.date);
                  })[0].products
                  setCart([...newest])
                } else {
                  setCart([])
                }
                
              })
    }
  }, [user, cart])

  const countTotalItems = () => {
    let items = 0
    cart.forEach(item => {
      items += item.quantity
    })
    return items
  }


  const logOut = () => {
    setUser(null)
    setCart(null)
  }

    
  const addToCart = (product) => {
                      //if there is an object with productId = product.id
                      let newCart=[...cart]

                      let found = false
                      for (let i=0; i< newCart.length; i++ ){
                          let prodObj = newCart[i]
                          if(prodObj.productId == product.id){
                              prodObj.quantity +=1
                              found = true
                              break
                          } 
                      }

                      if (found == false) {
                          let prodObj = {productId: product.id, quantity:1}
                          newCart.push(prodObj)
                      }

                      

                      setCart(newCart)
  }

  const value = {
    user: user,
    logOut: logOut,
    cart: cart,
    addToCart: addToCart
  }

  console.log('CART', cart)
  return (
    <UserContext.Provider value={value}>
      <ThemeProvider theme={theme}>
      <Header/>
      {
        user != null ? 
        <div>
          <Typography variant='h5' style={{marginLeft:'4%', display:'inline-block', maxWidth:200}}> Hello, {user.name.firstname.toUpperCase()} </Typography>
          <Button onClick={() => navigate('/cart')} style={{color:'black', float:'right', marginRight:'10%'}}><Typography variant='h5'>cart <ShoppingCartIcon/> {cart!=null ? countTotalItems() : ''} </Typography>  </Button>
        </div>
          :
          null
      }
      <Routes>
        <Route exact={true} path="/" element={<HomePage />} />
        <Route exact={true} path='/product/:id' element={<ProductPage/>} />
        <Route exact={true} path='/login' element={<LoginPage setUser={setUser}/>} />
        <Route exact={true} path='/cart' element={<Cart/>} />
      </Routes>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
