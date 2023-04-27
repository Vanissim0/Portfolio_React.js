import React from "react";
import About from "../../blocks/about/About";
import SkillsList from "../../blocks/skills/SkillsList";

export default function MainPage({ skills }) {
  return (
    <>
      <About />
      <SkillsList skills={skills} />
    </>
  );
}
