import React from "react";
import './Fotter.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fotter1 from '../images/fotter1.png';
import Fotter2 from '../images/fotter2.png';
import Fotter3 from '../images/fotter3.png';
import Fotter4 from '../images/fotter4.png';

import Fotter_img1 from '../images/fotter-facebook.png';
import Fotter_img2 from '../images/fotter-instagram.png';
import Fotter_img3 from '../images/fotter-linkedin.png';
import Fotter_img4 from '../images/fotter-twitter.png';

function Fotter() {
    return (
     
     <div className="fotter">
         <div className="fotter1">
             <h1 className="fotter1-h1">SCC HIGH SCHOOL</h1>
             <img className="fotter-img1" src={Fotter1} alt="actions" />
         </div>
         <div className="fotter1">
             <h1 className="fotter2-h1">145 Colombo road ,<br></br> Nuwara Elia.</h1>
             <img className="fotter-img2" src={Fotter2} alt="actions" />
         </div>

         <div className="fotter1">
             <h1 className="fotter2-h1">0452135697</h1>
             <img className="fotter-img2" src={Fotter3} alt="actions" />
         </div>
         <div className="fotter1">
             <h1 className="fotter2-h1">contact@scchighschool.lk</h1>
             <img className="fotter-img2" src={Fotter4} alt="actions" />
         </div>
         <div className="fotter-socialmedia">
           
             <img className="fotter-socialmedia_img" src={Fotter_img1} alt="actions" />
             <img className="fotter-socialmedia_img" src={Fotter_img2} alt="actions" />
             <img className="fotter-socialmedia_img" src={Fotter_img3} alt="actions" />
             <img className="fotter-socialmedia_img" src={Fotter_img4} alt="actions" />
         </div>

         <div className="fotter-policy">
      
            <p className="second2-content-mid-p2">Privacy</p>
            <p className="second2-content-mid-p2">Terms</p>
            <p className="second2-content-mid-p2">Sitemap</p>
            <p className="second2-content-mid-p2">Purchase</p>
        </div>

        <div className="copy">
        <p className="fotter-copywrite-h1">COPYRIGHT 2000 CORE ALLRIGHT RESERVED </p>

        </div>

       </div>

       

  
    );
  }
  
  export default Fotter;
  