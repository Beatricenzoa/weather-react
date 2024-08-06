import React from "react";
import CurrentDate from "./CurrentDate";
import "./App.css";

export default function Weather(props) {
  return (
    <div>
      <h1 className="current-city">{props.data.city}</h1>
      <div className="current-details">
        <div className="current-weather">
          <div className="precipitation">
            <p className="d-flex mb-0">
              <CurrentDate date={props.data.date} />, {props.data.description}
            </p>
            <p>
              Humidity:{" "}
              <strong className="humidity">{props.data.humidity}%</strong>,
              Wind: <strong className="wind">{props.data.wind}km/h</strong>
            </p>
          </div>
        </div>
        <div className="temperature-details">
          <div className="icon">
            <img src={props.data.icon} alt="weather icon" />
          </div>
          <div className="temperature">{props.data.temperature}</div>
          <div className="unit">℃</div>
        </div>
      </div>
    </div>
  );
}
