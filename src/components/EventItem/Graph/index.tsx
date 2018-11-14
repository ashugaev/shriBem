import React from "react";
import { withBemMod } from '@bem-react/core';
import "./index.scss";
import graphImg from "./graph/Richdata@1x.png";

function graph() {
  return (
    <div className="itemGraph">
      <img className="itemGraph__img" src={graphImg} alt="" />
    </div>
  );
}

const Graph = withBemMod('graph', {contentType: 'graph'}, graph)
export default Graph;
