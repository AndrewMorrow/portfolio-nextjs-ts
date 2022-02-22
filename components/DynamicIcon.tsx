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
// const obj2 = {
//   icon: "<Image src='/images/expressjs.svg' alt='expressJS icon' width={50} height={20} />",
//   tip: "expressJS",
// };
// const arr = [
//   {
//     icon: <SiJavascript size={30} />,
//     tip: "Javascript",
//     name: "SiHandlebarsdotjs",
//   },
//   {
//     icon: <SiExpress size={30} />,
//     tip: "ExpressJS",
//     name: "SiHandlebarsdotjs",
//   },
//   {
//     icon: <SiHandlebarsdotjs size={30} />,
//     tip: "Handlebars",
//     name: "SiHandlebarsdotjs",
//   },
// ];

export default function DynamicIcon(props: any) {
  const { icon, size } = props;

  switch (icon) {
    case "SiJavascript":
      return <SiJavascript size={size} />;
    case "SiHandlebarsdotjs":
      return <SiHandlebarsdotjs size={size} />;
    case "SiExpress":
      return <SiExpress size={size} />;
    case "SiTailwindCSS":
      return <SiTailwindcss size={size} />;
    case "FaHtml5":
      return <FaHtml5 size={size} />;
    case "FaCss3Alt":
      return <FaCss3Alt size={size} />;
    case "FaNodeJs":
      return <FaNodeJs size={size} />;
    case "FaReact":
      return <FaReact size={size} />;
    case "SiMysql":
      return <SiMysql size={size} />;
    case "SiMongodb":
      return <SiMongodb size={size} />;
    case "SiTypescript":
      return <SiTypescript size={size} />;
    case "SiGraphql":
      return <SiGraphql size={size} />;
    default:
      return <span>no icon</span>;
  }
}
