import React from "react";
import "./Weather.css";

export default function Weather(){
    return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input 
            type="search" 
            placeholder="Enter a city" 
            className="form-control"
            />
            </div>
            <div className="col-3">
            <input 
            type="submit" 
            value="Search" 
            className="btn btn-primary"/>
            </div>
            </div>
        </form>
        <h1>Los Angeles</h1>
        <ul>
            <li>Wednesday 20:00</li>
            <li>Mostly Sunny</li>
        </ul>
        <div className="row">
            <div className="col-6">
            <img 
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"/>
            6°C
            </div>
        <div className="col-6">
            <ul>
                <li>Wind: 12 km/h</li>
                <li>Precipitation: 10%</li>
                <li>Humidity: 50% </li>
            </ul>
        </div>
        </div>
        </div>
}