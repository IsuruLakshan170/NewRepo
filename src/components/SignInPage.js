import { React, useContext,useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { SignIn } from '../services/authentication';
import { useDispatch } from 'react-redux';
import ThirdPartySignIns from './ThirdPartySignIns';

import { LoginContext } from "../Helper/Context";
import './Fotter.css';
import Fotter from './Fotter';
import './Signin.css';
const SignInPage = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const [isChecked,setIsChecked] =useState(false);

    const {loggedIn,setLoggedIn}= useContext(LoginContext);


    return(

        <div className="background12">
         
        


         <div className="left2">

         
                 <h1 className="background-left-h11">Welcome!</h1>
                        
                <p className="background-left-p">to SCC High School</p>

                <p className="background-left-p12">Loging to your accout to experince your services</p>


    </div>
   
     <div className="right3">
         <div className="row4">
            <h1 className="Welcome" >Welcome back</h1>
            <hr className='hr11'></hr>

            </div>
     <div className="row112">
     <Form
            onSubmit={event => {
                event.preventDefault();
                SignIn(dispatch, { username, password });
            }}>

            <InputGroup id='mb-112'>
                <FormControl placeholder='Username'
                    onChange={event => setUsername(event.target.value)} />
            </InputGroup>

            <InputGroup id='mb-112'>
                <FormControl  placeholder='Password' type='password'
                    onChange={event => setPassword(event.target.value)} />
            </InputGroup>
        <div className="divsign">
            <Button  type='submit' variant='primary' style={{ margin: 'auto', display: 'block', width: '10rem' }}>Sign In</Button>
        </div>
        </Form>
       
        <div className="divsign1">
              <ThirdPartySignIns />
        </div>  
       </div>  
 </div> 
 

 

 
   </div> 

   
    )


};

export default SignInPage;

