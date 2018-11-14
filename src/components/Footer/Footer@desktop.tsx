import React from "react";
import "./index.scss";
import { cn } from "@bem-react/classname";

export const cnFooter = cn("footer");

function Footer() {
  return (
    <footer className={cnFooter()}>
      <div className={cnFooter("menu")}>
        <div className={cnFooter("menuItem")}>
          <a href="#">Помощь</a>
        </div>
        <div className={cnFooter("menuItem")}>
          <a href="#">Обратная связь</a>
        </div>
        <div className={cnFooter("menuItem")}>
          <a href="#">Разработчикам</a>
        </div>
        <div className={cnFooter("menuItem")}>
          <a href="#">Условия пользования</a>
        </div>
        <div className={cnFooter("menuItem")}>
          <a href="/src/files/presentation.pdf" target="_blanck">
            Ссылка на лицензию
          </a>
        </div>
      </div>
      <div className={cnFooter("copy")}>| © 2001-2018 ООО «Яндекс»</div>
    </footer>
  );
}

export default Footer;
