import React from "react";
import { cn } from "@bem-react/classname";
import Graph from "./Graph/index.tsx";
import Conditions from "./Conditions/index.tsx";
import Player from "./Player/index.tsx";
import BtnYesNo from "./BtnYesNo/index.tsx";
import ItemImage from "./ItemImage/index.tsx";
import ItemContent from "./ItemContent.tsx";
import "./index.scss";

export const cnEventItem = cn("eventItem");
export const cnIcon = cn("icon");

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

  let contentType;

  if (image) {
    contentType = "image";
  } else if (dataType.type === "graph") {
    contentType = "graph";
  } else if (buttons) {
    contentType = "buttons";
  } else if (track) {
    contentType = "player";
  } else if (temperature || humidity) {
    contentType = "conditions";
  }

  return (
    <div
      className={cnEventItem({
        size: event.size,
        warning: event.type === "critical"
      })}
    >
      <div
        className={cnIcon(
          { cross: event.type === "critical" ? "white" : true },
          ["eventItem-cross"]
        )}
      />

      <div className={cnEventItem("arrowBox")}>
        <div className={cnIcon({ next: true }, ["eventItem-arrow"])} />
      </div>

      <div className={cnEventItem("mainInfoBox")}>
        <div className={cnEventItem("header")}>
          <div
            className={`eventItem-icon icon icon_${event.icon}${
              event.type === "critical" ? "_white" : ""
            }`}
          />
          <div className={cnEventItem("title")}>
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
          <ItemContent
            temperature={temperature}
            humidity={humidity}
            buttons={buttons}
            track={track}
            volume={volume}
            albumcover={albumcover}
            contentType={contentType}
          />
        </div>
      )}
    </div>
  );
}

export default EventItem;
