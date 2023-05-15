import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Belgrade");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function displayCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="timeNplace">
        <form onSubmit={handleSubmit}>
          <label>Enter a city:</label>
          <input
            type="text"
            name="city"
            autoComplete="off"
            autoFocus="on"
            className="enterCity"
            onChange={displayCity}
          />
          <input type="submit" name="search" className="search-button" />
        </form>

        <h1>{city}</h1>
        <CurrentDate />
      </div>
      <div className="LocationButton">
        <button className="location-button">Current Location</button>
      </div>
      <div className="CurrentTemperature">
        <h2>
          <img src="/" alt="weatherData.description" />
          <br />
          weatherData.temperature°<span className="celsius-temp">C</span>
          <br />
          <span className="description">weatherData.description</span>
        </h2>
      </div>

      <div className="WeatherElements elements">
        <p>Humidity: weatherData.humidity% Wind: weatherData.wind km/h</p>
      </div>
    </div>
  );
}
