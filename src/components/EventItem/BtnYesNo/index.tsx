import React from "react";
import { withBemMod } from '@bem-react/core';
import "./index.scss";

function btnYesNo(Base, { buttons }) {
  return (
    <div className="buttonsYesNo">
      <button className="btn btn_yellow buttonsYesNo__yes">{buttons[0]}</button>
      <button className="btn btn_gray buttonsYesNo__no">{buttons[1]}</button>
    </div>
  );
}

const BtnYesNo = withBemMod('buttons', {contentType: 'buttons'}, btnYesNo)
export default BtnYesNo;