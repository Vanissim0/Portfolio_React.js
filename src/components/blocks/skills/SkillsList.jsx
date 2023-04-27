import React from "react";
import Skill from "../../ui/skill/Skill";
import "./style.css";

export default function SkillsList({ skills }) {
  return (
    <div className="skillsList">
      {skills?.length ? (
        <>
          <ul className="star-list__list">
            {skills.map((skill) => (
              <li className="star-list__item" key={skill.id}>
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
