import React from "react";

const page = () => {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-6 py-16 text-gray-700 dark:text-gray-300">
      <div className="max-w-xl rounded-3xl border border-gray-200 bg-white/80 p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Contact me
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          I’m open to freelance work, internships, and collaboration ideas.
        </p>
      </div>
    </div>
  );
};

export default page;
