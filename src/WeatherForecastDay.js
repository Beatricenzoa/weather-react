import React from "react";

export default function WeatherForecastDay(props) {
  let maxTemperature = Math.round(props.data.temperature.maximum);
  let minTemperature = Math.round(props.data.temperature.minimum);
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div>{day()}</div>
      <div>
        <img src={props.data.condition.icon_url} />
      </div>
      <div>
        <span className="weatherforecast-temperature-max">
          {maxTemperature}°
        </span>
        <span className="weatherforecast-temperature-min">
          {minTemperature}°
        </span>
      </div>
    </div>
  );
}
