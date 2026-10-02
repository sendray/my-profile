import { useEffect, useState } from "react";

import { NAV } from "./utils/constants";
import ThemeToggle from "./core/ThemeToggle";
import useActiveSection from "./utils/hooks/useActiveSection";
import useTheme from "./utils/hooks/useTheme";

const Header = () => {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 200,
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("Home")}
          aria-label="Back to top"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 0 4px var(--accent-dim)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                color: "#fff",
                fontSize: 15,
                // fontStyle: "italic",
              }}
            >
              SB
            </span>
          </div>
          {/* <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 15,
              color: "var(--fg)",
              letterSpacing: -0.3,
            }}
          >
            Sendrayaperumal
          </span> */}
        </button>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hide-mobile"
          style={{ alignItems: "center", gap: 2 }}
        >
          {NAV.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-current={active === id ? "page" : undefined}
              style={{
                background: active === id ? "var(--accent-dim)" : "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 14px",
                borderRadius: 7,
                fontSize: 13.5,
                fontWeight: active === id ? 700 : 500,
                color: active === id ? "var(--accent)" : "var(--fg-muted)",
                fontFamily: "var(--font-body)",
                transition: "all 0.2s",
                letterSpacing: 0.1,
              }}
            >
              {id}
            </button>
          ))}
          <ThemeToggle dark={dark} toggle={toggle} />
        </nav>

        {/* Mobile */}
        <div className="show-mobile" style={{ gap: 8, display: "none" }}>
          <ThemeToggle dark={dark} toggle={toggle} />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              background: "var(--bg-subtle)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              cursor: "pointer",
              padding: "6px 12px",
              color: "var(--fg)",
              fontSize: 18,
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          style={{
            background: "var(--nav-bg)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid var(--border-subtle)",
            padding: "8px 24px 16px",
          }}
        >
          {NAV.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-current={active === id ? "page" : undefined}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "11px 0",
                fontSize: 15,
                fontWeight: active === id ? 700 : 500,
                color: active === id ? "var(--accent)" : "var(--fg)",
                fontFamily: "var(--font-body)",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              {id}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
