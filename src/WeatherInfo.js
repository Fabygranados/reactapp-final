import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTempeture from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <li>It*s a <strong className="text-capitalize">{props.data.description}</strong> day</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
            <WeatherIcon code={props.data.icon} size={52}/>
            </div>
            
            <div className="float-right"> 
            <WeatherTempeture celsius={props.data.temperature} />
            </div>
        </div> 
       </div>
    <div className="col-9">
        <ul className="weatherDesc">
            <li>⁘Wind : {Math.round(props.data.wind)} km/h</li>
            <li>⁘Feel like : {Math.round(props.data.feels_like)}°C</li>
            <li>⁘Humidity : {props.data.humidity}% </li>
        </ul>
    </div>
    </div>
    </div>
    );
}