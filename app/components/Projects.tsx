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
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-gray-900">
      <h1 className="text-4xl font-bold text-center">Featured Projects</h1>
      <p className="text-lg text-gray-400 text-center">
        Checkout some of my recent work
      </p>
      {/* Grid of projects */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="group rounded-2xl border border-white/10 bg-white/3 p-5 hover:bg-white/10 transition"
          >
            {/* Image */}
            <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>
            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-350 text-sm mt-2">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/projects">
          <button className="group flex items-center gap-2 border border-white/20 px-5 py-2 rounded-2xl transition hover:bg-white/10">
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
