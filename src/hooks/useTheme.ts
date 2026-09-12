import { useState, useEffect } from "react";

/* ─── Theme hook ─── */
const useTheme = () => {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
};

export default useTheme;