import projects from "../data/Projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-black to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black text-center mb-6">Projects</h2>

          <p className="text-center text-gray-400 text-lg mb-16">
            Full-stack applications built using React.js, Spring Boot, MySQL,
            and REST APIs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
