import profile from "../assets/profile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-blue-950 text-white flex items-center px-6 overflow-hidden pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 uppercase tracking-[5px] font-semibold mb-6 text-sm">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Hi, I'm
            <br />
            <span className="text-blue-400">Dnyaneshwar</span>
            <br />
            Algule
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8">
            Java Full Stack Developer
          </h2>

          <p className="text-gray-400 text-base leading-7 max-w-md mb-10">
            Java Full Stack Developer with a B.E. in Computer Engineering,
            skilled in building scalable web applications using Spring Boot and
            React.js. Proficient in secure REST APIs, JWT authentication, and
            MySQL-based full-stack application development.
          </p>

          <div className="flex flex-wrap gap-5 mb-10">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-2xl"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
            >
              Resume
            </a>
          </div>

          <div className="flex gap-4 flex-wrap text-sm text-gray-300">
            <span className="bg-white/10 px-4 py-2 rounded-full">React.js</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">
              Spring Boot
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full">MySQL</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">
              REST APIs
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
          <div className="absolute w-[420px] h-[420px] bg-blue-500/30 blur-3xl rounded-full"></div>

          <div className="relative bg-white/10 backdrop-blur-2xl p-5 rounded-full border border-white/20 shadow-2xl">
            <img
              src={profile}
              alt="profile"
              className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-blue-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
