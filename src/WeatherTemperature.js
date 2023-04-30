import React, { useState } from "react";

export default function WeatherTempeture(props){
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === `celsius`) {
    return( 
    <div className="WeatherTemperature"> 
        <span className="temperature">
            {Math.round(props.celsius)}
            </span>
        <strong className="metric">
            <a>°C</a> </strong> <a className="imperial" href="/" onClick={convertToFahrenheit}>°F</a>
        </div>
    );
  } else{
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
        <div className="WeatherTemperature"> 
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <strong className="metric">
            <a href="/" onClick={convertToCelsius}>°C</a> </strong> <a className="imperial">°F</a>
        </div>
    )
  }
}