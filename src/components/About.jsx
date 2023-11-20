import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { me } from "../assets/index";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Certainly! Based on your studies in C++, cloud security research, and
          React, you have acquired a well-rounded skill set that spans both
          programming and security domains. In C++, you've delved into the
          intricacies of a powerful and versatile programming language,
          mastering its syntax and principles. Your exploration into cloud
          security research reflects a commitment to understanding and
          addressing the evolving challenges in securing cloud-based systems,
          showcasing your dedication to staying abreast of cutting-edge
          technologies and cybersecurity concerns. Additionally, your
          proficiency in React signifies your ability to develop dynamic and
          responsive user interfaces, highlighting your expertise in front-end
          web development. Altogether, your knowledge in C++, cloud security
          research, and React positions you at the intersection of software
          development and cybersecurity, making you well-equipped to tackle
          complex challenges in today's technology landscape.
        </motion.p>
        {/* <img
          src={me}
          alt="my image"
          className="w-[200px] h-auto ml-10 mt-8 rounded-full"
        /> */}
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
