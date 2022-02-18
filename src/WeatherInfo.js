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
      <div className="row ps-5">
        <div className="col-6 d-flex">
          <span className="icon">
            {" "}
            <WeatherIcon
              code={props.info.icon}
              size={60}
              alt={props.info.description}
            />
          </span>
          <UnitConversion fahr={props.info.temperature} />
        </div>
        <div className="col-6 mt-4">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
