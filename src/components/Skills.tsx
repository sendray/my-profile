import Eyebrow from "./core/Eyebrow";
import { SKILLS } from "./utils/constants";
import SkillCard from "./SkillCard";
import RevealBlock from "./core/RevealBlock";

const Skills = () => {
  return (
    <section
      id="Skills"
      aria-label="Skills"
      style={{ padding: "96px 24px", background: "var(--bg-subtle)" }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <RevealBlock>
          <Eyebrow>Expertise</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 700,
              letterSpacing: -1,
              marginBottom: 48,
            }}
          >
            Skills & Technologies
          </h2>
        </RevealBlock>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {SKILLS.map((group, gi) => (
            <SkillCard key={group.cat} group={group} delay={gi * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
