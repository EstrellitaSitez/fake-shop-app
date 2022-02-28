import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
// in the header, we want to show "LogIn if there is no token in the local storage"
export default function Header(){
    const user = JSON.parse(localStorage.getItem('user'))

    const linkStyle = {
        textDecoration:'none', 
        fontWeight:'bolder',
        color:'white'
    }

    return(
        <div style= {{fontFamily:'Smooch Sans', textAlign: 'center', alignItems:'center'}}>
             <Link style={{textDecoration:'none', color:'black'}} to='/'><Typography variant="h1"> The FAKE Store</Typography></Link>
             <div style={{backgroundColor:'black', maxWidth:'93vw', padding:'1%', margin:'auto'}}>
            {
                user == null ?
                    <Link style={linkStyle} to='/'>Log In</Link>
                    :
                    <Link style={linkStyle} to='/'>Log Out</Link>
            }
            </div>
        </div>
    )
}