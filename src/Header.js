import { ThemeProvider } from "@emotion/react"
import { Typography, createTheme, Button} from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import UserContext from "./UserContext"

// in the header, we want to show "LogIn if there is no token in the local storage"
export default function Header(){
    let navigate = useNavigate()

    const linkStyle = {
        textDecoration:'none', 
        fontWeight:'bolder',
        color:'white',
        marginRight:'3%',
        marginLeft: '3%',
       
    }

    const theme = createTheme({
        typography: {
            fontFamily: 'Smooch Sans'
                        
        }
    })




    return(
        <ThemeProvider theme={theme}>
        <div  style= {{textAlign: 'center', alignItems:'center'}}>
             <Link style={{ textDecoration:'none', color:'black'}} to='/'><Typography className='header-container' variant="h1"> The FAKE Store</Typography></Link>
             <div style={{backgroundColor:'black', maxWidth:'100vw', margin:'auto', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <HashLink  style={linkStyle} to='/#products'>
                        <Button  style={linkStyle}>
                        <Typography variant='h5'>Products</Typography>
                        </Button>
                    </HashLink>
                    <Typography style={{color:'white'}} variant='h6'>||</Typography>
            
             <UserContext.Consumer>
                 {
                     ({user, logOut}) => (
                       ( user == null )?
                        
                             <Button style={linkStyle} onClick={()=> navigate('/login')}>
                                <Typography variant='h5'>Log In</Typography>
                            </Button>

                        :

                               <Button style={linkStyle} onClick={logOut}>
                                    <Typography variant='h5'>Log Out</Typography>
                                </Button>
       
                    )
                 }
             </UserContext.Consumer>
            
            </div>
            
        </div>
        </ThemeProvider>
    )
} 
  