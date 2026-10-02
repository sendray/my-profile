import { useEffect, useState } from "react";

const useTheme = () => {
  const [dark, setDark] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "light" : "dark",
    );
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
}

export default useTheme;
