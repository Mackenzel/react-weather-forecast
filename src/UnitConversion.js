import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("imperial");
  function convertToCel(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function convertToFahr(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <div className="UnitConversion">
        <span className="degree">{Math.round(props.fahr)}</span>
        <span className="unit">
          °F|<a onClick={convertToCel}>°C</a>
        </span>
      </div>
    );
  } else {
    let cel = ((props.fahr - 32) * 5) / 9;
    return (
      <div className="UnitConversion">
        <span className="degree">{Math.round(cel)}</span>
        <span className="unit">
          <a onClick={convertToFahr}>°F</a>|°C
        </span>
      </div>
    );
  }
}
