import { SKILLS } from "../utils/constants";
import Section from "./core/Section";
import SectionHeading from "./core/SectionHeading";
import SkillCard from "./SkillCard";

const Skills = () => {

  return (
    <Section id="Skills">
      <SectionHeading>Skills</SectionHeading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {SKILLS.map((group) => (

          /* ─── Skill card ─── */
          <SkillCard key={group.category} group={group} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
