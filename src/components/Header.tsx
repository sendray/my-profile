import useTheme from "@/hooks/useTheme";

import { NAV_LINKS } from "@/utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
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
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 },
    );
    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "background 0.3s, border 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("Home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontWeight: 900,
                fontSize: "16px",
                // letterSpacing: "-1px",
              }}
            >
              SB
            </span>
          </div>
          {/* <span
            style={{
              fontWeight: 700,
              fontSize: "15px",
              color: "var(--fg)",
              letterSpacing: "0.2px",
            }}
          >
            Sendrayaperumal
          </span> */}
        </button>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "6px" }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 700,
                color:
                  activeSection === link ? "var(--accent)" : "var(--fg-muted)",
                transition: "color 0.2s",
                fontFamily: "'Lato', sans-serif",
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = activeSection === link ? "var(--accent)" : "var(--fg-muted)";
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={toggle}
            style={{
              marginLeft: "8px",
              background: "var(--bg-subtle)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              cursor: "pointer",
              padding: "6px 10px",
              fontSize: "16px",
              color: "var(--fg)",
              transition: "background 0.2s",
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </nav>

        {/* Mobile controls */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          className="mobile-only"
        >
          <button
            onClick={toggle}
            style={{
              background: "var(--bg-subtle)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              cursor: "pointer",
              padding: "6px 10px",
              fontSize: "16px",
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              cursor: "pointer",
              padding: "6px 10px",
              color: "var(--fg)",
              fontSize: "18px",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--nav-bg)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid var(--border)",
            padding: "12px 24px 16px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px 0",
                fontSize: "15px",
                fontWeight: 700,
                color: activeSection === link ? "var(--accent)" : "var(--fg)",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
