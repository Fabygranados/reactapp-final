import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature:response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            feels_like: response.data.temperature.feels_like,
            description: response.data.condition.description,
            city: response.data.city,
            iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
            iconDescription: response.data.condition.icon,
            date: new Date(response.data.time * 1000),
        });
    }
    if (weatherData.ready) {
        return ( 
        <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input 
            type="search" 
            placeholder="Enter a city..." 
            className="form-control"
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <button type="button" 
            class="btn btn-outline-success w-100">
                Search
                </button>
            </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li><FormattedDate date={weatherData.date} /></li>
            <li>It´s going <strong className="text-capitalize">{weatherData.description}</strong> day</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
            <img 
            src={weatherData.iconUrl}
            alt={weatherData.iconDescription} 
            className="float-right"/>
                <div className="float-right">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="units">°C</span>
                </div>
            </div> 
           </div>
        <div className="col-9">
            <ul>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                <li>Feel like: {Math.round(weatherData.feels_like)}%</li>
                <li>Humidity: {weatherData.humidity}% </li>
            </ul>
        </div>
        </div>
        </div>
        );
    } 
        else {
        const apiKey="0406a2d65ft65fe83b49bc397b79bo2a";
        let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
         axios.get(apiUrl).then(handleResponse);
         return "Loading...";
    }

    

}