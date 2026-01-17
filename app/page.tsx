import Image from "next/image";
import { IoMdDownload } from "react-icons/io";

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

          <p className="text-gray-400 text-lg">Full-Stack Developer</p>

          <p className="text-gray-300 leading-relaxed max-w-xl">
            A passionate developer with expertise in Next.js, React, Tailwind
            CSS, and backend technologies. Currently pursuing an Honours degree
            in Computer Science at the University of Peradeniya.
          </p>
          <button className="border rounded-2xl flex justify-center items-center gap-2 hover:cursor-pointer w-32 p-2"><IoMdDownload />Resume</button>
        </div>
      </div>
    </section>
  );
}
