import React from "react";
import "./index.scss";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__menu">
        <div class="footer__menu-item">
          <a href="#">Помощь</a>
        </div>
        <div class="footer__menu-item">
          <a href="#">Обратная связь</a>
        </div>
        <div class="footer__menu-item">
          <a href="#">Разработчикам</a>
        </div>
        <div class="footer__menu-item">
          <a href="#">Условия пользования</a>
        </div>
        <div class="footer__menu-item">
          <a href="/src/files/presentation.pdf" target="_blanck">
            Ссылка на лицензию
          </a>
        </div>
      </div>
      <div class="footer__copy">| © 2001-2018 ООО «Яндекс»</div>
    </footer>
  );
}

export default Footer;
