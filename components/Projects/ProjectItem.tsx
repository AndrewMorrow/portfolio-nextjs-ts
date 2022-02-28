import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaRocket } from "react-icons/fa";
import DynamicIcon from "../DynamicIcon";
import ProjectIcon from "./ProjectIcon";

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

const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};

export default function ProjectItem(props: any): JSX.Element {
  const {
    project: { name, desc, icons, githubRepo, deployedLink, imgSrc, altText },
    flipped,
  } = props;
  const [iconInfoIsActive, setIconInfoIsActive] = useState(false);

  return (
    <div
      className={classNames(
        "mb-16 gap-4 rounded-lg py-8 sm:flex sm:py-10 lg:gap-0"
        // flipped
        //   ? "bg-gray-800 p-2 bg-opacity-60 backdrop-blur-xl rounded-lg"
        //   : "bg-gray-700 p-2 bg-opacity-40 backdrop-blur-xl  rounded-lg"
      )}
    >
      <div
        className={classNames(
          flipped ? "order-2" : "order-1",
          "mb-3  pt-2 text-center  sm:w-1/2 sm:px-3"
        )}
      >
        <div className="sm:transform sm:hover:scale-110">
          <a href={deployedLink} target="_blank" rel="noreferrer">
            <Image src={imgSrc} alt={altText} width={500} height={300} />
          </a>
        </div>
        <ul className="mt-6 hidden px-3 sm:block lg:hidden">
          <figure className="flex flex-wrap justify-center gap-4">
            {icons.map((icon: any, i: number) => (
              <ProjectIcon key={i} icon={icon} />
            ))}
          </figure>
        </ul>
      </div>
      <div
        className={classNames(
          flipped ? "order-1 pl-3 " : "order-2 ",
          "px-3 sm:w-1/2 "
        )}
      >
        <div className="">
          <h2 className="mb-4 text-center font-playfair text-2xl text-white">
            {name}
          </h2>
          <div className="mb-3 flex justify-center ">
            <a
              href={githubRepo}
              target="_blank"
              rel="noreferrer"
              className="has-tooltip relative mr-5 flex content-center gap-2 rounded-lg border-2 border-blue-600 p-2 transition-all  hover:animate-pulse hover:border-blue-300"
            >
              <p className="self-center ">Github Repo</p>
              <i className="hidden self-center md:block">
                <FaGithub size={30} color="white" />
              </i>
            </a>
            <a
              href={deployedLink}
              target="_blank"
              rel="noreferrer"
              className="has-tooltip relative flex cursor-pointer content-center gap-1 rounded-lg border-2 border-blue-600 p-2 transition-all hover:animate-pulse hover:border-blue-300"
            >
              <p className="self-center">See Live Demo</p>
              <i className="hidden self-center md:block">
                <FaRocket size={30} color="white" />
              </i>
            </a>
          </div>
        </div>

        <p className="px-8 py-2 text-center text-white lg:mb-4 ">{desc}</p>

        <div className="block sm:hidden lg:block">
          <p
            className={classNames(
              "animate-bounce text-center text-lg font-semibold ",
              !iconInfoIsActive && "invisible"
            )}
          >
            Click to learn more!
          </p>

          <ul className="flex flex-wrap justify-center gap-4 px-3">
            {icons.map((icon: any, i: number) => (
              <ProjectIcon key={i} icon={icon} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
