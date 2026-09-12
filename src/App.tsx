import { useState, useEffect, useRef } from "react";

/* ─── Theme hook ─── */
function useTheme() {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
}

/* ─── Intersection reveal hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Data ─── */
const skills = [
  { category: "Frontend", items: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Micro-frontend", "Alpine.js", "Atomic Design"] },
  { category: "AEM", items: ["HTL", "AEM Sites", "ClientLibs", "CIF Components", "Component Development", "Content Authoring", "Experience Fragments"] },
  { category: "Performance", items: ["Core Web Vitals", "Lazy Loading", "Code Splitting", "Lighthouse Audits"] },
  { category: "Testing & Tools", items: ["Jest", "React Testing Library", "AXE", "NVDA", "GraphQL", "REST APIs", "Git", "Husky"] },
];

const experience = [
  {
    title: "Technical Lead – Software Engineer",
    company: "Tech Mahindra Private Limited",
    period: "08/2025 – Present",
    location: "Bengaluru, India",
    bullets: ["Contributing to the Beam Design System to ensure enterprise UI consistency", "Accessibility and performance audits aligned with WCAG standards"],
  },
  {
    title: "Senior Lead Software Engineer",
    company: "Pattem Digital Technologies (Adobe)",
    period: "07/2023 – 05/2025",
    location: "Bengaluru, India",
    bullets: ["React + AEM integration for Adobe enterprise projects", "Cross-browser compatible UI with GraphQL/REST API integration", "Unit testing with Jest; accessibility with AXE, Wave, NVDA"],
  },
  {
    title: "Senior UI Engineer",
    company: "Prevalent AI India Private Limited",
    period: "11/2021 – 07/2023",
    location: "Kochi, India",
    bullets: ["Built reusable component library published to private npm registry", "Responsive web design with Material UI, Bootstrap, Tailwind CSS", "Maintained release notes, developer guides, and peer code reviews"],
  },
  {
    title: "Assistant Consultant",
    company: "Tata Consultancy Services",
    period: "11/2015 – 11/2021",
    location: "Kochi, India",
    bullets: ["React and Angular apps for clients across Middle East and Europe", "Widgets for banking and insurance portfolios", "Improved Lighthouse scores and web accessibility across projects"],
  },
  {
    title: "Senior Software Developer & UX Designer",
    company: "OneModo Technologies Pvt Ltd",
    period: "11/2013 – 10/2015",
    location: "Chennai, India",
    bullets: [],
  },
  {
    title: "PHP Developer",
    company: "BigSpire Software Private Limited",
    period: "11/2012 – 10/2013",
    location: "Chennai, India",
    bullets: [],
  },
];

const navLinks = ["Home", "About", "Skills", "Experience", "Education", "Resume", "Contact"];

/* ─── App ─── */
export default function App() {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Lato', 'Helvetica Neue', Arial, sans-serif", background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      {/* ── NAV ── */}
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "background 0.3s, border 0.3s",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <button onClick={() => scrollTo("Home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: "16px", letterSpacing: "-1px" }}>SB</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: "15px", color: "var(--fg)", letterSpacing: "0.2px" }}>Sendrayaperumal</span>
          </button>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "6px" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollTo(link)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "6px 12px", borderRadius: "6px",
                  fontSize: "14px", fontWeight: 700,
                  color: activeSection === link ? "var(--accent)" : "var(--fg-muted)",
                  transition: "color 0.2s",
                  fontFamily: "'Lato', sans-serif",
                }}>
                {link}
              </button>
            ))}
            <button onClick={toggle}
              style={{
                marginLeft: "8px", background: "var(--bg-subtle)", border: "1px solid var(--border)",
                borderRadius: "8px", cursor: "pointer", padding: "6px 10px", fontSize: "16px",
                color: "var(--fg)", transition: "background 0.2s",
              }}>
              {dark ? "☀️" : "🌙"}
            </button>
          </nav>

          {/* Mobile controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="mobile-only">
            <button onClick={toggle} style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: "8px", cursor: "pointer", padding: "6px 10px", fontSize: "16px" }}>
              {dark ? "☀️" : "🌙"}
            </button>
            <button onClick={() => setMenuOpen((o) => !o)} style={{ background: "none", border: "1px solid var(--border)", borderRadius: "8px", cursor: "pointer", padding: "6px 10px", color: "var(--fg)", fontSize: "18px" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "var(--nav-bg)", backdropFilter: "blur(12px)", borderTop: "1px solid var(--border)", padding: "12px 24px 16px" }}>
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollTo(link)}
                style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "10px 0", fontSize: "15px", fontWeight: 700, color: activeSection === link ? "var(--accent)" : "var(--fg)", fontFamily: "'Lato', sans-serif" }}>
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="Home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Background grid accent */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 60% 40%, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 60%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "720px", position: "relative" }}>
          <p className="animate-fadeup delay-1" style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px" }}>
            Senior Frontend Developer
          </p>
          <h1 className="animate-fadeup delay-2" style={{ fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 900, lineHeight: 1.08, color: "var(--fg)", margin: "0 0 20px", letterSpacing: "-1.5px" }}>
            Sendrayaperumal<br />
            <span style={{ color: "var(--accent)" }}>Balathandayutham</span>
          </h1>
          <p className="animate-fadeup delay-3" style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--fg-muted)", margin: "0 0 36px", fontWeight: 300 }}>
            AI‑driven full‑stack engineer with <strong style={{ color: "var(--fg)", fontWeight: 700 }}>13+ years</strong> of experience in React.js, TypeScript, and AEM.
            Building scalable, accessible, and performance‑optimized web applications for global teams.
          </p>
          <div className="animate-fadeup delay-4" style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("Contact")}
              style={{ padding: "13px 28px", borderRadius: "8px", background: "var(--accent)", color: "#fff", border: "none", cursor: "pointer", fontWeight: 700, fontSize: "15px", fontFamily: "'Lato', sans-serif", transition: "background 0.2s, transform 0.15s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--accent-hover)"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "var(--accent)"; (e.target as HTMLElement).style.transform = "none"; }}>
              Get in Touch
            </button>
            <button onClick={() => scrollTo("About")}
              style={{ padding: "13px 28px", borderRadius: "8px", background: "transparent", color: "var(--fg)", border: "1px solid var(--border)", cursor: "pointer", fontWeight: 700, fontSize: "15px", fontFamily: "'Lato', sans-serif", transition: "border-color 0.2s, transform 0.15s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = "var(--border)"; (e.target as HTMLElement).style.transform = "none"; }}>
              View Work
            </button>
          </div>
          <div className="animate-fadein delay-5" style={{ display: "flex", justifyContent: "center", gap: "32px", marginTop: "56px", flexWrap: "wrap" }}>
            {[["13+", "Years Experience"], ["6", "Companies"], ["20+", "Technologies"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "32px", fontWeight: 900, color: "var(--accent)" }}>{num}</div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--fg-muted)", letterSpacing: "1px", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <Section id="About" subtle>
        <SectionHeading>About Me</SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "16px", fontWeight: 300 }}>
              I'm a <strong style={{ color: "var(--fg)", fontWeight: 700 }}>AI‑driven Full‑Stack Engineer</strong> with a frontend focus and over 13 years of professional experience. I specialize in <strong style={{ color: "var(--fg)", fontWeight: 700 }}>React.js, TypeScript, and Adobe Experience Manager (AEM)</strong>, delivering enterprise-grade digital experiences for clients across Europe, the US, Australia, and the Middle East.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--fg-muted)", fontWeight: 300 }}>
              I have a strong background in <strong style={{ color: "var(--fg)", fontWeight: 700 }}>Core Web Vitals optimization</strong>, <strong style={{ color: "var(--fg)", fontWeight: 700 }}>WCAG accessibility</strong>, and Design System architecture. I actively leverage AI tools like <strong style={{ color: "var(--fg)", fontWeight: 700 }}>GitHub Copilot and Claude</strong> to accelerate development workflows.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { label: "Location", value: "India" },
              { label: "Role", value: "Technical Lead" },
              { label: "Experience", value: "13+ Years" },
              { label: "Availability", value: "Open to work" },
              { label: "Email", value: "bsendrayaperumal@gmail.com" },
              { label: "Phone", value: "+91 90723 09455" },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: "var(--bg)", border: "1px solid var(--card-border)", borderRadius: "10px", padding: "14px 16px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--accent)", marginBottom: "4px" }}>{label}</div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--fg)" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SKILLS ── */}
      <Section id="Skills">
        <SectionHeading>Skills</SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {skills.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </Section>

      {/* ── EXPERIENCE ── */}
      <Section id="Experience" subtle>
        <SectionHeading>Experience</SectionHeading>
        <div style={{ position: "relative", paddingLeft: "28px", borderLeft: "2px solid var(--border)" }}>
          {experience.map((job, i) => (
            <ExperienceItem key={i} job={job} last={i === experience.length - 1} />
          ))}
        </div>
      </Section>

      {/* ── EDUCATION ── */}
      <Section id="Education">
        <SectionHeading>Education</SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <EduCard
            degree="Bachelor's Degree — Information Technology"
            school="Hindusthan Institute of Technology"
            year="2012"
            location="India"
          />
        </div>
      </Section>

      {/* ── RESUME DOWNLOAD ── */}
      <Section id="Resume">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 900, color: "var(--fg)", margin: "0 0 8px", letterSpacing: "-0.5px" }}>Download My Resume</h2>
            <p style={{ fontSize: "16px", color: "var(--fg-muted)", margin: 0, fontWeight: 300 }}>Get a full overview of my experience, skills, and education in one document.</p>
          </div>
          <a
            href="/resume.pdf"
            download="Sendrayaperumal_Balathandayutham_Resume.pdf"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "14px 32px", borderRadius: "8px",
              background: "var(--accent)", color: "#fff",
              fontWeight: 700, fontSize: "15px",
              fontFamily: "'Lato', sans-serif",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
          <p style={{ fontSize: "12px", color: "var(--fg-muted)", margin: 0, fontWeight: 400 }}>PDF · Updated September 2026</p>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="Contact" subtle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <div>
            <SectionHeading>Get In Touch</SectionHeading>
            <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--fg-muted)", fontWeight: 300, margin: 0 }}>
              I'm always open to discussing new opportunities, design system challenges, or frontend architecture questions. Feel free to reach out.
            </p>
          </div>
          <ContactList />
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "var(--bg-subtle)", borderTop: "1px solid var(--border)", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "12px" }}>
            <div style={{ width: "30px", height: "30px", borderRadius: "6px", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: "13px" }}>SB</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: "14px", color: "var(--fg)" }}>Sendrayaperumal Balathandayutham</span>
          </div>
          <p style={{ fontSize: "13px", color: "var(--fg-muted)", margin: 0 }}>
            © {new Date().getFullYear()} · Senior Frontend Developer · Built with React + Vite + Tailwind
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .mobile-only { display: none !important; }
        }
      `}</style>
    </div>
  );
}

/* ─── Contact list ─── */
const contactItems = [
  { label: "Email", value: "bsendrayaperumal@gmail.com", href: "mailto:bsendrayaperumal@gmail.com", arrow: true },
  { label: "Phone", value: "+91 90723 09455", href: "tel:+919072309455", arrow: true },
  { label: "LinkedIn", value: "linkedin.com/in/sendrayaperumal", href: "https://linkedin.com/in/sendrayaperumal", arrow: true },
  { label: "Location", value: "India", href: undefined, arrow: false },
];

function ContactList() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      {contactItems.map(({ label, value, href, arrow }, i) => {
        const row = (
          <div
            className={`contact-row delay-${i + 1}`}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "22px 0", gap: "16px",
              borderBottom: "1px solid var(--border)",
              opacity: 0,
              animation: `fadeUp 0.55s ease forwards`,
              animationDelay: `${0.1 + i * 0.12}s`,
              transition: "color 0.2s",
              cursor: href ? "pointer" : "default",
            }}
            onMouseEnter={(e) => {
              if (!href) return;
              const label = e.currentTarget.querySelector(".contact-label") as HTMLElement;
              const val = e.currentTarget.querySelector(".contact-value") as HTMLElement;
              const arr = e.currentTarget.querySelector(".contact-arrow") as HTMLElement;
              if (label) label.style.color = "var(--accent)";
              if (val) val.style.color = "var(--accent)";
              if (arr) { arr.style.transform = "translate(3px, -3px)"; arr.style.color = "var(--accent)"; }
            }}
            onMouseLeave={(e) => {
              const label = e.currentTarget.querySelector(".contact-label") as HTMLElement;
              const val = e.currentTarget.querySelector(".contact-value") as HTMLElement;
              const arr = e.currentTarget.querySelector(".contact-arrow") as HTMLElement;
              if (label) label.style.color = "var(--fg-muted)";
              if (val) val.style.color = "var(--fg)";
              if (arr) { arr.style.transform = "none"; arr.style.color = "var(--fg-muted)"; }
            }}
          >
            <span className="contact-label" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--fg-muted)", minWidth: "90px", transition: "color 0.2s" }}>{label}</span>
            <span className="contact-value" style={{ fontSize: "15px", fontWeight: 700, color: "var(--fg)", flex: 1, textAlign: "right", transition: "color 0.2s", wordBreak: "break-all" }}>{value}</span>
            {arrow && (
              <span className="contact-arrow" style={{ fontSize: "16px", color: "var(--fg-muted)", transition: "transform 0.2s, color 0.2s", display: "flex", alignItems: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            )}
          </div>
        );
        return href ? (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>{row}</a>
        ) : (
          <div key={label}>{row}</div>
        );
      })}
    </div>
  );
}

/* ─── Section wrapper ─── */
function Section({ id, children, subtle }: { id: string; children: React.ReactNode; subtle?: boolean }) {
  const ref = useReveal();
  return (
    <section id={id} style={{ padding: "88px 24px", background: subtle ? "var(--bg-subtle)" : "var(--bg)" }}>
      <div ref={ref} className="reveal" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
}

/* ─── Section heading ─── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "var(--fg)", margin: "0 0 10px", letterSpacing: "-0.5px" }}>{children}</h2>
      <div style={{ width: "48px", height: "4px", borderRadius: "2px", background: "var(--accent)" }} />
    </div>
  );
}

/* ─── Skill card ─── */
function SkillCard({ group }: { group: { category: string; items: string[] } }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "24px" }}>
      <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--accent)", marginBottom: "14px" }}>{group.category}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
        {group.items.map((item) => (
          <span key={item} style={{ padding: "4px 10px", borderRadius: "5px", fontSize: "12px", fontWeight: 700, border: "1px solid var(--card-border)", color: "var(--fg-muted)", background: "var(--bg-subtle)", whiteSpace: "nowrap" }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Experience item ─── */
function ExperienceItem({ job, last }: { job: typeof experience[0]; last: boolean }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ marginBottom: last ? 0 : "36px", position: "relative" }}>
      <div style={{ position: "absolute", left: "-36px", top: "4px", width: "16px", height: "16px", borderRadius: "50%", background: "var(--accent)", border: "3px solid var(--bg)" }} />
      <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "22px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "6px", marginBottom: "4px" }}>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 900, color: "var(--fg)" }}>{job.title}</h3>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)", whiteSpace: "nowrap" }}>{job.period}</span>
        </div>
        <div style={{ fontSize: "13px", color: "var(--fg-muted)", fontWeight: 700, marginBottom: job.bullets.length ? "12px" : 0 }}>
          {job.company} · {job.location}
        </div>
        {job.bullets.length > 0 && (
          <ul style={{ margin: 0, paddingLeft: "18px", listStyleType: "disc" }}>
            {job.bullets.map((b, i) => (
              <li key={i} style={{ fontSize: "14px", color: "var(--fg-muted)", marginBottom: "4px", lineHeight: 1.6, fontWeight: 300 }}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ─── Education card ─── */
function EduCard({ degree, school, year, location }: { degree: string; school: string; year: string; location: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "28px 24px" }}>
      <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--accent)", marginBottom: "10px" }}>Bachelor's Degree</div>
      <h3 style={{ margin: "0 0 6px", fontSize: "17px", fontWeight: 900, color: "var(--fg)", lineHeight: 1.3 }}>{degree.split("—")[1]?.trim()}</h3>
      <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--fg-muted)", marginBottom: "12px" }}>{school}</div>
      <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "var(--fg-muted)" }}>
        <span>📅 {year}</span>
        <span>📍 {location}</span>
      </div>
    </div>
  );
}
