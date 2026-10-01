import { useRef, useEffect } from "react";

const ContactList = ({
  group,
}: {
  group: { label: string; logoUrl: string; href: string };
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
    <a href={group.href} target="_blank">
      <div
        ref={ref}
        className="reveal"
        style={{
          // padding: "8px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
          <span
            style={{
              padding: "4px 10px",
              fontSize: "12px",
              color: "var(--fg-muted)",
              whiteSpace: "nowrap",
              width: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="w-full object-cover"
              alt="skills-logo"
              src={group.logoUrl}
            />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ContactList;
