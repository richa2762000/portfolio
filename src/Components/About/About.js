import { Value } from "./Value.js";

const About = () => {
  return (
    <section className="bg-indigo-950 h-full relative overflow-hidden bg-cover bg-center">
      <div className="container mx-auto text-white py-12 rounded-md bg-opacity-80">
        <h4 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          What I Do
        </h4>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          I'm an experienced web developer with a strong focus on the frontend,
          with around 2 years of hands-on experience. Skilled in creating
          responsive and visually appealing user interfaces. Possess strong
          problem-solving abilities and a passion for staying up-to-date with
          the latest web development technologies.
        </p>
        <h1 className="text-center text-2xl font-bold mt-12 mb-4 text-gray-300">Personal Projects:</h1>
        <div className="mx-auto overflow-hidden mt-8 w-full md:w-3/4 lg:w-1/2">
          {Value.map((value, index) => (
            <div key={index} className="p-6 border rounded-md bg-gray-800 shadow-md hover:shadow-lg bg-transparent hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 mb-8">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-white">
                {value.title}
              </h1>
              <ol className="list-decimal pl-4 text-gray-300">
                <li>{value.order1}</li>
                <li>{value.order2}</li>
                <li>{value.order3}</li>
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
