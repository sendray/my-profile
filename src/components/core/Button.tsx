const Button = ({
  children,
  onClick,
  primary,
}: {
  children: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 24px",
        borderRadius: 9,
        border: primary ? "none" : "1px solid var(--border)",
        background: primary ? "var(--accent)" : "transparent",
        color: primary ? "#fff" : "var(--fg)",
        fontSize: 14,
        fontWeight: 700,
        fontFamily: "var(--font-body)",
        cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: primary ? "0 4px 16px var(--accent-dim)" : "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "none";
      }}
    >
      {children}
    </button>
  );
};

export default Button;
