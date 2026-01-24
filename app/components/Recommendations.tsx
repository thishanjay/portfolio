import React from "react";

const Recommendations = () => {
  return (
    <section className="bg-gray-900 p-10">
      <h1 className="text-4xl font-bold text-center">Recommendations</h1>
      <p className="text-lg text-gray-400 text-center">
        What mentors and colleagues say about my work
      </p>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mt-8">
        {/* Card 1 */}
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full">
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
                className="h-10 w-10 text-primary/20 mb-4"
                aria-hidden="true"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>

              <p className="italic text-muted-foreground mb-6">
                "Thishan has consistently demonstrated a strong work ethic,
                technical proficiency, and exceptional leadership skills
                throughout his tenure."
              </p>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10 text-primary">
                  A
                </span>
                <div>
                  <p className="font-medium">Anil Nigam</p>
                  <p className="text-sm text-muted-foreground">
                    Strategic professional with strong business acumen
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Mentor • July 1, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full">
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
                className="h-10 w-10 text-primary/20 mb-4"
                aria-hidden="true"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>

              <p className="italic text-muted-foreground mb-6">
                "I am pleased to recommend Thishan for his exceptional technical
                and leadership skills."
              </p>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10 text-primary">
                  R
                </span>
                <div>
                  <p className="font-medium">Revathi B</p>
                  <p className="text-sm text-muted-foreground">
                    Associate Director Student Affairs SRM AP
                  </p>
                  <p className="text-xs text-muted-foreground">
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
