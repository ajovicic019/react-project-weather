import React from "react";
import Weather from "./Weather.js";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App container wrapper">
      <Weather />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
