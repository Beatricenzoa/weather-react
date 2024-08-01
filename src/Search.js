import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [searched, setSearched] = useState(false);

  function displayWeather(response) {
    setSearched(true);
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const key = "0f8t20affd39ebb0d8d3f0o83cf0b40f";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  const header = (
    <form id="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        required
        id="search-input"
        onChange={handleChange}
      />
      <input type="submit" value="search" id="search-button" />
    </form>
  );
  const main = (
    <main>
      <h1 id="current-city">{city}</h1>
      <div className="current-details">
        <div className="current-weather">
          <div className="precipitation">
            <p>{weather.description}</p>
            <p>
              Humidity: <strong id="humidity">{weather.humidity}%</strong>
              <br />
              Wind: <strong id="wind">{weather.wind}km/h</strong>
            </p>
          </div>
        </div>
        <div id="temperature-details">
          <div id="icon">
            <img src={weather.icon} alt="weather icon" />
          </div>
          <div id="temperature">{weather.temperature}</div>
          <div id="unit">℃</div>
        </div>
      </div>
    </main>
  );
  const footer = (
    <p>
      This project was coded by{" "}
      <a
        href="https://github.com/Beatricenzoa"
        target="_blank"
        rel="noreferrer"
      >
        Beatrice Mutuku
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/Beatricenzoa/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        on GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://jazzy-marshmallow-fc8a82.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Netlify
      </a>
    </p>
  );
  if (searched === true) {
    return (
      <div>
        {header}
        {main}
        {footer}
      </div>
    );
  } else {
    return (
      <div>
        {header}
        {footer}
      </div>
    );
  }
}
