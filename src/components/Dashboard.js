import { React, useContext } from 'react';
import './Dashboard.css';
import { useHistory } from 'react-router-dom';
import LeftNev from './LeftNev';
import Dashboarddetails from './DashBordDetails.js';
import Fotter from './Fotter';
import { Nav, Button ,button} from 'react-bootstrap';

import './Fotter.css';

import { LoginContext } from "../Helper/Context";

const Dashboard = (props) => {
    const {loggedIn,setLoggedIn}= useContext(LoginContext);

    const history = useHistory();

    const handleRoute = () =>{ 
        history.push("/RegAs");
    }

    return(
        <div>
          
          <div className="one">
                   <div className="dashboad11">
            


                    <LeftNev/>

            
                        <div className="right1">
                        <h1 className="Schooname1"> SCC HIGH SCHOOL COMMUNICATION UNIT </h1>

                        <Dashboarddetails/>
                      
        <div className="dashMain">

       
               <div className="dashBox1">
                 <h1 className="mainhead">Teachers</h1>
                <p className="mainPara">
                SCC High school has 150 teachers for cover every fields of subjects. All the teacher are registered to the communication plat form and they have uniq school id.
                </p>
            
               </div>
               
                <div className="dashBox2">
                    <h1 className="mainhead">Parents</h1>
                    <p className="mainPara">
                    SCC High school  educate 3500 students. All the students are registered to the communication plat form and they have uniq school id.
                    Parents must use your student's id to fill your profile.
                    </p>
            
                 </div> 
        </div>

                        </div>

                </div>
        </div>
       
        <div className="two">
            <div className="second-content1">
                  <h1 className="section2-middle-h1">Wecome !</h1>
                  <hr className="hrwelcome"></hr>
                   <div className="section2-middle-box11">
                     <h1 className="section2-middle-h22"> How use this...?</h1>
                     <p className="section2-middle-p11">
                         
                         <ul>
                            <li>First you have to create your profile</li>
                            <li>Then your can access to chat services</li>

                         </ul>
                         
                         </p>
                         <div className="helpcont">
                        <p className="helpp"> Furher Help</p>
                         <Button id="clickhere" variant='link' href='/support' className="helpbtn">Click here</Button>

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
    



    
  
);
    };
export default Dashboard;