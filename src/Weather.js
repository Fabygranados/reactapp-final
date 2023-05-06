import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature:response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            feels_like: response.data.temperature.feels_like,
            description: response.data.condition.description,
            city: response.data.city,
            icon: response.data.condition.icon,
            iconDescription: response.data.condition.description,
            date: new Date(response.data.time * 1000),
        });
    }
        function search(){
            const apiKey="0406a2d65ft65fe83b49bc397b79bo2a";
            let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
            axios.get(apiUrl).then(handleResponse);
        }

        function handleSubmit(event) {
            event.preventDefault();
            search();
        }

        function handleCityChange(event){
            setCity(event.target.value);
        }

    if (weatherData.ready) {
        return ( 
        <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input 
            type="search" 
            placeholder="Enter a city..." 
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
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
        <WeatherInfo data={weatherData}/>
        <WeatherForecast city={weatherData.city}/>
        </div>
        );
    } 
        else {
         search();
         return "Loading...";
    }

    

}