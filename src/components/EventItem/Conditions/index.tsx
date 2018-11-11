import React from "react";
import "./index.scss";

function Conditions({ temperature, humidity }) {
  return (
    <div className="itemConditions">
      {typeof temperature === "number" && (
        <div className="itemConditions__temperatureBox">
          <span>Температура:</span>
          <b> {temperature} </b>
        </div>
      )}
      {typeof humidity === "number" && (
        <div className="itemConditions__humidity">
          <span> Влажность:</span>
          <b> {humidity}</b>
        </div>
      )}
    </div>
  );
}

export default Conditions;
