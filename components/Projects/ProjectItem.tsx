import { url } from "inspector";
import Image from "next/image";
import React from "react";
import laptopImage from "../public/images/LaptopSmerrimentquest.png";
import ProjectImages from "./ProjectImages";
import { FaGithub, FaRocket } from "react-icons/fa";
import {
  SiExpress,
  SiHandlebarsdotjs,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import Icon from "../Partials/Icon";
import DynamicIcon from "../Partials/Icon";

// interface Props {
//   project: {
//     name: string;
//     icons: [{ icon: string; tip: string }];
//     githubRepo: string;
//     deployedLink: string;
//     imgSrc: string;
//     altText: string;
//   };
//   flipped: number;
// }

export default function ProjectItem<Project>(props: any): JSX.Element {
  const {
    project: { name, icons, githubRepo, deployedLink, imgSrc, altText },
    flipped,
  } = props;
  const classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(" ");
  };
  // const formatJsx = (stringElem: any) => {
  //   console.log(stringElem);
  //   const FormattedElem = stringElem.replaceAll('"', "");
  //   console.log(FormattedElem);
  //   return FormattedElem;
  // };

  return (
    <div
      className={classNames(
        "sm:flex gap-4 lg:gap-0 mb-8 py-16 sm:py-16 px-6 rounded-lg",
        flipped ? "bg-teal-300" : "bg-orange-300"
      )}
    >
      <div
        className={classNames(
          flipped ? "order-2" : "order-1",
          "sm:w-1/2 text-center mb-3 px-3"
        )}
      >
        {/* <ProjectImages /> */}
        <Image src={imgSrc} alt={altText} width={500} height={300} />
      </div>
      <div
        className={classNames(
          flipped ? "order-1 pl-3" : "order-2 ",
          "sm:w-1/2 px-3 "
        )}
      >
        <div >
          <h2 className="text-3xl mb-3">{name}</h2>
          <div className="flex mb-3">
            <a
              href={githubRepo}
              target="_blank"
              rel="noreferrer"
              className="has-tooltip relative cursor-pointer mr-5"
            >
              <FaGithub size={30} />
              <span className="tooltip p-1 rounded-md left-1/2 -translate-x-2/4 -top-1 -translate-y-full w-max">
                Github Repo
              </span>
            </a>
            <a
              href={deployedLink}
              target="_blank"
              rel="noreferrer"
              className="has-tooltip relative cursor-pointer "
            >
              <FaRocket size={30} />
              <span className="tooltip p-1 rounded-md left-1/2 -translate-x-2/4 -top-1 -translate-y-full w-max">
                See Live Demo
              </span>
            </a>
          </div>
        </div>

        <p className="pr-2 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae
          provident deserunt magnam eligendi eos reprehenderit ipsam
          voluptatibus et quisquam inventore porro tempore, cumque magni, in
          velit quam maxime odit.
        </p>

        {/* <div className="flex gap-7 justify-center  mb-4">
          <FaGithub size={30} />
          <FaRocket size={30} />
        </div> */}
        <h3 className="font-semibold text-lg text-center mb-2">
          Project Technologies
        </h3>
        <div className="flex justify-center ">
          {icons.map((icon: any, i: number) => (
            <a
              key={i}
              className="has-tooltip relative cursor-pointer self-center mr-4"
            >
              {" "}
              <span className="tooltip p-1 rounded-md left-1/2 -translate-x-2/4  -bottom-1 translate-y-full">
                {icon.tip}
              </span>
              {/* {icon.icon} */}
              <DynamicIcon icon={icon.name} size={icon.size} />
            </a>
          ))}
          {/* <SiJavascript size={30} />
          <SiExpress size={30} />
          <SiHandlebarsdotjs size={30} />
          <SiTailwindcss size={30} /> */}
        </div>
      </div>
    </div>
  );
}
