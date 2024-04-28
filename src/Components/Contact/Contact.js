import { NavLink } from "react-router-dom";
import ContactForm from "./ContactForm";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-indigo-950 text-white min-h-screen py-12">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold mb-8">Contact</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          <div className="ml-4">
            <h2 className="text-center text-3xl mb-4 font-bold">
              Get in{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg text-transparent bg-clip-text">
                Touch
              </span>
            </h2>
            <p className="mb-4 text-lg">
              Welcome to my personal portfolio website! I'm Richa Chachan, a
              passionate web developer. Let's Work Together! Hire me as a
              developer for my proven expertise in diverse technologies, strong
              problem-solving skills, and a track record of delivering impactful
              solutions with a passion for continuous learning and collaborative
              teamwork.
            </p>
            <p className="mb-4 text-lg">Email: chachanricha@gmail.com</p>
            <p className="mb-4 text-lg">Phone: +91 6350691557</p>
            <div className="flex mb-4">
              <NavLink
                to="https://www.linkedin.com/in/richa-chachan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="mr-4 text-4xl hover:text-gray-300 " />
              </NavLink>
              <NavLink
                to="https://www.instagram.com/richa_chachan_001/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="mr-4 text-4xl hover:text-gray-300" />
              </NavLink>
              <NavLink
                to="https://github.com/richa2762000/richa2762000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-4xl hover:text-gray-300" />
              </NavLink>
            </div>
          </div>
          <div className="p-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
