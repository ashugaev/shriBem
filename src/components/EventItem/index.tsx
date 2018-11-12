import React from "react";
import { cn } from "@bem-react/classname";
import Graph from "./Graph/index.tsx";
import Conditions from "./Conditions/index.tsx";
import Player from "./Player/index.tsx";
import BtnYesNo from "./BtnYesNo/index.tsx";
import ItemImage from "./ItemImage/index.tsx";
import "./index.scss";

export const cnEventItem = cn("eventItem");

function EventItem({ event }) {
  let dataType = event.data && Object.keys(event.data).length ? event.data : {};
  const {
    temperature,
    buttons,
    image,
    values,
    humidity,
    albumcover,
    artist,
    track,
    volume
  } = dataType;

  return (
    <div
      className={cnEventItem({
        size: event.size,
        warning: event.type === "critical"
      })}
    >
      <div
        className={`icon icon_cross${
          event.type === "critical" ? "_white" : ""
        } eventItem-cross`}
      />

      <div className={cnEventItem("arrowBox")}>
        <div className="icon icon_next eventItem-arrow" />
      </div>

      <div className="eventItem-mainInfoBox">
        <div className="eventItem-header">
          <div
            className={`eventItem-icon icon icon_${event.icon}${
              event.type === "critical" ? "_white" : ""
            }`}
          />
          <div className="eventItem-title">
            <span id={event.title} />
          </div>
        </div>
        <div className={cnEventItem("infoBox")}>
          <div className={cnEventItem("source")}>{event.source}</div>
          <div className={cnEventItem("time")}> {event.time}</div>
        </div>
      </div>

      {(event.description || event.data) && (
        <div className={cnEventItem("descriptionBox", { oneRow: !event.data })}>
          <div className={cnEventItem("description")}>{event.description}</div>
          <div className="eventItem-dataBox" />

          {dataType.type === "graph" && <Graph />}
          {(temperature || humidity) && (
            <Conditions temperature={temperature} humidity={humidity} />
          )}
          {track && (
            <Player track={track} volume={volume} albumcover={albumcover} />
          )}
          {buttons && <BtnYesNo buttons={buttons} />}
          {image && <ItemImage />}
        </div>
      )}
    </div>
  );
}

export default EventItem;
