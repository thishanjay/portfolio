"use client";
import { Typewriter } from "react-simple-typewriter";

export default function RoleCarousel() {
  return (
    <p className="text-gray-300 text-xl font-bold">
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
