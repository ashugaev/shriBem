import React from "react";
// import Header from "./Header/index.tsx";
import ElementsBox from "./ElementsBox";
import { cn } from "@bem-react/classname";
import { RegistryConsumer } from "@bem-react/di";
// import Footer from "./Footer/index.tsx";
import "./styles/main.scss";
import "./MainContainer.scss";

const cnHeader = cn('Header');
const cnFooter = cn('Footer');

function Body() {
  return (
    <RegistryConsumer>
      {registries => {
        const registry = registries[cn("App")()];

        const Header = registry.get(cnHeader());
        const Footer = registry.get(cnFooter());
        return (
          <>
            <Header />
            <div className="mainContainer">
              <div className="mainContainer__header">Лента событий</div>
              <ElementsBox />
            </div>
            <Footer />
          </>
        );
      }}
    </RegistryConsumer>
  );
}

export default Body;
