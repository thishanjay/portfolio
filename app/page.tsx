import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";
import TechinalSkills from "./components/TechinalSkills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <TechinalSkills />
      <Recommendations />
    </div>
  );
}
