import { useRef, useEffect } from "react";
import { SKILLS } from "./utils/constants";

const SkillCard = ({
  group,
  delay,
}: {
  group: (typeof SKILLS)[0];
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
  return (
    <div
      ref={ref}
      className="reveal glass"
      style={{
        borderRadius: 14,
        padding: "24px 22px",
        transition: "all 0.3s",
        animationDelay: `${delay}s`,
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
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 14,
          fontWeight: 500,
        }}
      >
        {group.cat}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {group.items.map((item) => (
          <span
            key={item}
            style={{
              padding: "4px 10px",
              borderRadius: 5,
              background: "var(--accent-dim)",
              color: "var(--fg)",
              fontSize: 12.5,
              fontWeight: 500,
              border: "1px solid var(--border)",
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