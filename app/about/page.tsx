import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-full flex items-center justify-center">
        <Image
          src="/portfolio.jpeg"
          width={300}
          height={300}
          alt="My photo"
          className="rounded-full object-cover mx-auto"
        />
      </div>
    </div>
  );
};

export default page;
