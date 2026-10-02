import Eyebrow from "./core/Eyebrow";
import RevealBlock from "./core/RevealBlock";

const About = () => {
  return (
    <section id="About" aria-label="About me" style={{ padding: "96px 24px" }}>
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px 80px",
          alignItems: "center",
        }}
      >
        <div>
          <RevealBlock cls="reveal-left">
            <Eyebrow>About</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px,4vw,48px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: -1,
                marginBottom: 20,
              }}
            >
              I build the web that{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                others dream
              </span>{" "}
              of
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--fg-muted)",
                marginBottom: 16,
                fontWeight: 300,
              }}
            >
              I'm an{" "}
              <strong style={{ color: "var(--accent)", fontWeight: 400 }}>
                AI-driven Full-Stack Engineer
              </strong>{" "}
              with a frontend focus and over 13 years of professional
              experience. I specialize in{" "}
              <strong style={{ color: "var(--accent)", fontWeight: 400 }}>
                React.js, TypeScript, and Design System
              </strong>{" "}
              architecture, delivering enterprise-grade digital experiences for
              clients across Europe, the US, Australia, and the Middle East. I
              have a strong background in{" "}
              <strong style={{ color: "var(--accent)", fontWeight: 400 }}>
                Core Web Vitals Optimization, Web Accessibility,{" "}
              </strong>
              and{" "}
              <strong style={{ color: "var(--accent)", fontWeight: 400 }}>
                Performance Optimization
              </strong>
              .
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--fg-muted)",
                fontWeight: 300,
              }}
            >
              I actively leverage AI tools like{" "}
              <strong style={{ color: "var(--accent)", fontWeight: 400 }}>
                GitHub Copilot
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--accent)", fontWeight: 400 }}>
                Claude
              </strong>{" "}
              to accelerate development workflows.
            </p>
          </RevealBlock>
        </div>

        <RevealBlock>
          <div
            style={{
              display: "grid",
              // gridTemplateColumns: "1fr 1fr",
              background: "var(--bg-dim)",
              gap: 12,
            }}
          >
            {[
              { label: "📍", value: "India" },
              { label: "🪪", value: "Technical Lead - Software Engineer" },
              // { label: "Experience", value: "13+ Years" },
              { label: "🌐", value: "Open to work" },
              { label: "📩", value: "bsendrayaperumal(at)gmail(dot)com" },
              { label: "📞", value: "+91 90723 09455" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="glass flex align-center gap-2"
                style={{ borderRadius: 12, padding: "16px 18px" }}
              >
                {/* <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 16,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 5,
                  }}
                >
                  {label}
                </div> */}
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--accent)",
                    wordBreak: "break-all",
                  }}
                >
                  <span className="pr-3">{label}</span> <span>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
};

export default About;
