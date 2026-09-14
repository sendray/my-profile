import { EXPERIENCE } from "@/utils/constants";

import Section from "./core/Section";
import SectionHeading from "./core/SectionHeading";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    // <Section id="Experience" subtle>
    //   <SectionHeading>Experience</SectionHeading>
    //   <div
    //     style={{
    //       position: "relative",
    //       paddingLeft: "28px",
    //       borderLeft: "2px solid var(--border)",
    //     }}
    //   >
    //     {EXPERIENCE.map((job, i) => (
    //       /* ─── Experience item ─── */
    //       <ExperienceItem
    //         key={i}
    //         job={job}
    //         last={i === EXPERIENCE.length - 1}
    //       />
    //     ))}
    //   </div>
    // </Section>
    <Section id="Experience" subtle>
        <SectionHeading>Experience</SectionHeading>
        <div
          style={{
            position: "relative",
            paddingLeft: "28px",
            borderLeft: "2px solid var(--border)",
          }}
        >
          {EXPERIENCE.map((job, i) => (
            /* ─── Experience item ─── */
            <ExperienceItem
              key={i}
              job={job}
              last={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </Section>
  );
};

export default Experience;
