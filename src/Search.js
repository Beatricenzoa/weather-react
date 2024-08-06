import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Weather from "./Weather";
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

  const form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        required
        className="search-input"
        onChange={handleChange}
      />
      <input type="submit" value="search" className="search-button" />
    </form>
  );
  const footer = (
    <footer className="footer">
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
  );
  if (weather.searched === true) {
    return (
      <div>
        {form}
        <Weather data={weather} />
        {footer}
      </div>
    );
  } else {
    searchWeather();

    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="blue"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    );
  }
}
