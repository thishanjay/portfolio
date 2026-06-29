import React from "react";

const Recommendations = () => {
  return (
    <section className="bg-gray-50 p-10 dark:bg-gray-900">
      <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
        Recommendations
      </h1>
      <p className="mt-2 text-center text-lg text-gray-600 dark:text-gray-400">
        What mentors and colleagues say about my work
      </p>

      <div className="mx-auto mt-8 grid max-w-5xl gap-8 md:grid-cols-2">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="flex h-full flex-col gap-6 rounded-xl border border-gray-200 bg-white py-6 shadow-sm dark:border-white/10 dark:bg-gray-900">
            <div className="p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4 h-10 w-10 text-gray-400"
                aria-hidden="true"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>

              <p className="mb-6 italic text-gray-700 dark:text-gray-300">
                "Thishan has consistently demonstrated a strong work ethic,
                technical proficiency, and exceptional leadership skills
                throughout his tenure."
              </p>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  A
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Anil Nigam
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Strategic professional with strong business acumen
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Mentor • July 1, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ opacity: 1, transform: "none" }}>
          <div className="flex h-full flex-col gap-6 rounded-xl border border-gray-200 bg-white py-6 shadow-sm dark:border-white/10 dark:bg-gray-900">
            <div className="p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4 h-10 w-10 text-gray-400"
                aria-hidden="true"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>

              <p className="mb-6 italic text-gray-700 dark:text-gray-300">
                "I am pleased to recommend Thishan for his exceptional technical
                and leadership skills."
              </p>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  R
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Revathi B
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Associate Director Student Affairs SRM AP
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Manager • May 23, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
