import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <li>It*s going a <strong className="text-capitalize">{props.data.description}</strong> day</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
        <img 
        src={props.data.iconUrl}
        alt={props.data.iconDescription} 
        className="float-right"/>
            <div className="float-right">
        <span className="temperature">{Math.round(props.data.temperature)}</span>
        <span className="units">°C</span>
            </div>
        </div> 
       </div>
    <div className="col-9">
        <ul>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
            <li>Feel like: {Math.round(props.data.feels_like)}%</li>
            <li>Humidity: {props.data.humidity}% </li>
        </ul>
    </div>
    </div>
    </div>
    );
}