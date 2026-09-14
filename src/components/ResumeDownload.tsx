import Section from "./core/Section";

const ResumeDownload = () => {
  return (
    // <Section id="Resume">
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "14px",
          background: "var(--accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </div>
      <div>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 32px)",
            fontWeight: 900,
            color: "var(--fg)",
            margin: "0 0 8px",
            letterSpacing: "-0.5px",
          }}
        >
          Download My Resume
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "var(--fg-muted)",
            margin: 0,
            // fontWeight: 300,
          }}
        >
          Get a full overview of my experience, skills, and education in one
          document.
        </p>
      </div>
      <a
        href="/my-profile/resume.pdf"
        download="Sendrayaperumal_Balathandayutham_Resume.pdf"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "14px 32px",
          borderRadius: "8px",
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 700,
          fontSize: "15px",
          fontFamily: "'Lato', sans-serif",
          textDecoration: "none",
          transition: "background 0.2s, transform 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background =
            "var(--accent-hover)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "var(--accent)";
          (e.currentTarget as HTMLElement).style.transform = "none";
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download PDF
      </a>
      <p
        style={{
          fontSize: "12px",
          color: "var(--fg-muted)",
          margin: 0,
          fontWeight: 400,
        }}
      >
        PDF · Updated September 2026
      </p>
    </div>
    // </Section>
  );
};

export default ResumeDownload;
