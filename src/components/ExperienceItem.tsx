import useReveal from "@/hooks/useReveal";
import { EXPERIENCE } from "@/utils/constants";

const ExperienceItem = ({
  job,
  last,
}: {
  job: (typeof EXPERIENCE)[0];
  last: boolean;
}) => {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{ marginBottom: last ? 0 : "36px", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          left: "-36px",
          top: "4px",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: "var(--accent)",
          border: "3px solid var(--bg)",
        }}
      />
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--card-border)",
          borderRadius: "12px",
          padding: "22px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "4px",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "16px",
              fontWeight: 900,
              color: "var(--fg)",
            }}
          >
            {job.title}
          </h3>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "var(--accent)",
              whiteSpace: "nowrap",
            }}
          >
            {job.period}
          </span>
        </div>
        <div
          style={{
            fontSize: "13px",
            color: "var(--fg-muted)",
            fontWeight: 700,
            marginBottom: job.bullets.length ? "12px" : 0,
          }}
        >
          {job.company} · {job.location}
        </div>
        {job.bullets.length > 0 && (
          <ul style={{ margin: 0, paddingLeft: "18px", listStyleType: "disc" }}>
            {job.bullets.map((b, i) => (
              <li
                key={i}
                style={{
                  fontSize: "14px",
                  color: "var(--fg-muted)",
                  marginBottom: "4px",
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;