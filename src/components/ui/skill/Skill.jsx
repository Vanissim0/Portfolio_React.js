import React from "react";
import "./style.css";

export default function Skill({ name, image }) {
  return (
    <>
      <img src={image} width={313} height={320} alt="skill" className="skill" />
      <p>{name}</p>
    </>
  );
}
