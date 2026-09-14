import { SKILLS } from "../utils/constants";
import Section from "./core/Section";
import SectionHeading from "./core/SectionHeading";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <Section id="Skills">
      <SectionHeading>Skills</SectionHeading>
      {/* <p
        style={{
          fontSize: "16px",
          lineHeight: 1.9,
          color: "var(--fg-muted)",
          // fontWeight: 300,
          marginBottom: "48px",
        }}
      >
        I'm always open to discussing new opportunities, design system
        challenges, or frontend architecture questions. Feel free to reach out.
      </p> */}
      <div className="skills"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "20px",
        }}
      >
        {SKILLS.map((group) => (
          /* ─── Skill card ─── */
          <SkillCard key={group.skill} group={group} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
