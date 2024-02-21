import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#202023", color: "#ffffff" }}
    contentArrowStyle={{ borderRight: "7px solid #202023" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg, borderRadius: 5 }}
    icon={
      <div className="flex justify-center items-center w-full h-[full] ">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] ">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold "
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
const Experience = () => {
  const [paddingTop, setPaddingTop] = useState(
    window.innerWidth > 768 ? "300px" : "200px"
  );

  useEffect(() => {
    const handleResize = () => {
      setPaddingTop(window.innerWidth > 768 ? "300px" : "200px");
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div style={{ paddingTop: paddingTop }} id="work">
      {" "}
      {/* Add this line */}
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>
            <TypeAnimation
              sequence={["Work experience.", 100]}
              wrapper="span"
              speed={50}
              repeat={false}
            />
          </h2>
        </motion.div>
        <div className="mt-20 flex flex-col ">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
