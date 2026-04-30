
import React, { useRef, useEffect, useState} from "react";
import Chart from "chart.js/auto";
import {fetchDesiredFeatures} from '../routes/genres.js' ;
import './chart.css';
import ButtonsComponent from "./buttons.jsx";


const FeaturesComponent = () => {
  const canvasRef = useRef(null);
  const [values, setValues] = useState([0]);
  const [keys, setKeys] = useState(['Select a Country']);
  const countryIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const fetchData = async (id) => {
    const data = await fetchDesiredFeatures(id);
    setKeys(Object.keys(data.desired_features_counts));
    setValues(Object.values(data.desired_features_counts));
  }

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: keys,
        datasets:  [{ label: "Top 5 Desired Features", data: values }],

      },
      options: {
        scales: {
          x: {
            ticks: {
              font: {
                size: 8
              },
              maxRotation: 0,
              minRotation: 0
            }
          }
        }
      }
    });
    return () => chart.destroy();
  }, [keys, values]);

  return (
  <div className="barchart">
    <div  className='bar2' >
      <canvas ref={canvasRef} />
        <div className="features">
          <ButtonsComponent func={fetchData} list={countryIds} />
        </div>
    </div>
  </div>
  );
   
  
};

export default FeaturesComponent;




