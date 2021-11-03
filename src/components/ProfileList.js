import { React, useEffect, useContext ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfiles, NewProfile } from '../services/profiles';
import { Button, Row, Col } from 'react-bootstrap';
import CommonProfileWindow from './CommonProfileWindow';
import ProfileForm from './ProfileForm';
import './Fotter.css';
import { LoginContext } from "../Helper/Context";

import './ProfileList.css';


const ProfileList = () => {
        return(
           <div>
              
            <ProfileList1/>

           </div>
        );
}



const ProfileList1 = () => {
    
    const dispatch = useDispatch();
    const profiles = useSelector(state => state.profilesSlice.profiles);

    useEffect(() => {
        GetProfiles(dispatch);
    }, []);

    return( profiles.map(e =>
      
      <div key={e.id} style={{ marginBottom: '1rem' }}>
          
        
     <ListRow profile={e} />
           
        </div>
    )
     
        

    );
}









    const ListRow = ({ profile }) => {
        
        const {loggedIn,setLoggedIn}= useContext(LoginContext);

        const dispatch = useDispatch();

        useEffect(() => {
            
             setLoggedIn(true);
    
        }, []);
    const [isEditing, setIsEditing] = useState(true);
    const [isCheck, setIsCheck] = useState(profile.id);

    return( (isCheck !== 0)
        ? <div>
            
            <CommonProfileWindow profile={profile} setIsEditing={setIsEditing} />
        
        </div>
       
        :<div><h1>he</h1></div>
    )

}












export default ProfileList;

/* <Col className="column">{profile.firstname}</Col>
                <Col className="column">{profile.lastname}</Col>

                <Col>Teacher/Student{profile.teacherstudentid}</Col>

                */


