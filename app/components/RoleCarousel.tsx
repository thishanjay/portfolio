"use client";
import { Typewriter } from "react-simple-typewriter";

export default function RoleCarousel() {
  return (
    <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
      <Typewriter
        words={[
          "Full-Stack Developer",
          "Web3 Enthusiast",
          "Machine Learning Practitioner",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </p>
  );
}
