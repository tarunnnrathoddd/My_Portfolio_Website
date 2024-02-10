"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>CPP</li>
        <li>MySQL</li>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>Reactjs</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Pimpri Chinchwad College of Engineering Pune</li>
        {/* <li>Kendriya Vidyala Army Area Pune</li> */}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certificate1</li>
        <li>Certificate2</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="mx-4 md:mx-10 lg:mx-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 mb-5">
        <div className="rounded-full">
          <Image
            src="/images/about-image.jpg"
            alt="menu-image"
            width={350}
            height={350}
          />
        </div>

        <div>
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl">About Me</h1>
          <p className="p-5">
            {/* Your Lorem Ipsum text */}
          </p>
          <div className="flex flex-col md:flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
