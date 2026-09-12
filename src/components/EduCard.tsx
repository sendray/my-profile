import useReveal from "@/hooks/useReveal";

const EduCard = ({
  degree,
  school,
  year,
  location,
}: {
  degree: string;
  school: string;
  year: string;
  location: string;
}) => {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        borderRadius: "12px",
        padding: "28px 24px",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "10px",
        }}
      >
        Bachelor's Degree
      </div>
      <h3
        style={{
          margin: "0 0 6px",
          fontSize: "17px",
          fontWeight: 900,
          color: "var(--fg)",
          lineHeight: 1.3,
        }}
      >
        {degree.split("—")[1]?.trim()}
      </h3>
      <div
        style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "var(--fg-muted)",
          marginBottom: "12px",
        }}
      >
        {school}
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
          fontSize: "13px",
          color: "var(--fg-muted)",
        }}
      >
        <span>📅 {year}</span>
        <span>📍 {location}</span>
      </div>
    </div>
  );
};

export default EduCard;