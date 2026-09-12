import Section from "./core/Section";
import SectionHeading from "./core/SectionHeading";
import EduCard from "./EduCard";

const Education = () => {
  return (
    <Section id="Education">
      <SectionHeading>Education</SectionHeading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {/* ─── Education card ─── */}
        <EduCard
          degree="Bachelor's Degree — Information Technology"
          school="Hindusthan Institute of Technology"
          year="2012"
          location="Coimbatore, India"
        />
      </div>
    </Section>
  );
};

export default Education;
