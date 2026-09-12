import useReveal from "@/hooks/useReveal";

import { CONTACT_ITEMS } from "@/utils/constants";

/* ─── Contact list ─── */
const ContactList = () => {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      {CONTACT_ITEMS.map(({ label, value, href, arrow }, i) => {
        const row = (
          <div
            className={`contact-row delay-${i + 1}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "22px 0",
              gap: "16px",
              borderBottom: "1px solid var(--border)",
              opacity: 0,
              animation: `fadeUp 0.55s ease forwards`,
              animationDelay: `${0.1 + i * 0.12}s`,
              transition: "color 0.2s",
              cursor: href ? "pointer" : "default",
            }}
            onMouseEnter={(e) => {
              if (!href) return;
              const label = e.currentTarget.querySelector(
                ".contact-label",
              ) as HTMLElement;
              const val = e.currentTarget.querySelector(
                ".contact-value",
              ) as HTMLElement;
              const arr = e.currentTarget.querySelector(
                ".contact-arrow",
              ) as HTMLElement;
              if (label) label.style.color = "var(--accent)";
              if (val) val.style.color = "var(--accent)";
              if (arr) {
                arr.style.transform = "translate(3px, -3px)";
                arr.style.color = "var(--accent)";
              }
            }}
            onMouseLeave={(e) => {
              const label = e.currentTarget.querySelector(
                ".contact-label",
              ) as HTMLElement;
              const val = e.currentTarget.querySelector(
                ".contact-value",
              ) as HTMLElement;
              const arr = e.currentTarget.querySelector(
                ".contact-arrow",
              ) as HTMLElement;
              if (label) label.style.color = "var(--fg-muted)";
              if (val) val.style.color = "var(--fg)";
              if (arr) {
                arr.style.transform = "none";
                arr.style.color = "var(--fg-muted)";
              }
            }}
          >
            <span
              className="contact-label"
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
                minWidth: "90px",
                transition: "color 0.2s",
              }}
            >
              {label}
            </span>
            <span
              className="contact-value"
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "var(--fg)",
                flex: 1,
                textAlign: "right",
                transition: "color 0.2s",
                wordBreak: "break-all",
              }}
            >
              {value}
            </span>
            {arrow && (
              <span
                className="contact-arrow"
                style={{
                  fontSize: "16px",
                  color: "var(--fg-muted)",
                  transition: "transform 0.2s, color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            )}
          </div>
        );
        return href ? (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "block" }}
          >
            {row}
          </a>
        ) : (
          <div key={label}>{row}</div>
        );
      })}
    </div>
  );
};

export default ContactList;
