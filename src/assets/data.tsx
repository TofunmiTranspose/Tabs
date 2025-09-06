import type { ReactNode } from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaHome, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import Amazing from "../components/Amazing";

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
    content: <Amazing />,
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: (
      <div className="w-full max-w-4xl p-6 sm:p-10 bg-white dark:bg-gray-900 shadow-xl transition-all duration-300">
        {/* About Me Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 dark:text-indigo-200 mb-6">
          About Me
        </h1>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          Hello! I'm a passionate and dedicated Web Developer based in Lagos,
          Nigeria. With a strong foundation in modern web technologies, I
          specialize in crafting responsive, user-friendly, and high-performance
          web applications. My journey in web development began with a curiosity
          for how things work on the internet, and it quickly evolved into a
          drive to build engaging digital experiences.
        </p>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          I believe in continuous learning and staying updated with the latest
          industry trends to deliver cutting-edge solutions. Whether it's
          front-end aesthetics or back-end logic, I enjoy tackling challenges
          and bringing ideas to life through clean, efficient code.
        </p>

        {/* What I Do Section */}
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-200 mb-4">
          What I Do
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-8">
          <li>
            Building dynamic and interactive user interfaces with React.js
          </li>
          <li>Creating pixel-perfect designs from wireframes and mockups</li>
          <li>
            Ensuring cross-browser compatibility and mobile responsiveness
          </li>
        </ul>

        {/* Skills & Technologies Section */}
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-200 mb-4">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {[
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "React.js",
            "Node.js",
            "Git",
            "RESTful APIs",
            "Responsive Design",
            "Tailwind CSS",
            "TypeScript",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full shadow-sm transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "projects",
    icon: <AiFillProduct />,
    label: "Projects",
    content: <Amazing />,
  },
  {
    id: "contact",
    icon: <FaPhoneAlt />,
    label: "Contact",
    content: <div>Contact</div>,
  },
];
