import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function formattedDay() {
    let date = new Date(props.date.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{formattedDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="forecast-temp">
        <span className="temp-high">{Math.round(props.data.temp.max)}°</span>/
        <span className="temp-low">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
