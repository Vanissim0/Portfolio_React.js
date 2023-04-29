import React from "react";
import Skill from "../../ui/skill/Skill";
import "./style.css";
import html5 from "../../../assets/html5.svg";
import css3 from "../../../assets/css3.svg";
import js from "../../../assets/js.svg";
import react from "../../../assets/react.svg"

export default function SkillsList() {
  const skillsList = [
    {
      id: 0,
      name: "HTML",
      image: html5,
    },
    {
      id: 1,
      name: "CSS",
      image: css3,
    },
    {
      id: 2,
      name: "JavaScript",
      image: js,
    },
    {
      id: 3,
      name: "React",
      image: react,
    },
  ];
  return (
    <div className="skillsList">
      {skillsList?.length ? (
        <>
          <ul className="skills">
            {skillsList.map((skill) => (
              <li key={skill.id} className="skill">
                <Skill {...skill} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        console.log("error")
      )}
    </div>
  );
}
