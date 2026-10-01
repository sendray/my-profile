import { useRef, useEffect } from "react";

import Eyebrow from "./core/Eyebrow";
import { EXPERIENCE } from "./utils/constants";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
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

  function RevealBlock({
    children,
    cls = "reveal",
  }: {
    children: React.ReactNode;
    cls?: string;
  }) {
    const ref = useReveal(cls);
    return (
      <div ref={ref} className={cls}>
        {children}
      </div>
    );
  }

  return (
    <section
      id="Experience"
      aria-label="Work experience"
      style={{ padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <RevealBlock>
          <Eyebrow>Career</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 700,
              letterSpacing: -1,
              marginBottom: 56,
            }}
          >
            Work Experience
          </h2>
        </RevealBlock>
        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div
            style={{
              position: "absolute",
              left: 7,
              top: 8,
              bottom: 8,
              width: 2,
              background:
                "linear-gradient(to bottom, var(--accent), var(--border-subtle))",
              borderRadius: 2,
            }}
          />
          {EXPERIENCE.map((job, i) => (
            <ExperienceItem
              key={i}
              job={job}
              last={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
