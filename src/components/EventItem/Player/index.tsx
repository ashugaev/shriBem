import React from "react";
import { withBemMod } from '@bem-react/core';
import "./index.scss";

function player(Base, { track, albumcover, volume }) {
  return (
    <div className="itemPlayer">
      <div className="itemPlayer__trackInfo">
        <img className="itemPlayer__cover" src={albumcover} />
        <div className="itemPlayer__trackName">{track.name}</div>
        <div className="itemPlayer__timeBox">
          <div className="itemPlayer__timeLineBox">
            <hr className="itemPlayer__timeLine" />
            <div className="itemPlayer__timePointer" />
          </div>
          <div className="itemPlayer__timeValue">{track.length}</div>
        </div>
      </div>
      <div className="itemPlayer__controllers">
        <div className="icon icon_nextMusic itemPlayer__btnBack" />
        <div className="icon icon_nextMusic itemPlayer__btnForward" />
        <div className="itemPlayer__volumeLineBox">
          <hr className="itemPlayer__volumeLinx" />
          <div class="itemPlayer__volumePointer" style={{ left: volume }} />
        </div>
        <div className="itemPlayer__volume">{volume + "%"}</div>
      </div>
    </div>
  );
}

const Player = withBemMod('player', {contentType: 'player'}, player)
export default Player;
