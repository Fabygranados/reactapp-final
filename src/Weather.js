import React from "react";
import "./Weather.css";

export default function Weather(){
    return <div className="Weather">
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
            class="btn btn-outline-info w-100">
                Search
                </button>
            </div>
            </div>
        </form>
        <h1>Los Angeles</h1>
        <ul>
            <li>Wednesday | April 27th | 20:00 hrs</li>
            <li>It´s going <strong className="description">Mostly Cloudy</strong> day</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
            <img 
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png" 
            alt="Mostly Cloudy" 
            className="float-right"/>
                <div className="float-right">
            <span className="temperature">6</span>
            <span className="units">°C</span>
                </div>
            </div> 
           </div>
        <div className="col-9">
            <ul>
                <li>Wind: 12 km/h</li>
                <li>Precipitation: 10%</li>
                <li>Humidity: 50% </li>
            </ul>
        </div>
        </div>
        </div>
}