import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js & Tailwind",
    image: "/projects/portfolio 11.01.03 AM.png",
    link: "#",
  },
  {
    title: "ML Disease Predictor",
    description: "Machine learning model for medical prediction",
    image: "/projects/ml.png",
    link: "#",
  },
  {
    title: "Random country picker",
    description: "Randomly picks country and it's capital",
    image: "/projects/rcncp.png",
    link: "https://random-country-and-capital-picker.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-50/80 px-10 pt-20 pb-10 dark:bg-gray-900/80"
    >
      <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
        Featured Projects
      </h1>
      <p className="mt-2 text-center text-lg text-gray-600 dark:text-gray-400">
        Checkout some of my recent work
      </p>
      <div className="mt-6 grid gap-8 px-5 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="group rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-gray-900/70 dark:hover:bg-gray-800/70"
          >
            <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/projects">
          <button className="group flex items-center gap-2 rounded-2xl border border-gray-300 px-5 py-2 text-gray-700 transition hover:bg-gray-100 dark:border-white/20 dark:text-gray-300 dark:hover:bg-white/10">
            View all projects
            <span className="transition-transform group-hover:translate-x-1">
              <MdKeyboardDoubleArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
