import React from "react";
import './Comments.css';

export default function Todo(props) {



  const viewTemplate = (
    <div className="stack-small">
      <div className="Box">
         
          <p className="commentstext" htmlFor={props.id}>
            {props.name}
          </p>
        </div>
      
    </div>
  );



  return <li className="todo">{ viewTemplate}</li>;
}
