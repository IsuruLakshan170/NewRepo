import React,{useState } from 'react';
import './test.css';
import './Fotter.css';
import Fotter from './Fotter';
import welcome_content from '../images/home-content-2.jpg';
import { Form} from "react-bootstrap";
import Formtext from "./Form";

import './Comments.css';
import Todo from "./Todo";
import { nanoid } from "nanoid";



function Test(props) {


  const [tasks, setTasks] = useState(props.tasks);


  

  const taskList = tasks
 
  .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}

    />
  ));


  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([newTask,...tasks]);
  }


  
  const headingText = `${taskList.length} `;





    return (
     
     <div className="main">


         <div className="shift1">
           <div className="shift1-background">
              <h1 className="h1sup">Support</h1>
            <div className="text1">
              <p className="text1p">Get expert guidance and assistance achieving your objectives</p>
            </div>
          
           </div>
             
         </div>

       
         <div className="shift2">

  <div className="text2">
 
  <h1 className="shift3h1">About us</h1>

      < p className="text2p">overlay transparent css
      give opacity to background image css
      bakground url opacity css
      how to use opacity in background image
      background images transferent css
      css transparent background top right
      background image opacity content show
      opacity only url css3
      opacity of background image css
      opacity of background image
      make background transparent free css style
      background url css then opacity
      CSS background-image opacity black
      transparent only image
      css background url opacity
      background image opacity url rgba
      css background-url image opacity
      background url opacity
      opacity for background image css
      web dev how to have a background image have transparancey</p>
         </div>
        
           <img className="img-main2" src={welcome_content} alt="actions" />

            </div>

         <div className="shift3">
             <h1 className="shift3h1">Benefits</h1>
             <p className="shift3p">
               <ul>
               <li>By using this chat form teacher and parents can directly chat about the students.</li>
               <li>Teacher can chat in directly with other specific teachers</li>
               <li>Teacher can arrange meeting group with others teachers</li>
               <li>Teacher can arrange meeting group Students parents</li>

             </ul>
             
              </p>

         </div>

       
       
         <div className="shift4">
             <h1 className="shift4h1">How can I use this..?</h1>
         
         <div className="step1">
           <h2 className="steph2">Step 1</h2>
           <p className="shift3p">First your have create a proper profile to management system. Without profile you can not use chat services. If you a teacher you have to register as teacher and use your teachers id .
           If you are parent you must enter your student's school id number to your profile.
           </p>
         </div>
         <div className="step1">
           <h2 className="steph2">Step 2</h2>
           <p className="shift3p">
             Now you activate your account. 
             Then you want to chat about specific student , then you go to the message section 
           and enter the student's id you want to chat.
             
           </p>

         </div>
         <div className="step1">
           <h2 className="steph2">Step 3</h2>
           <p className="shift3p">Then you enter to message section , you can chat with student's parents or teacher </p>

         </div>
         </div>
        

   <div className="shift7">
         
         <div className="typingarea">

         <h1 className="shift5h1">Suggestions</h1>

          <Formtext addTask={addTask} />
    
            <h2 id="count" tabIndex="-1" >
              {headingText} Commnets
            </h2>
           <div className="ulist">
           <ul
              role="list"
              className="todo-list stack-large stack-exception"
              aria-labelledby="list-heading"
            >
              {taskList}
            </ul>
            
            </div> 
           
           
           

          </div>
         
        </div>
     

<div className="final">
<div className="final">
  
  </div>
</div>


       </div>

       

  
    );
  }
  
  export default Test;
  