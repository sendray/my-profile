import { useState, useEffect } from "react";
import { NAV } from "../constants";

const useActiveSection = () => {
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const update = () => {
      const mid = window.scrollY + window.innerHeight * 0.35;
      let nearest = NAV[0],
        minD = Infinity;
      NAV.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const d = Math.abs(el.offsetTop - mid);
        if (d < minD) {
          minD = d;
          nearest = id;
        }
      });
      setActive(nearest);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return active;
}

export default useActiveSection;
