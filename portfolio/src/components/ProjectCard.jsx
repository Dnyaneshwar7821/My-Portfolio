// ProjectCard.jsx

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-500"
    >
      <div className="h-56 bg-gradient-to-br from-blue-600 to-slate-900 flex items-center justify-center">
        <h2 className="text-5xl font-black text-white">{project.title}</h2>
      </div>

      <div className="p-8">
        <p className="text-gray-300 text-lg leading-8 mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-2xl text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-gray-300">
            <span className="text-green-400">✔</span>
            JWT Authentication & Authorization
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <span className="text-green-400">✔</span>
            REST API Integration
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <span className="text-green-400">✔</span>
            Responsive Full Stack UI
          </div>
        </div>

        <div className="flex gap-5">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-6 py-3 rounded-2xl font-semibold"
          >
            <MdOpenInNew size={18} />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 rounded-2xl font-semibold"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
