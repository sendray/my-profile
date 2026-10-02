import Eyebrow from "./core/Eyebrow";
import { EXPERIENCE } from "./utils/constants";
import ExperienceItem from "./ExperienceItem";
import RevealBlock from "./core/RevealBlock";

const Experience = () => {
  return (
    <section
      id="Experience"
      aria-label="Work experience"
      style={{ padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <RevealBlock>
          <Eyebrow>Career</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 700,
              letterSpacing: -1,
              marginBottom: 56,
            }}
          >
            Work Experience
          </h2>
        </RevealBlock>
        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div
            style={{
              position: "absolute",
              left: 7,
              top: 8,
              bottom: 8,
              width: 2,
              background:
                "linear-gradient(to bottom, var(--accent), var(--border-subtle))",
              borderRadius: 2,
            }}
          />
          {EXPERIENCE.map((job, i) => (
            <ExperienceItem
              key={i}
              job={job}
              last={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
