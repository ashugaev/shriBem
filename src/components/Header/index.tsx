import React from "react";
import { cn } from "@bem-react/classname";
import './index.scss'


const cat = cn("Cat");
cat({ size: "m" });
cat("Tail");
cat("Tail", { length: "long" });

const dogPaw = cn("Dog", "Paw");

const Header = () => {
  return (
    <>
      <div
        className={`header ${cat()} ${dogPaw({
          size: "superbig",
          beautiness: "ugly"
        })} ${dogPaw({
          color: "black",
          exist: true
        })}`}
      >
        <div class="icon header__logo" />
        <ul class="header__menu">
          <li class="header__menu-item header__menu-item_active">
            <a href="">События</a>
          </li>
          <li class="header__menu-item">
            <a href="">Сводка</a>
          </li>
          <li class="header__menu-item">
            <a href="">Устройства</a>
          </li>
          <li class="header__menu-item">
            <a href="">Сценарии</a>
          </li>
          <li class="header__menu-item">
            <a href="/cameras">Видеонаблюдение</a>
          </li>
        </ul>
        <label
          for="menu-buton-chb"
          class="icon icon_hamburger header__menu-button"
        />
      </div>
    </>
  );
};

// const Header = widthBemClassName(header)(dogPaw);

export default Header;
