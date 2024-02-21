import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[0px] shadow-card"
      >
        <img src={icon} alt={title} className="w-45 h-45 object-contain" />

        <h3 className="text-center">{title}</h3>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  const [paddingTop, setPaddingTop] = useState(
    window.innerWidth > 768 ? "200px" : "50px"
  );

  useEffect(() => {
    const handleResize = () => {
      setPaddingTop(window.innerWidth > 768 ? "200px" : "50px");
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div style={{ paddingTop: paddingTop }} id="about">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I do</p>
          <h2 className={styles.sectionHeadText}>
            <TypeAnimation
              sequence={["Services.", 100]}
              wrapper="span"
              speed={20}
              repeat={false}
            />
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
        <div className="mt-20 flex flex-wrap gap-10 flex-wrap justify-center sm:flex-row">
          {services.map((service, index) => (
            <ServiceCard
              title={service.title}
              icon={service.icon}
              index={index}
              {...services}
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default SectionWrapper(About, "about");
