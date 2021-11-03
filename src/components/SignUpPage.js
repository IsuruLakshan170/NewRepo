import { React, useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { SignUp } from '../services/authentication';
import { useDispatch } from 'react-redux';
import ThirdPartySignIns from './ThirdPartySignIns';
import   './SignUp.css';
import   './Fotter.css';

import Fotter from './Fotter';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();


    return (
        <div>
 <div className="Background12">
          
  
    <div className="left1">
    <h1 className="background-left-h1">Welcome</h1>
            <p className="background-left-p1">To Scc High School</p>
            <p className="background-left-p2">Create a account to join with our Community</p>

   
    </div>

     <div className="right2">
          
     <h1 className='create-acount1'>Create an account</h1>
        <hr className='hr1'></hr>
      
        <Form className="form-control1"
            onSubmit={event => {
                event.preventDefault();
                if (password === confirmPassword) {
                    SignUp(dispatch, { username, email, password });
                }
            }}>
          
            <InputGroup className='mb'  >
                <FormControl placeholder='Username' 
                    onChange={event => setUsername(event.target.value)} />
            </InputGroup>
            <InputGroup className='mb'>
                <FormControl placeholder='Email'  
                    onChange={event => setEmail(event.target.value)} />
            </InputGroup>
            <InputGroup className='mb' >
                <FormControl placeholder='Password' type='password' 
                    onChange={event => setPassword(event.target.value)} />
            </InputGroup>
            <InputGroup className='mb'>
                <FormControl placeholder='Confirm Password' type='password'  
                    onChange={event => setConfirmPassword(event.target.value)} />
            </InputGroup>


            <InputGroup id='mb-112'>
            <input type="checkbox"  className="checkbox"
                        
                   />
           
                    <p className="agre">I have accept all the conditions</p>

            </InputGroup>

        <div className="signbtn1">
            <Button type='submit' variant='primary'  
                style={{ margin: 'auto', display: 'block', width: '10rem' }}
                disabled={password !== confirmPassword || password.length <= 0}>Sign Up</Button>
     
         </div>
            
        </Form>

        <ThirdPartySignIns/>
     </div>
     
 </div>  
 <div className="two">
            <div className="FotterBack">
                  
              <Fotter/>
           </div>
        </div>

 </div>
        )
}

export default SignUpPage;