import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex items-center gap-12 mt-20">
        <Image
          src="/portfolio.PNG"
          width={300}
          height={300}
          alt="My photo"
          className="rounded-full object-cover"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">Hi I'm Thishan Jay</h1>
          <div className="text-gray-400 text-lg">Full Stack Developer</div>
          <div>A passionate developer with expertise in Next.js, React,<br/> Tailwind CSS  and backend technologies. Currently pursuing <br />an Honours degree  in Computer Science at the <br /> University of Peradeniya.</div>
        </div>
      </div>
    </div>
  );
};

export default page;
