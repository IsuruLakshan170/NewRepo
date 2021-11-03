import ProfileList from './ProfileList';
import ProfileForm from './ProfileForm';
import Fotter from './Fotter';
import './Fotter.css';
import { React, useEffect, useContext ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import LeftNev from './LeftNev';
import { Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './profile.css';

import { LoginContext } from "../Helper/Context";


const Profile = ({ profile, setIsEditing })=> {

    const {loggedIn,setLoggedIn}= useContext(LoginContext);
    const dispatch = useDispatch();

 


  const [isCreates, setIsCreateNew] = useState(false);
    return (
      <div className="one">
               <div className="dashboad2"> 
        <LeftNev/>
                <div className="right">

                <ToastContainer  />


                  <ProfileList setIsCreateNew={!isCreates}>
                  
                  </ProfileList>



  { !loggedIn
        ? <div><ProfileForm  />
        
        </div>

        :<div className="createBtn">
            
            
              
     
            </div>

    } 
      

                    </div>
          </div>
         
                
   <div className="two">
            <div className="FotterBack">
                  
              <Fotter/>
           </div>
        </div>




     </div>
);
}

export default Profile;


