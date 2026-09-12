import ContactList from "./ContactList";
import Section from "./core/Section";
import SectionHeading from "./core/SectionHeading";

const Contact = () => {
  return (
    <Section id="Contact" subtle>
      <div className="lg: grid, md: block"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }}
      >
        <div>
          <SectionHeading>Get In Touch</SectionHeading>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.9,
              color: "var(--fg-muted)",
              fontWeight: 300,
              margin: 0,
            }}
          >
            I'm always open to discussing new opportunities, design system
            challenges, or frontend architecture questions. Feel free to reach
            out.
          </p>
        </div>

        {/* ─── Contact list ─── */}
        {/* <ContactList /> */}
      </div>
    </Section>
  );
};

export default Contact;
