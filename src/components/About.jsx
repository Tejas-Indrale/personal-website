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
          skill set enables me to proficiently manage and analyze large
          datasets, extracting valuable insights. The integration of Power BI
          into my toolkit amplifies my ability to create compelling
          visualizations, transforming raw data into actionable information.
          Beyond the realm of technology, I find joy and expression in playing
          the guitar, exploring the artistic side of my personality. This
          creative outlet not only serves as a source of relaxation but also
          contributes to a well-balanced lifestyle. Meanwhile, my involvement in
          basketball reflects my passion for physical activity and teamwork,
          fostering skills beyond the digital landscape. In my view, the fusion
          of technical expertise and personal interests creates a unique and
          versatile profile. It opens doors to diverse opportunities, from
          contributing to data-driven decision-making in professional spheres to
          finding innovative ways to merge my skills with my hobbies. As I
          continue on this journey, I aim to explore advanced aspects of data
          science and seek avenues where my multifaceted skill set can bring a
          distinctive perspective to both my work and personal endeavors.
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
