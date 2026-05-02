import React from "react";
import './update.css';





const UpdateComponent = ({method}) => {
  return (
    <div className="update">
      <h2>{method}</h2>
      <select name="cars">
        <option value="0">France</option>
        <option value="1">Indonesia</option>
        <option value="2">Italy</option>
        <option value="3">Australia</option>
        <option value="4">India</option>
        <option value="5">Germany</option>
        <option value="6">United Kingdom</option>
        <option value="7">Brazil</option>
        <option value="8">Canada</option>
        <option value="9">Mexico</option>
        <option value="10">United States</option>
        <option value="11">Spain</option>
      </select>







    </div>






  )







}

export default UpdateComponent;