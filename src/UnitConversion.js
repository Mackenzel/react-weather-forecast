import React from "react";
import "./UnitConversion.css";

export default function UnitConversion(props) {
  return (
    <div className="UnitConversion">
      <span className="degree">{Math.round(props.fahr)}</span>
      <span className="unit">°F</span>
    </div>
  );
}
