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
          I've delved into the intricacies of Python, SQL, and data analysis,
          forming a robust foundation for navigating the world of data. This
          skill set enables me to proficiently manage, clean, and analyze large
          datasets, extracting valuable insights that support informed decision-making.
          The integration of Power BI into my toolkit enhances my ability to build
          interactive dashboards and visualizations, translating raw data into
          clear, impactful narratives.

          Beyond the realm of data and technology, I find joy and creativity in
          playing the guitar, a personal outlet that brings balance and emotional depth
          to my routine. This musical pursuit fuels my imagination and helps me approach
          problems with a fresh perspective. At the same time, my passion for basketball
          keeps me physically active and sharp, instilling values of teamwork, focus, and
          resilience — all of which carry over into my professional growth.

          As I move forward, I aim to deepen my journey into data science, exploring
          machine learning and AI applications while continuing to seek projects that
          combine logic, storytelling, and personal expression. I believe this fusion
          of technical expertise and personal interest defines my unique identity and
          opens the door to diverse, meaningful opportunities in both work and life.
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
