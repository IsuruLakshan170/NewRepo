import { React, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Lobby.css';
import LeftNev2 from './LeftNev2';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfiles, NewProfile } from '../services/profiles';
import './Fotter.css';
import Fotter from './Fotter';

const Lobby = ({ joinRoom }) => {
    const [user, setUser] = useState();
    const [room, setRoom] = useState();


    const dispatch = useDispatch();
    const profiles = useSelector(state => state.profilesSlice.profiles);

    useEffect(() => {
        GetProfiles(dispatch);
    }, []);



    return (
        profiles.map(e =>
      
           <div key={e.id}>



          


        
        <div>
      
        <div className="onee">
                 <div className="ChatLogin">
            
                 <LeftNev2/>
          
                  <div className="right">
                    
             
    <div className="ChatArea">
    
    <Form className='lobby2'
        onSubmit={e => {
            e.preventDefault();
            joinRoom(user, room);
        }} >
            <div className='chatLog'>
            <lable  className='Stu'>Etenter the student Id</lable>
            <input className='deta' placeholder="Enter student Id" onChange={e => setRoom(e.target.value)} />
            </div>

        
            <div className='chatLog'>
                 <Button className='Join'   type="submit" disabled={!room} onClick={() => setUser(e.title +". " + e.firstname +" " +e.lastname)}  >Join</Button>
         
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
    )
    
    
    )
   

}













export default Lobby;