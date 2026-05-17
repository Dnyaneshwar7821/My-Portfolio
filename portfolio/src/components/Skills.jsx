import { motion } from "framer-motion";

const Skills = () => {
  const frontend = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const backend = [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Hibernate",
    "JWT Authentication",
    "JPA",
  ];

  const tools = [
    "MySQL",
    "GitHub",
    "Postman",
    "Render",
    "Railway",
    "Vercel",
    "Docker",
    "VS Code",
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black text-center mb-6">Skills</h2>

          <p className="text-center text-gray-400 text-lg mb-16">
            Technologies and tools I use for full-stack development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-3xl font-bold mb-8 text-blue-400">Frontend</h3>

            <div className="flex flex-wrap gap-4">
              {frontend.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-5 py-3 rounded-2xl font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-3xl font-bold mb-8 text-green-400">Backend</h3>

            <div className="flex flex-wrap gap-4">
              {backend.map((skill) => (
                <span
                  key={skill}
                  className="bg-green-500/10 border border-green-500/20 text-green-300 px-5 py-3 rounded-2xl font-medium hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-3xl font-bold mb-8 text-orange-400">
              Tools & Platforms
            </h3>

            <div className="flex flex-wrap gap-4">
              {tools.map((skill) => (
                <span
                  key={skill}
                  className="bg-orange-500/10 border border-orange-500/20 text-orange-300 px-5 py-3 rounded-2xl font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
