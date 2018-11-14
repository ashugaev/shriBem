import React from 'react'
import { compose } from '@bem-react/core';
import Graph from "./Graph/index.tsx";
import Conditions from "./Conditions/index.tsx";
import Player from "./Player/index.tsx";
import BtnYesNo from "./BtnYesNo/index.tsx";
import ItemImage from "./ItemImage/index.tsx";

const ItemContent = compose(ItemImage, Graph, BtnYesNo, Player, Conditions)(()=><div/>)
export default ItemContent