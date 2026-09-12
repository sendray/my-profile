import Section from "./core/Section";
import SectionHeading from "./core/SectionHeading";

const About = () => {

  return (
    <Section id="About" subtle>
      <SectionHeading>About Me</SectionHeading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--fg-muted)",
              marginBottom: "16px",
              fontWeight: 300,
            }}
          >
            I'm a{" "}
            <strong style={{ color: "var(--fg)", fontWeight: 700 }}>
              AI‑driven Full‑Stack Engineer
            </strong>{" "}
            with a frontend focus and over 13 years of professional experience.
            I specialize in{" "}
            <strong style={{ color: "var(--fg)", fontWeight: 700 }}>
              React.js, TypeScript, and Adobe Experience Manager (AEM)
            </strong>
            , delivering enterprise-grade digital experiences for clients across
            Europe, the US, Australia, and the Middle East.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--fg-muted)",
              fontWeight: 300,
            }}
          >
            I have a strong background in{" "}
            <strong style={{ color: "var(--fg)", fontWeight: 700 }}>
              Core Web Vitals optimization
            </strong>
            ,{" "}
            <strong style={{ color: "var(--fg)", fontWeight: 700 }}>
              WCAG accessibility
            </strong>
            , and Design System architecture. I actively leverage AI tools like{" "}
            <strong style={{ color: "var(--fg)", fontWeight: 700 }}>
              GitHub Copilot and Claude
            </strong>{" "}
            to accelerate development workflows.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          {[
            { label: "Location", value: "India" },
            { label: "Role", value: "Technical Lead" },
            { label: "Experience", value: "13+ Years" },
            { label: "Availability", value: "Open to work" },
            { label: "Email", value: "bsendrayaperumal@gmail.com" },
            { label: "Phone", value: "+91 90723 09455" },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "10px",
                padding: "14px 16px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "4px",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--fg)",
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
