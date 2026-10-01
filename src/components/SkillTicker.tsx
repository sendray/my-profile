import { TICKER_ITEMS } from "./utils/constants";

const SkillTicker = () => {
  return (
    <div
      aria-hidden
      role="presentation"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        background: "var(--bg-subtle)",
        padding: "14px 0",
        overflow: "hidden",
      }}
    >
      <div className="ticker-track" style={{ gap: 0 }}>
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "0 24px",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--fg-muted)",
              whiteSpace: "nowrap",
              letterSpacing: 0.5,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillTicker;
