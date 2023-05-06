import React, { useState } from "react";
import WeatherIconsForecast from "./WeatherIconsForcast";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false); 
    function handleResponse(response){
        console.log(response.data);
    }
    console.log(props);
  if (loaded) {

    let apiKey = "0406a2d65ft65fe83b49bc397b79bo2a";
    let units ="metric";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return null;

  } else {
    return (
    <div className="WeatherForecast">
     <div className="row">
      <div className="col">
        <div className="Forecast-day">Wed</div>
        <span><WeatherIconsForecast code="clear-sky-day"/></span>
        <div className="Forcast-temperature">
        <strong className="Temperature-max">19° </strong>
        <strong className="Temperature-min">10° </strong></div>
      </div>
     </div>
    </div>
    );
  }
}