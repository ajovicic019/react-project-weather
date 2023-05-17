import React from "react";
import axios from "axios";
import "./Forecast.css";
export default function Forecast() {
  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  let apiUrl = `api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForcast);

  function displayForcast(coord) {
    console.log(coord);
  }

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="forcastDay">Thu</div>
          <img src="/" alt="w" />
          <div className="forcastTemperature">min°-max°</div>
        </div>
      </div>
    </div>
  );
}
