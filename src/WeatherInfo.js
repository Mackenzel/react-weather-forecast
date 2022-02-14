import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

import "./WeatherInfo.css";

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
        <div className="col-6 mini-comp">
          <WeatherIcon code={props.info.icon} alt={props.info.description} />
          <UnitConversion fahr={props.info.temperature} />
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
