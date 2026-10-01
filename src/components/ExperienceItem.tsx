import { useRef, useEffect } from "react";
import { EXPERIENCE } from "./utils/constants";

const ExperienceItem = ({
  job,
  last,
}: {
  job: (typeof EXPERIENCE)[0];
  last: boolean;
}) => {
  function useReveal(cls = "reveal") {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            el.classList.add("visible");
            obs.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, [cls]);
    return ref;
  }

  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{ marginBottom: last ? 0 : 32, position: "relative" }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: "absolute",
          left: -32,
          top: 18,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: job.accent ? "var(--accent)" : "var(--bg-subtle)",
          border: `2px solid ${job.accent ? "var(--accent)" : "var(--border)"}`,
          zIndex: 1,
        }}
      >
        {job.accent && (
          <div
            style={{
              position: "absolute",
              inset: -4,
              borderRadius: "50%",
              border: "2px solid var(--accent)",
              opacity: 0.3,
              animation: "pulse-ring 2s ease-out infinite",
            }}
          />
        )}
      </div>
      <div
        className="glass"
        style={{
          borderRadius: 14,
          padding: "22px 26px",
          transition: "box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 4,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 17,
              fontWeight: 700,
              color: "var(--fg-muted)",
              margin: 0,
            }}
          >
            {job.title}
          </h3>
          {/* <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--accent)",
              whiteSpace: "nowrap",
              letterSpacing: 0.3,
            }}
          >
            📅 {job.period}
          </span> */}
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 500,
            marginBottom: job.bullets.length ? 12 : 0,
          }}
        >
          <div
            style={{
              marginBottom: "8px",
              color: "var(--accent)",
              fontSize: "14px"
            }}
          >
            {job.company}
          </div>
          <div
            style={{
              marginBottom: "4px",
              color: "var(--fg-muted)",
            }}
          >
            📅 {job.period}
          </div>
          <div
            style={{
              marginBottom: "12px",
              color: "var(--fg-muted)",
            }}
          >
            📍 {job.location}
          </div>
        </div>
        {job.bullets.length > 0 && (
          <ul style={{ margin: 0, paddingLeft: 18, listStyleType: "disc" }}>
            {job.bullets.map((b, i) => (
              <li
                key={i}
                style={{
                  fontSize: 14,
                  color: "var(--fg-muted)",
                  marginBottom: 4,
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
