import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Belgrade");
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displayWeather);
    }
  }

  function displayCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="timeNplace">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="city"
            autoComplete="off"
            autoFocus="on"
            placeholder="Enter city"
            className="enterCity"
            onChange={displayCity}
          />
          <input type="submit" name="search" className="search-button" />
        </form>

        <h1>{weather.city}</h1>
        <CurrentDate />
      </div>
      <div className="LocationButton">
        <button className="location-button">Current Location</button>
      </div>
      <div className="CurrentTemperature">
        <h2>
          <img src={weather.icon} alt={weather.description} />
          <br />
          {weather.temperature}°<span className="celsius-temp">C</span>
          <br />
          <span className="description">{weather.description}</span>
        </h2>
      </div>

      <div className="WeatherElements elements">
        <p>
          Humidity: {weather.humidity}% Wind: {weather.wind}km/h
        </p>
      </div>
    </div>
  );
}
