import { React, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Lobby.css';
import EmployeeList from './EmployeeList'
import './Fotter.css';
import Fotter from './Fotter';

function AddminLoggin ()  {

    const [loggedIn,setLogin]= useState(false);
  
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');
   
    function ClickHandler() {
        
        if(username !='' && password !='')
        {
            if(username =='a' && password =='a')
            {
                setUsername("hello");
                setLogin(true);
            }
        }
        
     }



    return (
      
      
           <div >
  {loggedIn 
        ?<div><EmployeeList/> </div>
       
        :<div>
        <div>
      
        <div className="onee">
                 <div className="ChatLogin">
            
             
          
                  <div className="right">
                    
             
    <div className="ChatArea">
    
    <Form className='lobby2'>
            <div className='chatLog'>
            <lable  className='Stu'> Addmin Username</lable>
            <input className='deta' placeholder="Username" 
             onChange={event => setUsername(event.target.value)} 
              />
            </div>
            <div className='chatLog'>
            <lable  className='Stu'> Addmin Password</lable>
            <input className='deta' placeholder="Password" 
             onChange={event => setPassword(event.target.value)} 
            />
            </div>
        
            <div className='chatLog'>
            <Button id="controller" style={{ marginRight: '2px'}} 
                 onClick={ClickHandler}  >Log in</Button>         
        </div>   
        
        </Form>
             
      </div>
        </div>
     
     </div>
   
     </div>
       
        </div>


        <div className="two">
            <div className="FotterBack">
                  
              <Fotter/>
           </div>
        </div>


        </div>
    }
        
        </div>
    
    
    
    )
   

}













export default AddminLoggin;