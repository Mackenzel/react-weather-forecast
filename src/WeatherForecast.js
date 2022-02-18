import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleForecast(response) {
    console.log(response.data);
  }

  const apiKey = "274afd25137632e37b720563347c5cdb";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleForecast);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thur</div>
          <WeatherIcon code="01d" size={40} />
          <div className="forecast-temp">
            <span className="temp-high">19</span>/
            <span className="temp-low">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
