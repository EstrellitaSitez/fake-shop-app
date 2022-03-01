import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
// in the header, we want to show "LogIn if there is no token in the local storage"
export default function Header(){
    const user = JSON.parse(localStorage.getItem('user'))

    const linkStyle = {
        textDecoration:'none', 
        fontWeight:'bolder',
        color:'white',
        marginRight:'3%',
        marginLeft: '3%'
    }

    return(
        <div style= {{fontFamily:'Smooch Sans', textAlign: 'center', alignItems:'center'}}>
             <Link style={{textDecoration:'none', color:'black'}} to='/'><Typography variant="h1"> The FAKE Store</Typography></Link>
             <div style={{backgroundColor:'black', maxWidth:'93vw', padding:'1%', margin:'auto', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <HashLink style={linkStyle} to='/#products'>
                        <Typography variant='h6'>Products</Typography>
                    </HashLink>
                    <Typography style={{color:'white'}} variant='h6'>||</Typography>
            {
                user == null ?
                    <Link style={linkStyle} to='/login'>
                        <Typography variant='h6'>Log In</Typography>
                        </Link>
                    :
                    <Link style={linkStyle} to='/'>Log Out</Link>
            }
            </div>
        </div>
    )
}