import type { ReactNode } from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaHome, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

export const data: {
  id: string;
  icon: any;
  label: string;
  content: ReactNode;
}[] = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 p-2 md:px-4 mx-aut0 ">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="max-w-sm m-2 mx-aut shadow" key={i}>
            <img src='https://placehold.co/200' className="object-cover w-full h-30" alt="" />
            <div className="div p-2">
              <div className="mb-2">
                <h2 className="font-bold text-sm sm:text-base">Amazing Card</h2>
                <p className="text-gray-700 text-[0.6rem] sm:text-xs">
                  This is a description for the amazing card.
                </p>
              </div>
              <button className="px-2 sm:px-4 py-1 sm:py-2 bg-black text-white rounded text-[0.6rem] sm:text-xs cursor-pointer">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <div>
    <div className="flex justify-center p-4 sm:p-8 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 min-h-screen font-sans">
      <div className="w-full max-w-4xl p-6 sm:p-10 bg-white dark:bg-gray-900 rounded-3xl shadow-xl transition-all duration-300">
        
        {/* About Me Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-6">About Me</h1>
        
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          Hello! I'm a passionate and dedicated Web Developer based in Lagos, Nigeria.
          With a strong foundation in modern web technologies, I specialize in crafting
          responsive, user-friendly, and high-performance web applications. My journey
          in web development began with a curiosity for how things work on the internet,
          and it quickly evolved into a drive to build engaging digital experiences.
        </p>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          I believe in continuous learning and staying updated with the latest industry
          trends to deliver cutting-edge solutions. Whether it's front-end aesthetics
          or back-end logic, I enjoy tackling challenges and bringing ideas to life
          through clean, efficient code.
        </p>

        {/* What I Do Section */}
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">What I Do</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-8">
          <li>Building dynamic and interactive user interfaces with React.js</li>
          <li>Developing robust and scalable back-end APIs with Node.js and Express</li>
          <li>Database management and optimization (MongoDB, PostgreSQL)</li>
          <li>Creating pixel-perfect designs from wireframes and mockups</li>
          <li>Ensuring cross-browser compatibility and mobile responsiveness</li>
        </ul>

        {/* Skills & Technologies Section */}
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Git', 'RESTful APIs', 'Responsive Design', 'Tailwind CSS', 'TypeScript'].map((skill) => (
            <span key={skill} className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full shadow-sm transition-colors duration-200">
              {skill}
            </span>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mr-2 fill-current">
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v128c0 17.7 14.3 32 32 32s32-14.3 32-32V320h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64V32zM48 352h416c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
            </svg>
            Download CV
          </button>
          <button
            className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mr-2 fill-current">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.6 27.2 8.6 38.6 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4C512 85.5 490.5 64 464 64H48zM0 176V400c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V176L294.4 339.2c-22.8 17.2-54 17.2-76.8 0L0 176z"/>
            </svg>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  
</div>,
  },
  {
    id: "projects",
    icon: <AiFillProduct />,
    label: "Projects",
    content: <div>Projects</div>,
  },
  {
    id: "contact",
    icon: <FaPhoneAlt />,
    label: "Contact",
    content: <div>Contact</div>,
  },
];
