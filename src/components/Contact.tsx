import Eyebrow from "./core/Eyebrow";
import ContactList from "./ContactRow";
import { CONTACT_ITEMS } from "./utils/constants";
import RevealBlock from "./core/RevealBlock";

const Contact = () => {
  return (
    <section
      id="Contact"
      aria-label="Contact"
      style={{ padding: "96px 24px", background: "var(--bg-subtle)" }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div className="md:w-1/2">
          <RevealBlock cls="reveal-left">
            <Eyebrow>Contact</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px,4vw,44px)",
                fontWeight: 700,
                letterSpacing: -1,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              Let's build something{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                remarkable
              </span>
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--fg-muted)",
                fontWeight: 300,
                marginBottom: 0,
              }}
            >
              I'm open to discussing new opportunities, design system
              challenges, and frontend architecture. Reach out through any of
              the channels below.
            </p>
          </RevealBlock>

          <RevealBlock>
            <div
              style={{
                display: "flex",
                marginTop: "24px",
              }}
            >
              {CONTACT_ITEMS.map((group) => (
                /* ─── Skill card ─── */
                <ContactList key={group.label} group={group} />
              ))}
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
    // <section
    //   id="Contact"
    //   aria-label="Contact"
    //   className="bg-(--bg-subtle) px-24 py-6"
    // >
    //   {/* <div className="max-w-1140"> */}
    //   <div className="max-w-1140 md:w-1/2">
    //     <RevealBlock cls="reveal-left">
    //       <Eyebrow>Contact</Eyebrow>
    //       <h2 className="mb-4 text-[clamp(28px,4vw,44px)] leading-[1.15] font-bold tracking-[-1px] text-(--fg) [font-family:var(--font-display)]">
    //         Let's build something{" "}
    //         <span className="text-(--accent) italic">remarkable</span>
    //       </h2>
    //       <p className="text-base leading-[1.8] font-light text-(--fg-muted) [&_strong]:font-normal [&_strong]:text-(--accent)">
    //         I'm open to discussing new opportunities, design system challenges,
    //         and frontend architecture. Reach out through any of the channels
    //         below.
    //       </p>
    //     </RevealBlock>
    //     <RevealBlock>
    //       <div className="mt-6 flex">
    //         {CONTACT_ITEMS.map((group) => (
    //           <ContactList key={group.label} group={group} />
    //         ))}
    //       </div>
    //     </RevealBlock>
    //   </div>
    //   {/* </div> */}
    // </section>
  );
};

export default Contact;
