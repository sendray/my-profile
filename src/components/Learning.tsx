import Eyebrow from "./core/Eyebrow";
import { LEARNING } from "./utils/constants";
import LearningCard from "./LearningCard";
import RevealBlock from "./core/RevealBlock";

const Learning = () => {
  return (
    <section
      id="Learning"
      aria-label="Learning"
      style={{ padding: "96px 24px", background: "var(--bg-subtle)" }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <RevealBlock>
          <Eyebrow>Growth</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 700,
              letterSpacing: -1,
              marginBottom: 12,
            }}
          >
            Learning
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--fg-muted)",
              fontWeight: 300,
              marginBottom: 52,
            }}
          >
            Investing in deep, structured learning through the Namaste series.
          </p>
        </RevealBlock>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {LEARNING.map((course, i) => (
            <LearningCard key={i} course={course} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;
