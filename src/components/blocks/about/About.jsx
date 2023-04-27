import React from "react";
// import Skills from "../skills/SkillsList";
import "./style.css";
import SkillsList from "../skills/SkillsList";

export default function About() {
  return (
    <div className="about-block">
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        molestias quod, quaerat error ratione assumenda mollitia ex expedita,
        iusto, quo eveniet ad voluptas deleniti illum illo iste optio provident
        fuga!
      </p>
      <SkillsList />
    </div>
  );
}
