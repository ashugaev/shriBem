import React from "react";
import Header from "./Header/index.tsx";
import ElementsBox from "./ElementsBox";
import Footer from "./Footer/index.tsx";
import "./styles/main.scss";
import "./MainContainer.scss";

function Body() {
  return (
    <>
      <Header />
      <div class="mainContainer">
        <div class="mainContainer__header">Лента событий</div>
        <ElementsBox />
      </div>
      <Footer />
    </>
  );
}

export default Body;
