import { Typography, Avatar } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";

export default function LoginForm(props){

    let navigate = useNavigate();

    const action = (selectedUser) => {
        props.setUserId(selectedUser)
    }
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'6%'}}>
          
           <Avatar sx={{ m: 1, bgcolor: 'secondary.main', marginLeft:'auto', marginRight:'auto' }}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h4'> Log In</Typography>
            <div style={{width:'45%', marginTop:'1%' }}>
                 <DropDown label='Select User' options={props.users} action={action}/>
            </div>
           
         
        </div>
    )
}