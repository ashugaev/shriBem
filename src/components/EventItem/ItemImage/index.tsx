import React from "react";
import { withBemMod } from '@bem-react/core';
import "./index.scss";

function ItemImage({ img }) {
  return (
    <div className="itemImage">
      <div class="itemImage__img" touch-action="none" />
    </div>
  );
}

const ThreeWidthBem = withBemMod('image', {contentType: 'image'}, ItemImage)
export default ThreeWidthBem;
