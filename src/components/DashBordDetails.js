import { React, useEffect, useContext ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfiles, NewProfile } from '../services/profiles';
import { Button, Row, Col } from 'react-bootstrap';
import CommonProfileWindow from './CommonProfileWindow';
import './Dashboard.css';
import { LoginContext } from "../Helper/Context";
import Dashboard from './CommonProfileWindow';


const ProfileList = () => {

    

    const dispatch = useDispatch();
    const profiles = useSelector(state => state.profilesSlice.profiles);

    useEffect(() => {
     
        GetProfiles(dispatch);

    }, [profiles]);



    return( profiles.map(e =>
      
      <div className="userD" key={e.id} >
         <h3 className="Userdetail"> Hello..{e.title} {e.firstname} {e.lastname}</h3>
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

    const [isCheck, setIsCheck] = useState(profile.id);

    return( 
        <div></div>
    )

}











export default ProfileList;

/* <Col className="column">{profile.firstname}</Col>
                <Col className="column">{profile.lastname}</Col>

                <Col>Teacher/Student{profile.teacherstudentid}</Col>

                */


