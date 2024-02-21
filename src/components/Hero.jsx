import { motion } from "framer-motion";
("use client");
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 800);
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 800);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 330);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#7ED9C8]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            <TypeAnimation
              sequence={["Hi, I'm BooSung", 100]}
              wrapper="span"
              speed={20}
              // style={{ display: "inline-block" }}
              repeat={false}
            />
            {/* Hi, I'm <span className="text-[]">BooSung</span> */}
          </h1>
          <p className={`${styles.heroSubText} mt-5 text-white-100 `}>
            I am an aspiring{" "}
            <span className="text-[#7ED9C8]">Software Engineer </span>
            {/* <br className="sm:block hidden" /> */}
            specialising in <span className="text-[#F25EBF]">Web </span>and{" "}
            <span className="text-[#F25EBF]">iOS</span> applications&nbsp;
          </p>
        </div>
      </div>
      {isVisible && isLargeScreen && (
        <div className="absolute z-[-1] top-1/2 md:top-3/4 left-1/2">hi</div>
      )}
      <ComputersCanvas />
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
