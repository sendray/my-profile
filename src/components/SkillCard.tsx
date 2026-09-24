import useReveal from "@/hooks/useReveal";

const SkillCard = ({
  group,
}: {
  group: { skill: string, logoUrl: string };
}) => {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal">
      {/* <div
        style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "14px",
        }}
      >
        {group.category}
      </div> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "7px",
          justifyContent: "center",
        }}
      >
        <span
          key={group.skill}
          style={{
            // padding: "4px 10px",
            // borderRadius: "5px",
            fontSize: "12px",
            // fontWeight: 700,
            // border: "1px solid var(--card-border)",
            color: "var(--fg-muted)",
            // background: "var(--bg)",
            whiteSpace: "nowrap",
            // width: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="object-cover w-12"
            alt="skills-logo"
            src={group.logoUrl}
            // style={{
            //   padding: "6px",
            //   border: "1px solid var(--card-border)",
            //   borderRadius: "4px",
            //   background: "var(--card)"
            // }}
          />
          <div
            style={{
              fontSize: "12px",
              color: "var(--fg-muted)",
              margin: "6px 0",
              fontWeight: 700,
            }}
          >
            {group.skill}
          </div>
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
