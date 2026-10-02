import Chip from "./core/Chip";
import Eyebrow from "./core/Eyebrow";
import RevealBlock from "./core/RevealBlock";

const Education = () => {
  return (
    <section
      id="Education"
      aria-label="Education"
      style={{ padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <RevealBlock>
          <Eyebrow>Foundation</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 700,
              letterSpacing: -1,
              marginBottom: 48,
            }}
          >
            Education
          </h2>
        </RevealBlock>
        <RevealBlock>
          <div className="glass flex gap-8 align-center flex-wrap py-10 px-6 md:justify-center">
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 28 }}>🎓</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 2,
                }}
              >
                Bachelor's Degree
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--fg)",
                }}
              >
                Information Technology
              </h3>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--fg-muted)",
                  marginBottom: "14px",
                }}
              >
                Hindusthan Institute of Technology
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Chip>🖊️ CGPA: 8.2</Chip>
                <Chip>📅 2012</Chip>
                <Chip>📍 Coimbatore, India</Chip>
              </div>
            </div>
            {/* <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              
            </div> */}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
};

export default Education;
