"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-3xl mx-30">
      <div className="flex justify-between items-center p-4 mx-10">
        <a href="/" className="text-xl">
          ThishanJay
        </a>

        {/* Hamburger for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        <div
          className={`flex flex-col md:flex-row md:gap-4 absolute md:static top-16 right-4 md:bg-transparent p-4 md:p-0 shadow md:shadow-none transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <a href="about">[About]</a>
          <a href="skills">[Skills]</a>
          <a href="projects">[Projects]</a>
          <a href="contact">[Contact Me]</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
