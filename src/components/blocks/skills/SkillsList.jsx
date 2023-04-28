import React from "react";
import Skill from "../../ui/skill/Skill";
import "./style.css";

export default function SkillsList() {
  const skillsList = [
    {
      id: 0,
      name: "HTML",
      image: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
        </svg>
      ),
    },
    {
      id: 1,
      name: "CSS",
      image: "../../assets/html5.svg",
    },
    {
      id: 2,
      name: "JavaScript",
      image:
        "D:/Projects/MyProjects/myPorfolio_react/my-portfolio/src/assets/html5.svg",
    },
    {
      id: 3,
      name: "React",
      image:
        "https://d29fhpw069ctt2.cloudfront.net/font/59898/preview/299db05c695766e5f0e1f2fdc16c062e.jpg",
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
