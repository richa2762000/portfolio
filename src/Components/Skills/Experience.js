// Experience.js
const Experience = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-6 ">Work Experience</h1>
      <div className="m-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2  p-6 md:p-8 border rounded-md shadow-md bg-gradient-to-r from-gray-800 to-gray-900 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
        <p className="font-bold text-xl mb-2 text-white">
          Associate Software Engineer
        </p>
        <p className="text-gray-300 mb-2">March, 2022 - Present</p>
        <p className="text-gray-300 mb-4">
          Decimal Technology Private Limited - Gurgaon
        </p>

        <h2 className="text-xl font-bold mb-2 text-white">Responsibilities</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>
            Worked with PWC Global on the TATAAIA project, where I designed
            certain features to make buying policies easier. Constructing
            essential front-end elements and evaluating the policies.
          </li>
          <li>
            Developed a responsive website using React.js and integrated it with
            external APIs to provide dynamic content.
          </li>
          <li>
            Collaborated with the team to design and implement user interfaces
            that adapt seamlessly to various devices and screen sizes. Utilized
            React components to efficiently fetch and display data from the API,
            enhancing the user experience.
          </li>
          <li>
            Implement the web application using frontend technologies along with
            HTML5, CSS, JavaScript, React.js, Bootstrap, and Angular. Involved
            in developing applications using React.js, and Bootstrap like Grid,
            Buttons etc. Incorporated router for application.
          </li>
          <li>
            Worked on a product that enables effortless website creation for
            users. Debugged the tool to address user- reported issues.
            Implemented enhancements and integrated additional features to
            optimize functionality.
          </li>
          <li>
            Analyzed product requirements and facilitated the exchange of
            insights to continuously improve the product.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Experience;
