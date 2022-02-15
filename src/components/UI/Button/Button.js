import React, {useState} from 'react';

import './Button.css';


const Button =()=> {

  const [changedCss, setChangedCss]=useState("button");

  const textsChangeHandler = () =>{
    setChangedCss(`button${'-changed'}`);
  }

  return (

    <button className={changedCss} onClick={textsChangeHandler}>
      view more
    </button>

  );
};

export default Button;
