const HeroBanner = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="Home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 60px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 60% 40%, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 60%)",
          // backgroundColor: "#ecf1f1",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "720px", position: "relative" }}>
        {/* <p
          className="animate-fadeup delay-1"
          style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "16px",
          }}
        >
          Senior Frontend Developer
        </p> */}
        <h1
          className="animate-fadeup delay-2"
          style={{
            fontSize: "clamp(36px, 6vw, 68px)",
            fontWeight: 900,
            lineHeight: 1.08,
            color: "var(--fg)",
            margin: "0 0 20px",
            letterSpacing: "-1.5px",
          }}
        >
          Sendrayaperumal
          <br />
          <span style={{ color: "var(--accent)" }}>Balathandayutham</span>
        </h1>
        <p
          className="animate-fadeup delay-3"
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "var(--fg-muted)",
            margin: "0 0 36px",
            fontWeight: 300,
          }}
        >
          AI‑driven frontend engineer with{" "}
          <strong style={{ color: "var(--accent)", fontWeight: 700 }}>
            13+ years
          </strong>{" "}
          of experience in building scalable,
          accessible, and performance‑optimized web applications for global
          teams.
        </p>
        <div
          className="animate-fadeup delay-4"
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => scrollTo("Contact")}
            style={{
              padding: "13px 28px",
              borderRadius: "8px",
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "15px",
              fontFamily: "'Lato', sans-serif",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background =
                "var(--accent-hover)";
              (e.target as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "var(--accent)";
              (e.target as HTMLElement).style.transform = "none";
            }}
          >
            Get in Touch
          </button>
          {/* <button
            onClick={() => scrollTo("About")}
            style={{
              padding: "13px 28px",
              borderRadius: "8px",
              background: "transparent",
              color: "var(--fg)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "15px",
              fontFamily: "'Lato', sans-serif",
              transition: "border-color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor = "var(--accent)";
              (e.target as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor = "var(--border)";
              (e.target as HTMLElement).style.transform = "none";
            }}
          >
            View Work
          </button> */}
        </div>
        <div
          className="animate-fadein delay-5"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginTop: "56px",
            flexWrap: "wrap",
          }}
        >
          {[
            ["13", "Years Experience"],
            ["6", "Companies"],
            ["20+", "Skills"],
          ].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 900,
                  color: "var(--accent)",
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "var(--fg-muted)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
