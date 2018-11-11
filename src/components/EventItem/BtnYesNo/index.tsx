import React from "react";
import "./index.scss";

function BtnYesNo({ buttons }) {
  return (
    <div className="buttonsYesNo">
      <button className="btn btn_yellow buttonsYesNo__yes">{buttons[0]}</button>
      <button className="btn btn_gray buttonsYesNo__no">{buttons[1]}</button>
    </div>
  );
}

export default BtnYesNo;
