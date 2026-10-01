import Skills from "./components/Skills";
import About from "./components/about";
import Hero from "./components/hero";
import Experience from "./components/experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Learning from "./components/Learning";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SkillTicker from "./components/SkillTicker";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        background: "var(--bg)",
        color: "var(--fg)",
        minHeight: "100vh",
      }}
    >
      {/* Components */}
      <Header />
      <Hero />
      {/* <SkillTicker /> */}
      <About />
      <Skills />
      {/* <SkillTicker /> */}
      <Experience />
      <Learning />
      <Education />
      <Contact />
      <Footer />

      {/* Mobile grid fix */}
      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
