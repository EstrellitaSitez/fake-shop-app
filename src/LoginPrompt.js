import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LoginPrompt({handleClose, loginPromptShowing}){
    return (
        <Dialog
        open={loginPromptShowing}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Want to add this item to your cart?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You must <Link style={{color:'blue'}} to='/login'>Log In</Link> first.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Keep Browsing</Button>
        </DialogActions>
      </Dialog>
    )
}