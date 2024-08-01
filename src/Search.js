import React, { useState } from "react";
import "./App.css";

export default function Search(props) {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  let header = (
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
  let main = (
    <main>
      <div class="current-weather">
        <div class="current-details">
          <h1 id="current-city">{city}</h1>
          <p>
            <span id="current-date"></span>,<span id="description"></span>
          </p>
        </div>
        <div class="precipitation">
          <p>
            Humidity: <strong id="humidity"></strong>
            <br />
            Wind: <strong id="wind"></strong>
          </p>
        </div>
      </div>
      <div id="temperature-details">
        <div id="icon"></div>
        <div id="temperature"></div>
        <div id="unit">℃</div>
      </div>
      <div id="weather-forecast"></div>
    </main>
  );
  return (
    <div>
      {header}
      {main}
    </div>
  );
}
