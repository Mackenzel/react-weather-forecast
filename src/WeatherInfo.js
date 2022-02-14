import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FriendlyDate date={props.info.date} />
        </li>
        <li>{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.info.icon} alt={props.info.description} />
          <span className="degree">{Math.round(props.info.temperature)}</span>
          <span className="unit">°F|°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
