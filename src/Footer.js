import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <p className="linkToCode">
        <a
          href="https://github.com/ajovicic019/react-project-weather"
          target="_blank"
          rel="noreferrer"
          className="linkOpenSource"
        >
          Open-source code
        </a>
        <span className="myName"> by Andrea Jovicic</span>
      </p>
    </div>
  );
}
