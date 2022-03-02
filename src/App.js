import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import LoginPage from './LoginPage';
import { createTheme, ThemeProvider, Button, Typography } from "@mui/material"
import { useEffect, useState } from 'react';
import UserContext from './UserContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {

  const [user, setUser] = useState(null)
  const [cart, setCart] = useState(null)

  useEffect(()=>{
    if((user != null) && (cart == null)){
      fetch('https://fakestoreapi.com/carts/user/'+ user.id)
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
  })

  const theme = createTheme({
    typography: {
        fontFamily: 'League Gothic'
                    
    }
  })

  const logOut = () => {
    setUser(null)
  }

  const value = {
    user: user,
    logOut: logOut
  }

  console.log(user)
  return (
    <UserContext.Provider value={value}>
      <ThemeProvider theme={theme}>
      <Header/>
      {
        user != null ? 
          <div>
          <Button style={{color:'black', float:'right', marginRight:'10%'}}><Typography variant='h5'>cart</Typography>  </Button>
          </div>
          :
          null
      }
      <Routes>
        <Route exact={true} path="/" element={<HomePage />} />
        <Route exact={true} path='/product/:id' element={<ProductPage/>} />
        <Route exact={true} path='/login' element={<LoginPage setUser={setUser}/>} />
      </Routes>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
