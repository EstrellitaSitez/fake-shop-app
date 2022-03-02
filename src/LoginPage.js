import { useEffect, useState } from "react"
import { CircularProgress, Typography } from "@mui/material"
import LoginForm from "./LoginForm"
import UserContext from "./UserContext"


export default function LoginPage(props){

    const [users, setUsers] = useState(null)
    const [userId, setUserId] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        if (users == null){
            fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>setUsers(json))
        } else {
            setLoading(false)
        }

        if (userId != null){
            fetch('https://fakestoreapi.com/users/'+ userId)
            .then(res=>res.json())
            .then(json=>props.setUser(json))
        }

    }, [users, userId])

   

    return(
        <div style={{textAlign:'center'}}> 
            {
                isLoading?
                    <CircularProgress/>

                :

                <UserContext.Consumer>
                {
                    ({user}) => (
                      ( user == null )?
                          
                      <LoginForm users={users} setUserId={setUserId}/>
                           
                       :
                           <Typography variant='h5' sx={{marginTop:'10%'}}>
                               You've logged in as {user.username}.
                           </Typography>
                           
                   )
                }
                </UserContext.Consumer>

                  
            }
        
        </div>
      
    )
}
// idea drop down of users -- choose what user to login as