import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-black text-center mb-16">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
            <h3 className="text-3xl font-bold text-blue-400 mb-6">
              Career Objective
            </h3>

            <p className="text-gray-300 text-lg leading-8">
              Aspiring Java Full Stack Developer with a strong foundation in
              Spring Boot, React.js, REST APIs, and MySQL. Passionate about
              building scalable, secure, and user-friendly web applications
              while continuously enhancing technical skills and contributing to
              real-world software development projects.
            </p>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
            <h3 className="text-3xl font-bold text-blue-400 mb-6">Education</h3>

            <div className="space-y-5 text-lg text-gray-300">
              <p>
                <span className="font-bold text-white">
                  Bachelor of Engineering(B.E.) in Computer Engineering
                </span>
              </p>

              <p>Modern Education Society's Wadia College of Engineering</p>

              <p>Graduated in 2025</p>

              <p>Pune, Maharashtra</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
