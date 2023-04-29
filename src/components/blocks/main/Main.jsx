import React from "react";
import "./style.css";
import imgMain from "../../../assets/Polygon.png";

export default function Main() {
  return (
    <div className="main-block">
      <h1>Reshetar Ivan</h1>

      <div className="img__block">
        <img src={imgMain} alt="Me" className="main-image" />
      </div>
      <svg
        width="812"
        height="790"
        viewBox="0 0 871 790"
        xmlns="http://www.w3.org/2000/svg"
        className="svg__bg"
      >
        <path
          d="M573.067 3.63485C578.205 -1.65774 587.109 0.244538 589.636 7.17473L869.84 775.594C872.533 782.979 866.044 790.441 858.356 788.799L8.41648 607.222C0.728696 605.579 -2.14513 596.117 3.33081 590.476L573.067 3.63485Z"
        />
      </svg>

      <h3>frontend developer</h3>

      <svg
        width="70"
        height="417"
        viewBox="0 0 70 417"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg__left"
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
