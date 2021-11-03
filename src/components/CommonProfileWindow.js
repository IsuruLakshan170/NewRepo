import { React, useContext,useState, useEffect,components } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import {EnableProfile,DissableProfile, EditProfile, NewProfile, DeleteProfile } from '../services/profiles';
import { useDispatch } from 'react-redux';
import { LoginContext } from "../Helper/Context";

import './ProfileForm.css';
import axios from 'axios';



const ProfileFormCommon = ({ profile, setIsEditing }) => {
    
    const {loggedIn,setLoggedIn}= useContext(LoginContext);
    const [isDisable, setIsDisable] = useState(true);

    function ClickHandler() {
        
       // window.location.reload(true);
        setLoggedIn(false);
        DeleteProfile(dispatch, profile);
        
    }

    function ClickHandlerEnable() {
        if(isDisable ==true){
            setIsDisable(false);
            EnableProfile(dispatch, profile);
        }
        else{
            setIsDisable(true);
            DissableProfile(dispatch, profile);
        }
         
     }
     function CancelClickHandler() {
        
        <a href='/dashboard'>click</a>
        
        
     
         
     }
 


    const [userInfo, setuserInfo] = useState({
        file:[],
        filepreview:null,
    });

    const handleInputChange = (event) => {
        setuserInfo({
        ...userInfo,
        file:event.target.files[0],
        filepreview:URL.createObjectURL(event.target.files[0]),
        });
    }
    const [isSucces, setSuccess] = useState(null);
    

    const[title,setTitle]=useState('');
    const[position,setPosition]=useState('');
    const[gender,setGender]=useState('Male');

    const [amount, setAmount] = useState(0);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [address, setAddress] = useState('');
    const [teacherstudentid, setTeacherstudentid] = useState('');
    const [studentclass, setStudentclass] = useState('');



    const [isNewProfile, setIsNewProfile] = useState(false);
    const [isDeleteClick, setIsDeleteClick] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(profile !== undefined) {
            setIsNewProfile(false);

            setTitle(profile.title);
            setPosition(profile.position);
            setGender(profile.gender);
            setFirstname(profile.firstname);
            setLastname(profile.lastname);
            setEmail(profile.email);
            setPhoneno(profile.phoneno);
            setAddress(profile.address);
            setTeacherstudentid(profile.teacherstudentid);
            setStudentclass(profile.studentclass);
            setAmount(profile.amount);

           

        }
        else {
            setIsNewProfile(true);
        }
    }, [profile]);

    return <Form
        onSubmit={event => {
            event.preventDefault();
            if(isNewProfile ==true) {
              // setIsNewProfile(true);
             
            }

            if(isNewProfile ==false)  {
                EditProfile(dispatch, {id: profile.id,firstname: firstname ,gender:gender, title:title,position:position, lastname :lastname, email : email , phoneno: phoneno , address: address,teacherstudentid:teacherstudentid, studentclass :studentclass });
           
            }
          
            
        }}



    >
    
    <div>


    
    <div className="right-box">
        <h1 className="box-h"> Profile</h1>
    <hr className="hrr"></hr>


    <div className="userprofile">

    <div className="container-profile">
         

  
        </div>

        
             </div>


            <div className="recode-data-reg">

           
            <div className="txt-row-reg">
                        <label className="lbl-txt">Title</label>
                        <select value={title} className="form-control" disabled={isDisable}
                        
                         onChange={event => {setTitle(event.target.value)}}>
                               <option value ="--Please select--">--Please select--</option>
                                <option value ="Mr">Mr</option>
                                <option value ="Mrs">Mrs</option>
                                <option value ="Miss">Miss</option>
                                <option value ="Dr">Dr</option>
                         </select>

                    </div>







                 <div className="txt-row-reg">
                        <label className="lbl-txt">First Name</label>
        
                     <input disabled={isDisable}
                        className="form-control"
                        type="firstname"
                        name="firstname"
                         id="form-control"
                      
                         placeholder={firstname}
                         onChange={event => setFirstname(event.target.value)}
                        />
                    </div>


                    <div className="txt-row-reg">
                        <label className="lbl-txt">Last Name</label>
        
                     <input disabled={isDisable}
                        className="form-control"
                        type="LastName"
                        name="LastName"
                         id="form-control"
                         placeholder={lastname}
                         onChange={event => setLastname(event.target.value)}  
                        />
                    </div>
                    <div className="txt-row-reg">
                        <label className="lbl-txt">Email </label>
        
                        <input disabled={isDisable}
                        className="form-control"
                        type="email"
                        name="email"
                         id="form-control"
                         placeholder={email}
                         onChange={event => setEmail(event.target.value)}/>
                    </div>
                  
                    <div className="txt-row-reg">
                    <label className="lbl-txt">Gender</label>
                        <div className="radio-vertical"> 

                   <div className="radio-btn"> 

                   <label className="lbl-radio">Male</label>

                       <input 
                        className="radio"
                        type="radio"
                        checked={gender === "Male"}
                        value ="Male"
                      
                        onChange={event=>{setGender(event.target.value)}}/>
              

                 </div > 

                <div className="radio-btn"> 

                <label className="lbl-radio">Female</label>

                <input disabled={isDisable}
                        className="radio"
                        type="radio"
                        checked={gender === "Female"}
                        value ="Female"
                      
                        onChange={event=>{setGender(event.target.value)}}/>
                    </div > 
                   </div > 
            </div>

                    <div className="txt-row-reg">
                        <label className="lbl-txt">Phone No</label>
        
                     <input disabled={isDisable}
                        className="form-control"
                        type="phoneNo"
                        name="phoneNo"
                         id="form-control"
                         placeholder={phoneno}
                         onChange={event => setPhoneno(event.target.value)}
                         />
                    </div>
                    <div className="txt-row-reg">
                        <label className="lbl-txt">Address</label>
        
                     <input disabled={isDisable}
                        className="form-control"
                        type="address"
                        name="address"
                         id="form-control"
                         placeholder={address}
                         onChange={event => setAddress(event.target.value)}/>
                    </div>


                    <div className="txt-row-reg">
                        <label className="lbl-txt">Register as </label>
                        <select value={position} className="form-control" disabled={isDisable}
                        
                         onChange={event => {setPosition(event.target.value)}}>
                                <option value ="--Please select--">--Please select--</option>
                                <option value ="Teacher">Teacher</option>
                                <option value ="Parent">Parent</option>

                         </select>

                    </div>


                    <div className="txt-row-reg">
                        <label className="lbl-txt">{position} ID </label>
        
                        <input disabled={isDisable}
                        className="form-control"
                        type="teacherstudentid"
                        name="teacherstudentid"
                         id="form-control"
                         placeholder={teacherstudentid}
                         onChange={event => setTeacherstudentid(event.target.value)}/>
                    </div>



                    <div className="txt-row-reg">
                        <label className="lbl-txt">Class </label>
                        <input disabled={isDisable}
                        className="form-control"
                        type="class"
                        name="class"
                         id="form-control"
                         placeholder={studentclass}
                         onChange={event => setStudentclass(event.target.value)}/>
                    </div>




                   
        
        </div>

        <div className="save-btn">
                <div style={{ marginTop: 'auto' }}>
                
                            <div>
                            <Button id="controller" style={{ marginRight: '2px'}} 
                          
                             onClick={ClickHandlerEnable} 
                             >Enable</Button>
                            <Button id="controller" style={{ marginRight: '2px'}}    
                         
                            onClick={ClickHandler} >Delete</Button>
                            <Button id="controller" style={{ marginRight: '2px'}} variant='success' type='submit'>Save</Button>
                            <Button id="controller" style={{ marginRight: '2px'}}   variant='link' href='/dashboard'>Cancel</Button>
                             
                              </div>
                         
                    </div>
        </div>
                
                 </div>
                 </div>
           
    
   
                
    </Form>
}

export default ProfileFormCommon;








