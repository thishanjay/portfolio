"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-30 rounded-3xl border border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-10 flex items-center justify-between p-4">
        <a
          href="/"
          className="text-xl font-semibold text-gray-900 dark:text-white"
        >
          ThishanJay
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-700 focus:outline-none dark:text-gray-200"
          >
            ☰
          </button>
        </div>

        <div
          className={`absolute right-4 top-16 flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 md:static md:flex md:flex-row md:gap-4 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <a
            href="about"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            [About]
          </a>
          <a
            href="skills"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            [Skills]
          </a>
          <a
            href="projects"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            [Projects]
          </a>
          <a
            href="contact"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            [Contact Me]
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
