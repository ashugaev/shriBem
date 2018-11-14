import React from "react";
import { withBemMod } from '@bem-react/core';
import "./index.scss";

function conditions(Base, { temperature, humidity }) {
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

const Conditions = withBemMod('conditions', {contentType: 'conditions'}, conditions)
export default Conditions;
