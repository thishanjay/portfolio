"use client";
import { useState } from "react";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const TechinalSkills = () => {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold text-center">Technical Skills</h1>
      <p className="text-center">
        My expertise across various technologies and tools
      </p>

      {/* Tabs */}
      <div className="flex">
        <div className="inline-flex gap-4 mx-auto bg-gray-800 m-4 p-2 rounded-2xl text-gray-400">
          <button
            onClick={() => setActiveTab("languages")}
            className={`tech-skills ${activeTab === "languages" && "text-white"}`}
          >
            Languages
          </button>
          <button
            onClick={() => setActiveTab("frameworks")}
            className={`tech-skills ${
              activeTab === "frameworks" && "text-white"
            }`}
          >
            Frameworks / Libraries
          </button>
          <button
            onClick={() => setActiveTab("concepts")}
            className={`tech-skills ${
              activeTab === "concepts" && "text-white"
            }`}
          >
            Concepts
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-gray-800 m-5 rounded-xl flex justify-center gap-8 text-4xl text-gray-300">
        {activeTab === "languages" && (
          <>
            <SiC />
            <SiCplusplus />
            <FaJava />
            <SiPython />
            <SiJavascript />
          </>
        )}

        {activeTab === "frameworks" && (
          <>
            <SiReact />
            <SiNextdotjs />
            <SiTailwindcss />
            <SiNodedotjs />
          </>
        )}

        {activeTab === "concepts" && (
          <div className="text-lg text-center">
            <p>OOP</p>
            <p>Data Structures & Algorithms</p>
            <p>REST APIs</p>
            <p>Concurrency</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechinalSkills;
