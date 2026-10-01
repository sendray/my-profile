const Hero = () => {
  return (
    <section
      id="Home"
      aria-label="Introduction"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Mesh background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 80% 60% at 70% 30%, var(--accent-dim) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(245,158,11,0.08) 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />
      {/* Grid lines */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 900, width: "100%", position: "relative" }}>
        <h1
          className="animate-fadeup d2"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(36px, 6vw, 68px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            marginBottom: 8,
          }}
        >
          Sendrayaperumal
        </h1>
        <h1
          className="animate-fadeup d3"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(36px, 6vw, 68px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            marginBottom: 28,
            color: "var(--accent)",
          }}
        >
          <span>Balathandayutham</span>
        </h1>
        <p
          className="animate-fadeup d4"
          style={{
            fontSize: 17,
            lineHeight: 1.75,
            color: "var(--fg-muted)",
            maxWidth: 560,
            marginBottom: 40,
            fontWeight: 300,
          }}
        >

          AI‑driven Frontend Engineer with{" "}
          <strong style={{ color: "var(--accent)", fontWeight: 600 }}>
            13+ years
          </strong>{" "}
          of experience in building scalable,
          accessible, and performance‑optimized web applications for global
          teams.
        </p>

        <div
          className="animate-fadeup d5"
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 56,
          }}
        >
          {/* <Button onClick={() => scrollTo("Contact")} primary>
            Let's connect
          </Button>
          <Button onClick={() => scrollTo("Experience")}>
            View experience
          </Button> */}
          <a
            href="/resume.pdf"
            download="Sendrayaperumal_Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "11px 22px",
              borderRadius: 9,
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--accent)",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "var(--font-body)",
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--fg-muted)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
          >
            ↓ Download Resume
          </a>
        </div>

        <div
          className="animate-fadein d5"
          style={{ display: "flex", gap: 40, flexWrap: "wrap" }}
        >
          {[
            ["13+", "Years"],
            ["6", "Companies"],
            ["20+", "Skills"],
          ].map(([n, l]) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 36,
                  fontWeight: 900,
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--fg-muted)",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
