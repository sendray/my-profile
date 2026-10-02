import Eyebrow from "./core/Eyebrow";
import ContactList from "./ContactRow";
import { CONTACT_ITEMS } from "./utils/constants";
import RevealBlock from "./core/RevealBlock";

const Contact = () => {
  return (
    <section
      id="Contact"
      aria-label="Contact"
      style={{ padding: "96px 24px", background: "var(--bg-subtle)" }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div
          style={
            {
              maxWidth: "50%"
            }
          }
        >
          <RevealBlock cls="reveal-left">
            <Eyebrow>Contact</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px,4vw,44px)",
                fontWeight: 700,
                letterSpacing: -1,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              Let's build something{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                remarkable
              </span>
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--fg-muted)",
                fontWeight: 300,
                marginBottom: 0,
              }}
            >
              I'm open to discussing new opportunities, design system
              challenges, and frontend architecture. Reach out through any of
              the channels below.
            </p>
          </RevealBlock>

          <RevealBlock>
            <div
              style={{
                display: "flex",
                marginTop: "24px",
              }}
            >
              {/* <ContactList contactLogoUrl="asadsa" /> */}
              {CONTACT_ITEMS.map((group) => (
                /* ─── Skill card ─── */
                <ContactList key={group.label} group={group} />
              ))}
            </div>
          </RevealBlock>

          {/* <RevealBlock>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                {
                  label: "Email",
                  value: "bsendrayaperumal@gmail.com",
                  href: "mailto:bsendrayaperumal@gmail.com",
                },
                {
                  label: "Phone",
                  value: "+91 90723 09455",
                  href: "tel:+919072309455",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/sendrayaperumal",
                  href: "https://linkedin.com/in/sendrayaperumal",
                },
                { label: "Location", value: "India", href: undefined },
              ].map(({ label, value, href }, i) => (
                <ContactRow
                  key={i}
                  label={label}
                  value={value}
                  href={href}
                  last={i === 3}
                />
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <a
                href="/resume.pdf"
                download="Sendrayaperumal_Balathandayutham_Resume.pdf"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 28px",
                  borderRadius: 10,
                  background: "var(--accent)",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  boxShadow: "0 4px 20px var(--accent-dim)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 28px var(--accent-dim)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 20px var(--accent-dim)";
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
                  aria-hidden
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </RevealBlock> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
