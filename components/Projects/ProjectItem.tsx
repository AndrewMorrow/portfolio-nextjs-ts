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
import Icon from "../Icon";
import DynamicIcon from "../Icon";

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
        "sm:flex gap-4 lg:gap-0 mb-8 py-6 sm:py-8 px-2 rounded-lg shadow-lg drop-shadow-lg ",
        flipped ? "bg-gray-100" : "bg-slate-100"
      )}
    >
      <div
        className={classNames(
          flipped ? "order-2" : "order-1",
          "sm:w-1/2 text-center mb-3 px-3 md:self-center lg:self-baseline"
        )}
      >
        {/* <ProjectImages /> */}
        <Image src={imgSrc} alt={altText} width={500} height={300} />
        <div className="hidden md:block">
          <h3 className="font-semibold text-lg text-center mb-2 mt-3">
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
          </div>
        </div>
      </div>
      <div
        className={classNames(
          flipped ? "order-1 pl-3 xl:order-2" : "order-2 xl:order-1",
          "sm:w-1/2 px-3 "
        )}
      >
        <div>
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
        <div className="block sm:hidden">
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
          </div>
        </div>
      </div>
    </div>
  );
}
