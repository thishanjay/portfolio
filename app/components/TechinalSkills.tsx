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
      <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
        Technical Skills
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400">
        My expertise across various technologies and tools
      </p>

      <div className="flex">
        <div className="mx-auto m-4 inline-flex gap-4 rounded-2xl bg-gray-100 p-2 text-gray-600 shadow-sm dark:bg-gray-800 dark:text-gray-400">
          <button
            onClick={() => setActiveTab("languages")}
            className={`tech-skills ${
              activeTab === "languages"
                ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Languages
          </button>
          <button
            onClick={() => setActiveTab("frameworks")}
            className={`tech-skills ${
              activeTab === "frameworks"
                ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Frameworks / Libraries
          </button>
          <button
            onClick={() => setActiveTab("concepts")}
            className={`tech-skills ${
              activeTab === "concepts"
                ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Concepts
          </button>
        </div>
      </div>

      <div className="m-5 flex justify-center gap-8 rounded-xl bg-gray-100 p-6 text-4xl text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-300">
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
          <div className="text-center text-lg">
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
