/* ─── Section heading ─── */
const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 900,
          color: "var(--fg)",
          margin: "0 0 10px",
          letterSpacing: "-0.5px",
        }}
      >
        {children}
      </h2>
      <div
        style={{
          width: "48px",
          height: "4px",
          borderRadius: "2px",
          background: "var(--accent)",
        }}
      />
    </div>
  );
};

export default SectionHeading;
