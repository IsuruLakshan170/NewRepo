import React, { useState } from "react";
import './Comments.css';
import {  Button } from "react-bootstrap";

function Form(props) {
  const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");
  }


  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="shift7">


    <form onSubmit={handleSubmit}>
      <h2 className="Head">
          Enter Your commnets here
      </h2>


      <input
        type="text"
       
        className="typingarea"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
   <div className='submitbtn'>
        <Button type="submit" className="CommentsAdd">
        Submit
      </Button>

      </div>
    </form>
    </div>
  );
}

export default Form;
