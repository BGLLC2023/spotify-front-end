
import React, { useRef, useEffect, useState} from "react";
import Chart from "chart.js/auto";
import {fetchAdConversions} from '../routes/genres.js' ;
import './chart.css';
import ButtonsComponent from "./buttons.jsx";

const ConversionsComponent = () => {
  const canvasRef = useRef(null);
  const countryIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [values, setValues] = useState([0]);
  const [keys, setKeys] = useState(['Select a Country']);


  const fetchData = async (id) => {
    const data = await fetchAdConversions(id);
    console.log('this is', data);
    setKeys(Object.keys(data.ad_conversion_counts));
    setValues(Object.values(data.ad_conversion_counts));
  }

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "pie",
      data: {
        labels: keys,
        datasets:  [{ label: "Ad Conversions", data: values }],
      },
    });
    return () => chart.destroy();
  }, [keys, values]);

  return (

    <div className="piechart">
      <div  className='pie' >
        <canvas ref={canvasRef} />
        
        <ButtonsComponent func={fetchData} list={countryIds} />

      </div>
    </div>
  );
   
  
};

export default ConversionsComponent;