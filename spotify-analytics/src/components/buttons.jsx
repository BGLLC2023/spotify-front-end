import React from "react";
import './buttons.css';


const ButtonsComponent = ({func, list}) => {
  return(
    <div className="button-div">
      <button className="button" onClick={() => func(list[0])}>Fr</button>
      <button className="button" onClick={() => func(list[1])}>Idn</button>
      <button className="button" onClick={() => func(list[2])}>It</button>
      <button className="button" onClick={() => func(list[3])}>Aus</button>
      <button className="button" onClick={() => func(list[4])}>Ind</button>
      <button className="button" onClick={() => func(list[5])}>Ger</button>
      <button className="button" onClick={() => func(list[6])}>UK</button>
      <button className="button" onClick={() => func(list[7])}>Br</button>
      <button className="button" onClick={() => func(list[8])}>Cd</button>
      <button className="button" onClick={() => func(list[9])}>Mex</button>
      <button className="button" onClick={() => func(list[10])}>Usa</button>
      <button className="button" onClick={() => func(list[11])}>Spn</button>
    </div>
  )
}

export default ButtonsComponent;