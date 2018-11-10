import React from "react";
import Header from "./Header.jsx";
import ElementsBox from "./ElementsBox";

function Body() {
  return (
    <>
      <Header />
      <div class="mainContainer">
        <div class="mainContainer__header">Лента событий</div>
        <ElementsBox />
      </div>
    </>
  );
}

export default Body;
