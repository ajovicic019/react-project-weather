import React from "react";
import "./Forecast.css";
export default function Forecast() {
  let weatherData = {
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    img: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    minTemp: 10,
    maxTemp: 25,
    description: "Partly cloudy",
  };
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="forcastDay">{weatherData.days[5]}</div>
          <img src={weatherData.img} alt="{weatherData.description}" />
          <div className="forcastTemperature">
            {weatherData.minTemp}°-{weatherData.maxTemp}°
          </div>
        </div>
        <div className="col-2">
          <div className="forcastDay">{weatherData.days[6]}</div>
          <img src={weatherData.img} alt="{weatherData.description}" />
          <div className="forcastTemperature">
            {weatherData.minTemp}°-{weatherData.maxTemp}°
          </div>
        </div>
        <div className="col-2">
          <div className="forcastDay">{weatherData.days[0]}</div>
          <img src={weatherData.img} alt="{weatherData.description}" />
          <div className="forcastTemperature">
            {weatherData.minTemp}°-{weatherData.maxTemp}°
          </div>
        </div>
        <div className="col-2">
          <div className="forcastDay">{weatherData.days[1]}</div>
          <img src={weatherData.img} alt="{weatherData.description}" />
          <div className="forcastTemperature">
            {weatherData.minTemp}°-{weatherData.maxTemp}°
          </div>
        </div>{" "}
        <div className="col-2">
          <div className="forcastDay">{weatherData.days[2]}</div>
          <img src={weatherData.img} alt="{weatherData.description}" />
          <div className="forcastTemperature">
            {weatherData.minTemp}°-{weatherData.maxTemp}°
          </div>
        </div>
        <div className="col-2">
          <div className="forcastDay">{weatherData.days[3]}</div>
          <img src={weatherData.img} alt="{weatherData.description}" />
          <div className="forcastTemperature">
            {weatherData.minTemp}°-{weatherData.maxTemp}°
          </div>
        </div>
      </div>
    </div>
  );
}
