import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    useEffect(() => {
      setLoaded(false);
    }, [props.city]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

  if (loaded) {
    return (
      <div className="WeatherForecast">
       <div className="row">
        {forecast.map(function(dailyForecast, index) {
          if (index < 6 ) {          
        return (
       <div className="col" key={index}>
         <WeatherForecastDay data={dailyForecast} />
        </div>
       );
      } else {
        return null;
      }
        })}
       </div>
      </div>
      );

  } else {
    let apiKey = "0406a2d65ft65fe83b49bc397b79bo2a";
    let units ="metric";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}