import React from "react";
import './LeftNev.css';
import { useSelector, useDispatch } from 'react-redux';
import welcome_content from '../images/home-content-2.jpg';
import { Nav, Button ,button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from '../app/authenticationSlice';

const LeftNev = () => {

    const { isLoggedIn } = useSelector(state => state.authenticationSlice);
    const dispatch = useDispatch();

    return(
       
       
    <div className="leftNev">
    <Button  id="left-bar-dashboard1"  variant='link' href='/dashboard' >Dashboard</Button>
  
   <Button id="left-bar-button1"  variant='link' href='/message' >Message</Button>
   <Button id="left-bar-button1"  variant='link' href='/profile' >Profile</Button>


   <Button id="left-bar-button1"  variant='link'  href='/signin' onClick={() => { dispatch(logout()) }}>Logout</Button>
   


   

</div>





               
       
 
    
    
);
    };

export default LeftNev;