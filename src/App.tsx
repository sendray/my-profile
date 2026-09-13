import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ResumeDownload from "./components/ResumeDownload";


/* ─── App ─── */
export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Lato', 'Helvetica Neue', Arial, sans-serif",
        background: "var(--bg)",
        color: "var(--fg)",
        minHeight: "100vh",
      }}
    >
      {/* ── NAV ── */}
      <Header />

      {/* ── HERO ── */}
      <HeroBanner />

      {/* ── ABOUT ── */}
      <About />

      {/* ── SKILLS ── */}
      <Skills />

      {/* ── EXPERIENCE ── */}
      <Experience />

      {/* ── EDUCATION ── */}
      <Education />

      {/* ── RESUME DOWNLOAD ── */}
      {/* <ResumeDownload /> */}

      {/* ── CONTACT ── */}
      <Contact />

      {/* ── FOOTER ── */}
      <Footer />

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

