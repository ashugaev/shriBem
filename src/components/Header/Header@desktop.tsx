import React from "react";
import { cn } from "@bem-react/classname";
import "./index.scss";

export const cnHeader = cn("header");
export const cnIcon = cn("icon");

const Header = () => {
  return (
    <>
      <div className={cnHeader()}>
        <div className={cnHeader("logo", ["icon"])} />
        <ul className={cnHeader("menu")}>
          <li className="header-menuItem header-menuItem_active">
            <a href="">События</a>
          </li>
          <li className={cnHeader("menuItem")}>
            <a href="">Сводка</a>
          </li>
          <li className={cnHeader("menuItem")}>
            <a href="">Устройства</a>
          </li>
          <li className={cnHeader("menuItem")}>
            <a href="">Сценарии</a>
          </li>
          <li className={cnHeader("menuItem")}>
            <a href="/cameras">Видеонаблюдение</a>
          </li>
        </ul>
        <label
          for="menu-buton-chb"
          className={cnIcon({ hemburger: true, "menu-button": true })}
        />
      </div>
    </>
  );
};

// const Header = widthBemClassName(header)(dogPaw);

export default Header;
