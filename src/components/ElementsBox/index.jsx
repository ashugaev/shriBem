import React from "react";
import EventItem from "../EventItem/index.tsx";
import events from "../../events.json";
import "./index.scss";

function ElementsBox() {
  console.log(events);
  return (
    <div className="ElementsBox">
      {events.events.map((event, index) => (
        <EventItem event={event} key={index} />
      ))}
    </div>
  );
}

export default ElementsBox;
