"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import RoleCarousel from "./RoleCarousel";
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone } from "react-icons/pi";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { ImFacebook } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { SlCallEnd } from "react-icons/sl";

const Hero = () => {
  return (
    <section className="flex h-full items-center justify-center px-6 pb-20 pt-10">
      <div className="mt-20 mb-10 flex max-w-5xl flex-col items-center gap-12 md:flex-row">
        <Image
          src="/portfolio.png"
          width={300}
          height={300}
          alt="My photo"
          className="rounded-full object-cover shadow-lg"
          priority
        />

        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Hi, I’m Thishan Jay
          </h1>

          <RoleCarousel />

          <p className="max-w-xl leading-relaxed text-gray-700 dark:text-gray-300">
            A passionate developer with expertise in Next.js, React, Tailwind
            CSS, and backend technologies. Currently pursuing an Honours degree
            in Computer Science at the University of Peradeniya.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group flex w-44 items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-gray-900 px-4 py-3 text-white transition hover:bg-gray-700 dark:border-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <span>View My Work</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110">
                <MdKeyboardDoubleArrowRight />
              </span>
            </Link>

            <a
              href="/resume.pdf"
              download="ThishanJay_Resume.pdf"
              className="flex w-32 items-center justify-center gap-2 rounded-2xl border border-gray-300 p-2 text-gray-700 transition hover:cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <IoMdDownload />
              Resume
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/thishanjay"
              target="_blank"
              className="icon-btn"
            >
              <PiGithubLogoDuotone />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings"
              target="_blank"
              className="icon-btn"
            >
              <PiLinkedinLogoDuotone />
            </a>
            <a
              href="https://instagram.com/thishan_jay"
              target="_blank"
              className="icon-btn"
            >
              <PiInstagramLogoDuotone />
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              className="icon-btn"
            >
              <ImFacebook />
            </a>
            <a href="mailto:thishanishere@gmail.com" className="icon-btn">
              <MdEmail />
            </a>
            <a href="tel:+949228625" className="icon-btn">
              <SlCallEnd />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
