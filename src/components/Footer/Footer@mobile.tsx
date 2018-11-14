import React from "react";
import "./index.scss";
import { cn } from "@bem-react/classname";

export const cnFooter = cn("footer");

function Footer() {
  return (
    <footer>
      <div className={cnFooter("copy")}>© 2001-2018 ООО «Яндекс»</div>
    </footer>
  );
}

export default Footer;
