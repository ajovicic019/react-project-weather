import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="timeNplace">
        <form>
          <label>Enter a city:</label>
          <input
            type="text"
            name="city"
            autoComplete="off"
            autoFocus="on"
            className="enterCity"
          />
          <input type="submit" name="search" className="search-button" />
        </form>

        <h1>weatherData.city</h1>
        <p>weatherData.date</p>
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
