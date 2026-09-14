import Section from "./core/Section";
import SectionHeading from "./core/SectionHeading";

const About = () => {
  return (
    <Section id="About" subtle>
      <SectionHeading>About Me</SectionHeading>
      <div className="lg:grid md: block"
        style={{
          // display: "grid",
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
              // fontWeight: 300,
            }}
          >
            I'm an{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 400 }}>
              AI‑driven Full‑Stack Engineer
            </strong>{" "}
            with a frontend focus and over 13 years of professional experience.
            I specialize in{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 400 }}>
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
              // fontWeight: 300,
            }}
          >
            I have a strong background in{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 400 }}>
              core web vitals optimization
            </strong>
            ,{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 400 }}>
              web accessibility
            </strong>
            , and <strong style={{ color: "var(--accent)", fontWeight: 400 }}>Design System</strong> architecture. I actively leverage AI tools like{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 400 }}>
              GitHub Copilot and Claude
            </strong>{" "}
            to accelerate development workflows.
          </p>
        </div>
        <div className="lg: grid, sm: mt-5 block"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          {[
            { label: "📍", value: "Bengaluru, India" },
            { label: "🪪", value: "Technical Lead - Software Engineer" },
            // { label: "Experience", value: "13+ Years" },
            { label: "🌐", value: "Open to work" },
            { label: "📩", value: "bsendrayaperumal (at) gmail (dot) com" },
            { label: "📞", value: "+91 90723 09455" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="md: mt-3"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "10px",
                padding: "14px 16px",
              }}
            >
              {/* <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                  marginBottom: "4px",
                }}
              >
                {label}
              </div> */}
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "var(--accent)",
                }}
              >
                <span className="mr-3">{label}</span> <span>{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
