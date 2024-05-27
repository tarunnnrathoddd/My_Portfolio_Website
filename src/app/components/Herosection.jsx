/* eslint-disable react/no-unescaped-entities */

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <section id="home" className="py-16 sm:py-20 lg:py-32">
      <div className="md:flex justify-between sm:grid-cols-12">
        <motion.div
          className="flex flex-col sm:w-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Tarun",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am Tarun Rathod, an attentive, enterprising, versatile, and
            soft-hearted person. I am an engineering student at Pimpri Chinchwad
            College of Engineering, Pune, Maharashtra, with a passion for
            user-centric design solutions and web development. With a learning
            attitude, I have come to value the importance of user experience and
            user interface. I am a fun and empathetic person with strong
            leadership and management skills, including knowledge of agile
            methodology. Aside from my design work, I enjoy playing football,
            sketching, reading, photo editing, photography, and mythology. I am
            always open to new connections and building relationships that we
            can rely on. Let's connect and see where our shared passions and
            interests take us!
          </p>
          <div className="buttons flex flex-col sm:flex-row">
            <Link
              href="/contact"
              className="px-6 inline-block py-3 sm:w-fit rounded-full mb-4 sm:mb-0 bg-gradient-to-br from-red-600 to-blue-800 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1TBVsNkjodwLwGQLX5kv5WCLdRpLDGEtR/view?usp=sharing"
              className="px-1 inline-block py-1 sm:w-fit rounded-full bg-gradient-to-br from-red-600 to-blue-800 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] sm:w-[180px] sm:h-[180px] relative mt-8 sm:mt-0"
        >
          <Image
            src="/images/hero-image.jpg"
            alt="Tarun's portrait"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={260}
            height={260}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
