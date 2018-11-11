import React from "react";
import "./index.scss";
import graphImg from "./graph/Richdata@1x.png";

function Graph() {
  return (
    <div className="itemGraph">
      <img className="itemGraph__img" src={graphImg} alt="" />
    </div>
  );
}

export default Graph;
