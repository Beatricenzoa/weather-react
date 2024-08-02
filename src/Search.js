import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import axios from "axios";
import "./App.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ searched: false });

  function displayWeather(response) {
    setWeather({
      searched: true,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function searchWeather() {
    const key = "0f8t20affd39ebb0d8d3f0o83cf0b40f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
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
  let currentWeather = (
    <main>
      <h1 id="current-city">{weather.city}</h1>
      <div className="current-details">
        <div className="current-weather">
          <div className="precipitation">
            <CurrentDate date={weather.date} />
            <p> {weather.description}</p>
            <p>
              Humidity: <strong id="humidity">{weather.humidity}%</strong>,
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
      <footer>
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
      </footer>
    </main>
  );
  if (weather.searched === true) {
    return (
      <div>
        {header}
        {currentWeather}
      </div>
    );
  } else {
    return (
      <div>
        {header}
        {searchWeather()}
      </div>
    );
  }
}
