const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      style={{
        padding: "5px 12px",
        borderRadius: 6,
        border: "1px solid var(--border)",
        background: "var(--bg-subtle)",
        fontSize: 13,
        color: "var(--fg-muted)",
        fontWeight: 500,
        fontFamily: "var(--font-mono)",
      }}
    >
      {children}
    </span>
  );
};

export default Chip;
