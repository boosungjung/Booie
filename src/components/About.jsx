import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[0px] shadow-card"
      >
        <img src={icon} alt={title} className="w-45 h-45 object-contain" />
 
          
          <h3>{title}</h3>
      
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The most impressive websites in the world use 3D graphics and animations
        to bring their content to life. Learn how to build your own ThreeJS 3D
        Developer Portfolio today!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index, ) => (
          <ServiceCard title={service.title} icon={service.icon} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default About;
