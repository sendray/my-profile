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
      <ResumeDownload />

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

/* ─── Section wrapper ─── */
// function Section({
//   id,
//   children,
//   subtle,
// }: {
//   id: string;
//   children: React.ReactNode;
//   subtle?: boolean;
// }) {
//   const ref = useReveal();
//   return (
//     <section
//       id={id}
//       style={{
//         padding: "88px 24px",
//         background: subtle ? "var(--bg-subtle)" : "var(--bg)",
//       }}
//     >
//       <div
//         ref={ref}
//         className="reveal"
//         style={{ maxWidth: "1100px", margin: "0 auto" }}
//       >
//         {children}
//       </div>
//     </section>
//   );
// }

/* ─── Section heading ─── */
// function SectionHeading({ children }: { children: React.ReactNode }) {
//   return (
//     <div style={{ marginBottom: "48px" }}>
//       <h2
//         style={{
//           fontSize: "clamp(28px, 4vw, 40px)",
//           fontWeight: 900,
//           color: "var(--fg)",
//           margin: "0 0 10px",
//           letterSpacing: "-0.5px",
//         }}
//       >
//         {children}
//       </h2>
//       <div
//         style={{
//           width: "48px",
//           height: "4px",
//           borderRadius: "2px",
//           background: "var(--accent)",
//         }}
//       />
//     </div>
//   );
// }

/* ─── Skill card ─── */
// function SkillCard({
//   group,
// }: {
//   group: { category: string; items: string[] };
// }) {
//   const ref = useReveal();
//   return (
//     <div
//       ref={ref}
//       className="reveal"
//       style={{
//         background: "var(--card)",
//         border: "1px solid var(--card-border)",
//         borderRadius: "12px",
//         padding: "24px",
//       }}
//     >
//       <div
//         style={{
//           fontSize: "12px",
//           fontWeight: 700,
//           letterSpacing: "1.5px",
//           textTransform: "uppercase",
//           color: "var(--accent)",
//           marginBottom: "14px",
//         }}
//       >
//         {group.category}
//       </div>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
//         {group.items.map((item) => (
//           <span
//             key={item}
//             style={{
//               padding: "4px 10px",
//               borderRadius: "5px",
//               fontSize: "12px",
//               fontWeight: 700,
//               border: "1px solid var(--card-border)",
//               color: "var(--fg-muted)",
//               background: "var(--bg-subtle)",
//               whiteSpace: "nowrap",
//             }}
//           >
//             {item}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }


