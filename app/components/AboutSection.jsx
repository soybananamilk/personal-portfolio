"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-[#262717]">
        <li>HTML/CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Tailwind CSS</li>

        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-[#262717]">
        <li>City College of San Francisco: Associate Degree in Computer Science - Ongoing -  2026</li>
        <li>City College of San Francisco: Associate in Science in Mathematics for Transfer - Ongoing - 2026</li>
        <li>City College of San Francisco: History (Emphasis on American Immigrant History) - 2022</li>
        <li>City College of San Francisco: Emphasis in Science and Mathematics Associate of Science - 2022</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-[#262717]">
        <li>Avocademy: UX/UI Foundations - 2023</li>
        <li>City College of San Francisco: Visual Design Foundation Certificate of Achievement - 2022</li>
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
    <section className="text-white bg-[#655437] bg-opacity-25 " id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#262717] mb-4">Get To Know Me</h2>
          <p className="text-base lg:text-lg text-[#655437]">
            I'm Catherine Montano, a dynamic Graphic Designer and Frontend Developer 
            situated in the vibrant San Francisco Bay Area.  
            I specialize in curating compelling visual narratives and 
            translating them into seamlessly integrated digital landscapes. 
            My passion lies in creating sophisticated, impactful designs that captivate audiences 
            and leave a lasting impression.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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