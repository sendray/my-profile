const Footer = () => {
  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "28px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 7,
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                color: "#fff",
                fontSize: 12,
                fontStyle: "italic",
              }}
            >
              SB
            </span>
          </div>
          {/* <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 700,
              color: "var(--fg)",
            }}
          >
            Sendrayaperumal Balathandayutham
          </span> */}
        </div>
        <p
          style={{
            fontSize: 12,
            color: "var(--fg-muted)",
            margin: 0,
            fontFamily: "var(--font-mono)",
          }}
        >
          © {new Date().getFullYear()} · React + Vite + Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
