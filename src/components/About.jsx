import React, { useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect/dist/core';

import { styles } from "../styles";
import { services } from "../constants";
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

const About = ({}) => {
  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
      loop: false,
      delay: 50,
      cursor: '_',
    });

    typewriter
    .typeString( `<strong>Sudhakar Jha</strong> and I'm a skilled software developer
    with expertise in <strong>Python</strong>, <strong>JavaScript</strong>, and
    <strong>C++</strong>. I specialize in using popular frameworks like
    <strong>Django</strong>, <strong>React</strong>, <strong>Node.js</strong>, and
    <strong>Three.js</strong> to create efficient, scalable, and user-friendly
    solutions that solve real-world problems. With a passion for learning and
    collaborating closely with clients, I am confident in my ability to turn
    your ideas into reality. Whether you need a website, web application, or
    a complex software system, I have the skills and expertise to make it
    happen. So, if you're looking for a reliable, experienced, and creative
    software developer, look no further. Let's work together to bring your
    ideas to life!`)
    .pauseFor(1000)
    .start();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to my portfolio website! My name is{' '}
        <span id="typewriter"></span>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");
