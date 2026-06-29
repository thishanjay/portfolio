export default function Page() {
  return (
    <div className="px-10 py-10">
      <p className="px-20 leading-relaxed text-gray-700 dark:text-gray-400">
        I’m an undergraduate Computer Science (Honours) student at the
        University of Peradeniya and a passionate Full-Stack Developer who
        enjoys turning ideas into meaningful, real-world products.
        <br />
        <br />
        I work comfortably across the full stack — from building clean,
        responsive interfaces with React and Next.js to designing scalable
        backend systems and thinking through system design and problem-solving
        challenges.
        <br />
        <br />
        I’m a fast learner and naturally curious, which drives me to
        continuously improve and build side projects that solve real problems.
        One project I’m particularly proud of is rebuilding the University of
        Peradeniya website with a focus on usability and modern design. I
        believe technology should be used to make the world a better place.
        <br />
        <br />
        Outside of coding, I enjoy playing basketball and drawing, which help
        fuel my creativity and discipline.
        <br />
        <br />
        Currently, I’m seeking internship opportunities and exploring research
        and higher studies.
      </p>

      <h1 className="mb-6 mt-12 text-center text-2xl text-gray-900 dark:text-white">
        Education
      </h1>

      <div className="m-10 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-gray-900">
          <h3 className="text-lg font-bold">Undergraduate</h3>
          <p className="font-bold">BSc. (Honours) in Computer Science</p>
          <p className="text-gray-600 dark:text-gray-400">
            University of Peradeniya
          </p>
          <div className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <p>Jan 2024 – Present</p>
            <p>Peradeniya, Kandy, Sri Lanka</p>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-gray-900">
          <h3 className="text-lg font-bold">College</h3>
          <p className="font-bold">St. Anne's College</p>
          <div className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <p>Jan 2022 – Jan 2024</p>
            <p>Kurunegala, Sri Lanka</p>
          </div>
        </div>
      </div>
    </div>
  );
}
