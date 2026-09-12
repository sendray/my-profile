const Footer = () => {
  return (
    <footer
      style={{
        background: "var(--bg-subtle)",
        borderTop: "1px solid var(--border)",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "6px",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#fff", fontWeight: 900, fontSize: "13px" }}>
              SB
            </span>
          </div>
          <span
            style={{ fontWeight: 700, fontSize: "14px", color: "var(--fg)" }}
          >
            Sendrayaperumal Balathandayutham
          </span>
        </div>
        <p style={{ fontSize: "13px", color: "var(--fg-muted)", margin: 0 }}>
          © {new Date().getFullYear()} · Senior Frontend Developer · Built with
          React + Vite + Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
