import {
  SiExpress,
  SiGraphql,
  SiHandlebarsdotjs,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import React from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

export default function DynamicIcon(props: any) {
  const { icon, size } = props;

  switch (icon) {
    case "SiJavascript":
      return <SiJavascript size={size} className="text-yellow-400" />;
    case "SiHandlebarsdotjs":
      return <SiHandlebarsdotjs size={size} />;
    case "SiExpress":
      return <SiExpress size={size} />;
    case "SiTailwindCSS":
      return <SiTailwindcss size={size} />;
    case "FaHtml5":
      return <FaHtml5 size={size} className="text-blue-700" />;
    case "FaCss3Alt":
      return <FaCss3Alt size={size} className="text-red-700" />;
    case "FaNodeJs":
      return <FaNodeJs size={size} color="green" />;
    case "FaReact":
      return <FaReact size={size} className="text-sky-400" />;
    case "SiMysql":
      return <SiMysql size={size} className="text-sky-800" />;
    case "SiMongodb":
      return <SiMongodb size={size} color="green" />;
    case "SiTypescript":
      return <SiTypescript size={size} className="text-blue-600" />;
    case "SiGraphql":
      return <SiGraphql size={size} className="text-pink-500" />;
    default:
      return <span>no icon</span>;
  }
}
