
import React, { useRef, useEffect, useState} from "react";
import Chart from "chart.js/auto";
import {fetchSubscriptionType} from '../routes/genres.js' ;
import './chart.css';
import ButtonsComponent from "./buttons.jsx";


const SubscriptionComponent = () => {
  const canvasRef = useRef(null);
  const [values, setValues] = useState([0]);
  const [keys, setKeys] = useState(['Select a Country']);
  const countryIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [country, setCountry] = useState('select a country');

  const fetchData = async (id) => {
    const data = await fetchSubscriptionType(id);
    setKeys(Object.keys(data.subscription_counts));
    setValues(Object.values(data.subscription_counts));
    const country_names = Object.values(data.country_name)
    setCountry(country_names.join(''));
  }

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        labels: keys,
        datasets:  [{ label: "Subscription Types", data: values }],
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
    return () => chart.destroy();
  }, [keys, values]);

  return (
  <div className="piechart">
    <p>{country} Subscription type</p>
    <div  className='pie' >
      
      <canvas ref={canvasRef} />
      

    </div>
    <ButtonsComponent func={fetchData} list={countryIds} />
  </div>
  );
   
  
};

export default SubscriptionComponent;




