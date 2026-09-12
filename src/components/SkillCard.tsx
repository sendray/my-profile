import useReveal from "@/hooks/useReveal";

const SkillCard = (
  {
    group,
  }: {
    group: { category: string; items: string[] };
  }
) => {
  const ref = useReveal();
  
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        borderRadius: "12px",
        padding: "24px",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "14px",
        }}
      >
        {group.category}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
        {group.items.map((item) => (
          <span
            key={item}
            style={{
              padding: "4px 10px",
              borderRadius: "5px",
              fontSize: "12px",
              fontWeight: 700,
              border: "1px solid var(--card-border)",
              color: "var(--fg-muted)",
              background: "var(--bg-subtle)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
