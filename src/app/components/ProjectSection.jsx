"use client";
import React from "react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import ProjectCard from "./ProjectCard";

const Projects = [
  {
    id: 1,
    title: "My PortFolio",
    description: "My Portfolio made using Next.js and Tailwind CSS",
    giturl: "https://github.com/tarunnnrathoddd/My_Portfolio_Website",
  },
  {
    id: 2,
    title: "Plantify Ecommerce",
    description: "An Ecommerce website made using HTML, CSS, Js",
    giturl: "https://tarunnnrathoddd.github.io/plantifyyy",
  },
  {
    id: 3,
    title: "Anantya - 20224",
    description: "A College Event website made using Nestjs and Tailwind CSS",
    giturl: "https://anantya24.vercel.app/",
  },
  
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h1 className="text-center m-8 lg:text-7xl md:text-5xl sm:text-3xl ">
        My Projects
      </h1>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {Projects.map((item, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={index} // Don't forget to add a unique key for each item in the array
              title={item.title}
              description={item.description}
              gitUrl={item.giturl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
