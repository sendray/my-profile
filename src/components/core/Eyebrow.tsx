const Eyebrow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 14,
      }}
    >
      <span
        style={{
          width: 24,
          height: 2,
          background: "var(--accent)",
          borderRadius: 1,
          display: "inline-block",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: 2.5,
          textTransform: "uppercase",
          color: "var(--accent)",
          fontWeight: 500,
        }}
      >
        {children}
      </span>
    </div>
  );
};

export default Eyebrow;
