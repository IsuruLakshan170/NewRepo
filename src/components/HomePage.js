import { React, useContext } from 'react';
import './Home.css';
import './FotterNew.css';
import './Slider.css';
import Fotter from './Fotter';
import welcome_content from '../images/home-content-2.jpg';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import './Fotter.css';
import EmployeeList from './EmployeeList';
import Card from './card';

import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';


import { LoginContext } from "../Helper/Context";

function HomePage (){

   const {loggedIn,setLoggedIn}= useContext(LoginContext);

   return(



<div>
         

  <div className="Heading">
      <div className="Heading-content">
             <h1 className="Heading-h">Student Management  System</h1>
            
     </div>
    
     <div className="Heading-safe1">
             <p className="Heading-p1"> Safe </p>
             <p className="Heading-p2"> & </p>
             <p className="Heading-p3"> Secure </p>
     </div>
 </div>

  <div className="welcome">
       <div className="welcome-head">
 


          <h1 className="welcome-h1">Welcome To SCC HIGH School</h1>
      
       </div>

      <div className="welcome-content">
 
           <h1 className="welcome-content-h1">Student Management System</h1>

         <div className="img-main1">
           <div className="slider">
              <div className="slides">
            
           
                <input type = "radio"  name ="radio-btn" id="radio1"></input>
                <input type = "radio"  name ="radio-btn" id="radio2"></input>
                <input type = "radio"  name ="radio-btn" id="radio3"></input>
                <input type = "radio"  name ="radio-btn" id="radio4"></input>
            

                <div  className="slide first">
                    <img src={img1} alt=""></img>
                </div>
                <div className="slide">
                    <img src={img2} alt=""></img>
                </div>
                <div className="slide">
                    <img src={img3} alt=""></img>
                </div>
                <div className="slide">
                    <img src={img4} alt=""></img>
                </div>



                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>


                </div>

            </div>


            <div className="navigation-manual">
                    <label for="radio1"  className="manual-btn"></label>
                    <label for="radio2"  className="manual-btn"></label>
                    <label for="radio3"  className="manual-btn"></label>
                    <label for="radio4"  className="manual-btn"></label>



                </div>
 

         </div>
          
         </div>

           <p className="welcome-content-mid-p2"> Lorem Ipsum is simply remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

           
       </div>

</div>


  <div className="second">
         <div className="second1">
            <h1 className="second1-content-h1"> We have</h1>
            <p className="second1-content-mid-p2"> Lorem Ipsum is simply remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
         </div>
         <div className="second2">
            <p className="second2-components2"> STUDENTS <br></br> <p className="second2-content-mid-p3">3000</p></p>
            <p className="second2-components2"> TEACHERS <br></br><p className="second2-content-mid-p3">200</p></p>
            <p className="second2-components2"> CLASS ROOMS <br></br><p className="second2-content-mid-p3">60</p></p>
            <p className="second2-components2"> SUBJECTS <br></br><p className="second2-content-mid-p3">40</p></p>
        </div>
      
       
 </div>











   <div className="third">
          <div className="third1">
          </div>
         <div className="third2">
         <h1 className="third-content-h2">School Communication Systems</h1>

            <p className="third-content-mid-p1"> We built System to communicate Teachers and Parent directly through our platform.</p>
         <div className="get">
         <Button id="third-button1" variant='link' href='/signup'> Get Start</Button>

         </div>
          </div>
       
   </div>

        

   <div className="two">
           
         <Card/>

            
        
        </div>



   
   <div className="two">
   <div className="FotterBack">
         

         <Fotter/>
           </div>
        </div>
   </div>




);
}


export default HomePage;