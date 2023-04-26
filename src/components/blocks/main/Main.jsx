import React from "react";
import "./style.css";
import imgMain from "../../../assets/Polygon.png";

export default function Main() {
  return (
    <div className="main-block">
      <h1>Reshetar Ivan</h1>

      <img src={imgMain} alt="Me" className="main-image" />
      <h3>frontend developer</h3>
      <svg
        width="70"
        height="417"
        viewBox="0 0 70 417"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-left"
      >
        <path
          d="M69 0L69 98.1177M1.00001 123.348L1 293.652M40.9588 188.526L40.9588 417"
          stroke=""
          stroke-width="2"
        />
      </svg>
      
    </div>
  );
}
