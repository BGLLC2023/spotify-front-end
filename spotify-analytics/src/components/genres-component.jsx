
import React, { useRef, useEffect, useState} from "react";
import Chart from "chart.js/auto";
import {fetchGenre} from '../routes/genres.js' ;
import './chart.css';
import ButtonsComponent from "./buttons.jsx";

const ChartComponent = () => {
  const canvasRef = useRef(null);
  const [values, setValues] = useState([0]);
  const [keys, setKeys] = useState(['Select a Country']);
  const [country, setCountry] = useState('select a country');
  const countryIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const fetchData = async (id) => {
    const data = await fetchGenre(id);
    const country_names = Object.values(data.country_name)
    console.log('this is', data);
    setKeys(Object.keys(data.top_genres));
    setValues(Object.values(data.top_genres));
    setCountry(country_names.join(''));
  }

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: keys,
        datasets:  [{ label: `${country}\'s Top 3 Genres`, data: values }],
        options: {
          scales: {
            x: {
              ticks: {
                font: {
                  size: 12
                }
              }
            }
          }
        }
      },
    });
    return () => chart.destroy();
  }, [keys, values]);

  return (
  <div className="barchart">
    <div  className='bar2' >
      <canvas ref={canvasRef} />
        
    </div>
    <ButtonsComponent func={fetchData} list={countryIds} />
  </div>
  );
   
  
};

export default ChartComponent;




