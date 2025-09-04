import { BiArrowFromRight } from "react-icons/bi";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex bg-[#1b1b1b] h-screen flex-col items-center justify-between p-2">
      <div className="top text-white">
        <ul>
          <li>
            <div className="p-2 flex justify-center items-center mb-2">
              <FaHome size={22} className="cursor-pointer" />
            </div>
          </li>
          <li>
            <div className="p-2 flex justify-center items-center mb-2">
              <FaUser size={22} className="cursor-pointer" />
            </div>
          </li>
          <li>
            <div className="p-2 flex justify-center items-center mb-2">
              <FaSearch size={22} className="cursor-pointer" />
            </div>
          </li>
        </ul>
      </div>
      <div className="bottom text-white">
        <ul>
          <li>
            <div className="flex justify-center items-center-p-2 mb-2">
              <MdSettings size={24} className="cursor-pointer" />
            </div>
          </li>
          <li>
            <div className="flex justify-center items-center-p-2 mb-2">
              <BiArrowFromRight size={24} className="cursor-pointer" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
