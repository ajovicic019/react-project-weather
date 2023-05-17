import React from "react";
import Image from "./images/forest2.jpg";
import "./Card.css";

export default function Card() {
  return (
    <div className="Card card">
      <img src={Image} className="card-img-top" alt="Forest" />
      <div className="card-body">
        <p className="card-text">There is no planet B...</p>
        <a
          href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwittaXF1bX9AhVW5ncKHdvPD-YYABADGgJlZg&ohost=www.google.com&cid=CAESa-D2Mxb5x1rxmqvPqqzpRxixLnOaxgeGeTWM6465H_37XFEC-Ux_JLlAW13pk7Z_FuRTsnRwAXx9H9JlzFthaUjALOqLK9aKlW-WkwqAawP5qFoJzaF4SN_tmRfgOBxvuH0hrxw_NinoaCBI&sig=AOD64_2vsPoXFZGKz9L0QjOgDT9FoMnccg&q&adurl&ved=2ahUKEwigoJ7F1bX9AhXQjqQKHbV-CSMQ0Qx6BAgLEAE"
          className="btn btn-warning"
          target="_blank"
          rel="noreferrer"
        >
          Donate
        </a>
      </div>
    </div>
  );
}
