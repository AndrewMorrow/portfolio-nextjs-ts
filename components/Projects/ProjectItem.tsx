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
        "sm:flex gap-4 lg:gap-0 mb-12 py-12 sm:py-16 px-2 "
        // flipped ? "bg-gray-100" : "bg-slate-100"
      )}
    >
      <div
        className={classNames(
          flipped ? "order-2" : "order-1",
          "sm:w-1/2 text-center mb-3 px-3 pt-2"
        )}
      >
        <Image src={imgSrc} alt={altText} width={500} height={300} />
        <div className="hidden sm:block lg:hidden mt-6">
          <figure className="flex justify-center">
            {icons.map((icon: any, i: number) => (
              <a
                key={i}
                className="has-tooltip relative cursor-pointer self-center mr-4"
              >
                {" "}
                <span className="tooltip p-1 rounded-md left-1/2 -translate-x-2/4  -bottom-1 translate-y-full">
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

        <p className="pr-2 lg:mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae
          provident deserunt magnam eligendi eos reprehenderit ipsam
          voluptatibus et quisquam inventore porro tempore, cumque magni, in
          velit quam maxime odit.
        </p>

        <div className="block sm:hidden lg:block">
          <p
            className={classNames(
              "font-semibold text-lg text-center animate-bounce ",
              !iconInfoIsActive && "invisible"
            )}
          >
            Click to learn more!
          </p>

          <ul className="flex justify-center gap-4 w-full">
            {icons.map((icon: any, i: number) => (
              <li
                key={i}
                className="relative has-tooltip"
                onMouseEnter={() => handleIconInfo(true)}
                onMouseLeave={() => handleIconInfo(false)}
              >
                <a href={icon.href} className=" cursor-pointer self-center ">
                  {" "}
                  <DynamicIcon icon={icon.name} size={icon.size} />
                </a>
                <span className="tooltip p-1 rounded-md left-1/2 -translate-x-2/4  -bottom-1 translate-y-full">
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
