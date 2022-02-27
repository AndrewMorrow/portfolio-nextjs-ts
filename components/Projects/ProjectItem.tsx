import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaRocket } from "react-icons/fa";
import DynamicIcon from "../DynamicIcon";

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
    project: { name, icons, githubRepo, deployedLink, imgSrc, altText },
    flipped,
  } = props;
  const [iconInfoIsActive, setIconInfoIsActive] = useState(false);

  const handleIconInfo = (
    isActive: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIconInfoIsActive(isActive);
  };

  return (
    <section
      className={classNames(
        "mb-12 gap-4 rounded-lg py-12  sm:flex sm:py-16 lg:gap-0"
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
        <div className="mt-6 hidden sm:block lg:hidden ">
          <figure className="flex justify-center gap-4">
            {icons.map((icon: any, i: number) => (
              <a
                key={i}
                className="has-tooltip relative cursor-pointer self-center "
              >
                {" "}
                <span className="tooltip left-1/2 -bottom-1 -translate-x-2/4 translate-y-[125%]  rounded-md p-1">
                  <div className="absolute left-1/2 h-0 w-0  -translate-x-2/4 -translate-y-1/2 rotate-[135deg] border-8 border-gray-400 border-t-transparent border-r-transparent"></div>
                  {icon.tip}
                </span>
                <DynamicIcon icon={icon.name} size={icon.size} />
              </a>
            ))}
          </figure>
        </div>
      </div>
      <div
        className={classNames(
          flipped ? "order-1 pl-3 " : "order-2 ",
          "px-3 sm:w-1/2 "
        )}
      >
        <div className="">
          <h2 className="mb-3 text-center text-3xl text-white font-playfair">{name}</h2>
          <div className="mb-3 flex justify-center ">
            <a
              href={githubRepo}
              target="_blank"
              rel="noreferrer"
              className="has-tooltip  relative mr-5 flex content-center gap-2 rounded-lg border-2 border-blue-600 p-2"
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
              className="has-tooltip relative flex cursor-pointer content-center  gap-2 rounded-lg border-2 border-blue-600 p-2"
            >
              <p className="self-center">See Live Demo</p>
              <i className="hidden self-center md:block">
                <FaRocket size={30} color="white" />
              </i>
            </a>
          </div>
        </div>

        <p className="px-8 py-2 text-center text-white lg:mb-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae
          provident deserunt magnam eligendi eos reprehenderit ipsam
          voluptatibus et quisquam inventore porro tempore, cumque magni, in
          velit quam maxime odit.
        </p>

        <div className="block sm:hidden lg:block">
          <p
            className={classNames(
              "animate-bounce text-center text-lg font-semibold ",
              !iconInfoIsActive && "invisible"
            )}
          >
            Click to learn more!
          </p>

          <ul className="flex w-full justify-center  gap-4">
            {icons.map((icon: any, i: number) => (
              <li
                key={i}
                className="has-tooltip relative"
                onMouseEnter={() => handleIconInfo(true)}
                onMouseLeave={() => handleIconInfo(false)}
              >
                <a href={icon.href} className=" cursor-pointer self-center ">
                  {" "}
                  <DynamicIcon icon={icon.name} size={icon.size} />
                </a>
                <span className="tooltip left-1/2 -bottom-1 -translate-x-2/4 translate-y-[125%]  rounded-md p-1">
                  <div className="absolute left-1/2 h-0 w-0  -translate-x-2/4 -translate-y-1/2 rotate-[135deg] border-8 border-gray-400 border-t-transparent border-r-transparent"></div>
                  {icon.tip}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
