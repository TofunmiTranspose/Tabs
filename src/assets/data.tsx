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
    content: <div>About</div>,
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
