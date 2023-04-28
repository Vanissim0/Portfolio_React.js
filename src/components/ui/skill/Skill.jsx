import React from "react";
import "./style.css";

export default function Skill({ name, image }) {
  return (
    <>
      <img src={image} width={100} height={100} alt="skill" className="skill" />
      <p>{name}</p>
    </>
  );
}
