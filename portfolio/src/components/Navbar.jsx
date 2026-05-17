import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-black tracking-wide text-blue-400">
          Dnyaneshwar.
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/">Home</Link>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>
        </div>

        <div className="flex gap-5 items-center">

          <a
            href="https://github.com/Dnyaneshwar7821"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/dnyaneshwar-algule-757758231"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={22} />
          </a>

          <a href="mailto:dnyaneshwaralgule2003@gmail.com">
            <MdEmail size={22} />
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;