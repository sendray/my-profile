import useReveal from "@/hooks/useReveal";

const ContactList = ({
  group,
}: {
  group: { label: string; logoUrl: string, href: string };
}) => {
  const ref = useReveal();
  return (
    <a href={group.href} target="_blank">
      <div
        ref={ref}
        className="reveal"
        style={{
          padding: "8px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
          <span
            style={{
              padding: "4px 10px",
              fontSize: "12px",
              color: "var(--fg-muted)",
              whiteSpace: "nowrap",
              width: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="w-full object-cover"
              alt="skills-logo"
              src={group.logoUrl}
            />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ContactList;
