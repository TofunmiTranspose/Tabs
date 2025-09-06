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
    content: <div>About</div>,
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
