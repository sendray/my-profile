import { useRef, useEffect } from "react";
import { LEARNING } from "./utils/constants";

const LearningCard = ({
  course,
  delay,
}: {
  course: (typeof LEARNING)[0];
  delay: number;
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
  const r = 44,
    circ = 2 * Math.PI * r;
  const offset = circ - (course.progress / 100) * circ;
  const isComplete = course.status === "completed";

  return (
    <div
      ref={ref}
      className="reveal glass"
      style={{
        borderRadius: 16,
        padding: "28px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        animationDelay: `${delay}s`,
        transition: "all 0.3s",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "none";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Glow accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: isComplete
            ? "var(--accent-dim)"
            : "var(--amber-light, rgba(245,158,11,0.08))",
          filter: "blur(24px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: isComplete ? "var(--accent)" : "var(--amber)",
              marginBottom: 6,
            }}
          >
            {isComplete ? "✓ Completed" : "⟳ In Progress"}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 700,
              color: "var(--fg)",
              marginBottom: 2,
            }}
          >
            {course.title}
          </h3>
          <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>
            by {course.by}
          </div>
        </div>
        {/* SVG ring */}
        <div
          style={{ position: "relative", width: 64, height: 64, flexShrink: 0 }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 100 100"
            aria-label={`${course.progress}% complete`}
            role="img"
          >
            <circle
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="var(--border-subtle)"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={isComplete ? "var(--accent)" : "var(--amber)"}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={offset}
              transform="rotate(-90 50 50)"
              style={{ transition: "stroke-dashoffset 1.2s ease" }}
            />
          </svg>
          <span
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 700,
              color: isComplete ? "var(--accent)" : "var(--amber)",
            }}
          >
            {course.progress}%
          </span>
        </div>
      </div>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: "var(--fg-muted)",
          fontWeight: 300,
          margin: 0,
        }}
      >
        {course.desc}
      </p>

      {/* Progress bar */}
      <div>
        <div
          style={{
            height: 4,
            borderRadius: 2,
            background: "var(--border-subtle)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${course.progress}%`,
              borderRadius: 2,
              background: isComplete ? "var(--accent)" : "var(--amber)",
              transition: "width 1.2s ease",
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {course.tags.map((t) => (
          <span
            key={t}
            style={{
              padding: "3px 9px",
              borderRadius: 5,
              fontSize: 11.5,
              fontWeight: 500,
              background: isComplete
                ? "var(--accent-dim)"
                : "var(--amber-light, rgba(245,158,11,0.1))",
              color: isComplete ? "var(--accent)" : "var(--amber)",
              border: `1px solid ${
                isComplete ? "var(--border)" : "rgba(245,158,11,0.2)"
              }`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};
export default LearningCard;
