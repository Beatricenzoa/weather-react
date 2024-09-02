import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  useEffect(
    function () {
      setLoaded(false);
    },
    [props.data.city]
  );

  function showWeatherForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    const key = `0f8t20affd39ebb0d8d3f0o83cf0b40f`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${key}&units=metric`;
    axios.get(apiUrl).then(showWeatherForecast);
  }

  if (loaded === true) {
    return (
      <div className="weather-forecast">
        <div className="row">
          {forecast.map(function (dailyforecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyforecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
  }
  return null;
}
