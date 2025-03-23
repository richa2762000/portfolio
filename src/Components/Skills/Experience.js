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
            <b> Streamlined User Journeys</b>: Collaborated on the TATAAIA
            project with PWC Global, streamlining the policy-buying process by
            designing intuitive front-end features, reducing user processing
            time by 30%.
          </li>
          <li>
            <b> In-House Product Development</b>: Engineered and optimized a
            website-building platform, enabling 1,000+ users to create and
            customize their own websites. Refined API integrations, reducing
            load time by 40%, and introduced key upgrades that increased
            platform stability by 30%.
          </li>
          <li>
            <b> Customization Tools</b>: Introduced a drag-and-drop UI builder,
            increasing user interaction by 35%, and re- ducing development time
            for new components by 50%.
          </li>
          <li>
            <b> Usability and Collaboration</b>: Conceptualized website-building
            platform improvements by analyzing user stories and collaborating
            with cross-functional teams, delivering high-impact features that
            elevated overall user satisfaction scores by 40%.
          </li>
          <li>
            <b> Integrated Advanced Libraries</b>: Enhanced code-editor and
            monaco-editor integration, decreasing com- pile errors by 20%,
            leading to a smoother developer experience.
          </li>
          <li>
            <b> User Interaction</b>: Integrated drag-and-drop functionality
            using react-beautiful-dnd, improving workflow efficiency by 25%, and
            Leveraged Chart.js for real-time data visualization, enhancing data
            comprehension.
          </li>
          <li>
            <b> Debugged and Optimized</b>: Resolved 100+ user-reported issues,
            reducing system crashes by 35% and increasing application
            performance.
          </li>
          <li>
            <b> Built Scalable Web Applications</b>: Architected and deployed
            scalable web applications using React.js, op- timizing API
            integration for efficient data retrieval and real-time updates.
            Improved performance and user experience through structured state
            management and responsive UI design.
          </li>
          <li>
            <b> Cross-Team Collaboration</b>: Created responsive and adaptive
            interfaces for mobile and desktop plat- forms, leading to a 20%
            increase in user retention and a 15% improvement in accessibility
            compliance.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Experience;
