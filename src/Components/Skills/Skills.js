import { NavLink } from "react-router-dom";
import { SkillData } from "./SkillData.js";
import Experience from "./Experience.js";

const Skills = () => {
  return (
    <section className="py-12 bg-indigo-950 text-white">
      <div className="container mt-8">
        <Experience />
      </div>
      <div className="container mx-auto mt-3">
        <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SkillData.map((data, index) => (
            <div
              key={index}
              className="p-6 border rounded-md text-center shadow-md bg-transparent hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <NavLink to={data.link} className="flex items-center justify-center">
                <div className="relative">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="mx-auto mb-4 border-2 w-32 h-32 object-cover rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                  />
                  <div className="absolute inset-0 bg-indigo-900 opacity-0 hover:opacity-30 transition duration-300 ease-in-out"></div>
                </div>
              </NavLink>
              <h2 className="text-lg font-bold mt-2">{data.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


// l we will make personal portfolio website design in React JS. This personal portfolio website or Resume website will contains the personal information, skills, work experience or portfolio, clients details and contact section with fully function contact form. This contact form will send the enquiries to your email address.