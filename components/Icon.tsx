import {
  SiExpress,
  SiHandlebarsdotjs,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import React from "react";
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
    default:
      return <span>no icon</span>;
  }
}
