const ThemeToggle = ({ dark, toggle }: { dark: boolean, toggle: () => void }) => {
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "var(--bg-subtle)",
        border: "1px solid var(--border)",
        borderRadius: 9,
        cursor: "pointer",
        padding: "7px 11px",
        fontSize: 15,
        color: "var(--fg)",
        display: "flex",
        alignItems: "center",
        transition: "background 0.2s",
      }}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  )
}

export default ThemeToggle;