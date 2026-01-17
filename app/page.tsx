import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import RoleCarousel from "./components/RoleCarousel";

export default function Home() {
  return (
    <section className="h-full flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mt-20">
        <Image
          src="/portfolio.png"
          width={300}
          height={300}
          alt="My photo"
          className="rounded-full object-cover"
          priority
        />

        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl font-semibold">Hi, I’m Thishan Jay</h1>

          <RoleCarousel />

          <p className="text-gray-300 leading-relaxed max-w-xl">
            A passionate developer with expertise in Next.js, React, Tailwind
            CSS, and backend technologies. Currently pursuing an Honours degree
            in Computer Science at the University of Peradeniya.
          </p>
          <div className="flex gap-4">
            <button className="group border rounded-2xl flex justify-center items-center gap-2 hover:cursor-pointer w-44 bg-white text-black hover:bg-gray-300">
              <span>View My Work</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110">
                <MdKeyboardDoubleArrowRight />
              </span>
            </button>
            <button className="border rounded-2xl flex justify-center items-center gap-2 hover:cursor-pointer w-32 p-2 hover:bg-gray-800">
              <IoMdDownload />
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
