import { useState } from "react";
import { data } from "../assets/data";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="w-full mt-10">
      <div className="max-w-4xl mx-auto border-b border-gray-200 flex justify-between px-4">
        {data.map((item) => (
          <div
          key={item.id}
            className={`flex space-x-1 px-1 items-center ${
              item.id === activeTab
                ? "border-b-2 border-gray-400"
                : "text-gray-700"
            } cursor-pointer `}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span className=" text-sm">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 sm:p-2 max-w-9xl">
        {data.map((item) => (item.id === activeTab ? item.content : ""))}
      </div>
    </div>
  );
};

export default Tabs;
