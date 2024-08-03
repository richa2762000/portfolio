import { Value } from "./Value.js";

const About = () => {
  return (
    <section className="bg-indigo-950 h-full relative overflow-hidden bg-cover bg-center">
      <div className="container mx-auto text-white py-12 rounded-md bg-opacity-80">
        <h4 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          What I Do
        </h4>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          I’m an experienced web developer with over 2+ years of hands-on
          experience and a strong focus on the frontend. Expertise in developing
          responsive and visually appealing user interfaces. Strong
          problem-solving skills and a desire to keep up with the latest web
          development tools.
        </p>
        <h1 className="text-center text-2xl font-bold mt-12 mb-4 text-gray-300">
          Personal Projects:
        </h1>
        <div className="mx-auto overflow-hidden mt-8 w-full md:w-3/4 lg:w-1/2">
          {Value?.map((value, index) => (
            <div
              key={index}
              className="p-6 border rounded-md bg-gray-800 shadow-md hover:shadow-lg bg-transparent hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 mb-8"
            >
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-white">
                {value.title}
              </h1>
              <ol className="list-decimal pl-4 text-gray-300">
                {value.order1 && <li>{value.order1}</li>}
                {value.order2 && <li>{value.order2}</li>}
                {value.order3 && <li>{value.order3}</li>}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
