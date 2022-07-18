import {
  SiExpress,
  SiGraphql,
  SiHandlebarsdotjs,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiPaypal,
} from "react-icons/si";
import React from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { RiShieldStarFill } from "react-icons/ri";
import { GiBookCover } from "react-icons/gi";
import { TbBrandNextjs } from "react-icons/tb";
import { CgServerless } from "react-icons/cg";

export default function DynamicIcon(props: any) {
  const { icon, size } = props;

  switch (icon) {
    case "SiJavascript":
      return <SiJavascript size={size} className="text-yellow-400" />;
    case "SiHandlebarsdotjs":
      return <SiHandlebarsdotjs size={size} className="text-orange-700" />;
    case "SiExpress":
      return <SiExpress size={size} />;
    case "SiTailwindcss":
      return <SiTailwindcss size={size} className="text-sky-400" />;
    case "FaHtml5":
      return <FaHtml5 size={size} className="text-blue-700" />;
    case "FaCss3Alt":
      return <FaCss3Alt size={size} className="text-red-700" />;
    case "FaNodeJs":
      return <FaNodeJs size={size} color="green" />;
    case "FaReact":
      return <FaReact size={size} className="text-sky-400" />;
    case "SiMysql":
      return <SiMysql size={size} className="text-sky-500" />;
    case "SiMongodb":
      return <SiMongodb size={size} color="green" />;
    case "SiTypescript":
      return <SiTypescript size={size} className="text-blue-600" />;
    case "SiGraphql":
      return <SiGraphql size={size} className="text-pink-500" />;
    case "IoAccessibility":
      return <IoAccessibility size={size} />;
    case "RiShieldStarFill":
      return <RiShieldStarFill size={size} />;
    case "GiBookCover":
      return <GiBookCover size={size} />;
    case "SiRedux":
      return <SiRedux size={size} className="text-purple-400" />;
    case "SiPaypal":
      return <SiPaypal size={size} className="text-blue-600" />;
    case "TbBrandNextjs":
      return <TbBrandNextjs size={size} className="text-white" />;
    case "CgServerless":
      return <CgServerless size={size} className="text-rose-500" />;
    default:
      return <span>no icon</span>;
  }
}
