import useReveal from "@/hooks/useReveal";

/* ─── Section wrapper ─── */
const Section = ({
  id,
  children,
  subtle,
}: {
  id: string;
  children: React.ReactNode;
  subtle?: boolean;
}) => {
  const ref = useReveal();

  return (
    <section
      id={id}
      style={{
        padding: "88px 24px",
        background: subtle ? "var(--bg-subtle)" : "var(--bg)",
      }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
