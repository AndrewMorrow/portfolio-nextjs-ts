import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

export default function AboutMe() {
  return (
    <>
      <div className="flex  py-20 md:py-24">
        <div className="w-1/2">
          <h2 className="font-bold text-xl mb-2">About Me</h2>
          <p className="">
            I currently work with JavaScript, jQuery, Bootstrap and React on a
            daily basis. I enjoy expanding my knowledge through learning and
            teaching different techologies. Outside of coding I also have a
            passion for cooking and gardening.
          </p>
        </div>
        <div className="flex flex-col w-1/2 pl-10 pr-3">
          <h3 className="text-xl font-bold mb-3 ">Technology Proficiencies</h3>
          <ul className="flex flex-col ">
            <li className="flex has-tooltip relative mb-3">
              <a href="www.google.com" className="flex cursor-pointer ">
                <span className="self-center font-semibold mr-2">HTML</span>{" "}
                <FaHtml5 size={30} />
                <span className="tooltip p-1 rounded-md right-1/4">
                  Learn More
                </span>
              </a>
            </li>
            <li className="flex has-tooltip relative mb-3">
              <a href="www.google.com" className="flex cursor-pointer ">
                <span className="self-center font-semibold mr-2"> CSS </span>
                <FaCss3Alt size={30} />
                <span className="tooltip p-1 rounded-md right-1/3">
                  Learn More
                </span>
              </a>
            </li>
            <li className="flex has-tooltip relative mb-3">
              <a href="www.google.com" className="flex cursor-pointer ">
                <span className="self-center font-semibold mr-2">
                  {" "}
                  JavaScript{" "}
                </span>
                <SiJavascript size={30} />
                <span className="tooltip p-1 rounded-md right-6">
                  Learn More
                </span>
              </a>
            </li>
            <li className="flex has-tooltip relative mb-3">
              <a href="www.google.com" className="flex cursor-pointer ">
                <span className="self-center font-semibold mr-2"> NodeJS </span>
                <FaNodeJs size={30} />
                <span className="tooltip p-1 rounded-md right-11">
                  Learn More
                </span>
              </a>
            </li>
            <li className="flex has-tooltip relative mb-3">
              <a href="www.google.com" className="flex cursor-pointer ">
                <span className="self-center font-semibold mr-2">
                  {" "}
                  ReactJS{" "}
                </span>
                <FaReact size={30} />
                <span className="tooltip p-1 rounded-md right-11">
                  Learn More
                </span>
              </a>
            </li>
            <li className="flex has-tooltip relative mb-3">
              <a href="www.google.com" className="flex cursor-pointer ">
                <span className="self-center font-semibold mr-2"> MySQL </span>
                <SiMysql size={30} />
                <span className="tooltip p-1 rounded-md right-11">
                  Learn More
                </span>
              </a>
            </li>
            <li className="flex has-tooltip relative mb-3">
              <a href="www.google.com" className="flex cursor-pointer ">
                <span className="self-center font-semibold mr-2">
                  {" "}
                  MongoDB{" "}
                </span>
                <SiMongodb size={30} />
                <span className="tooltip p-1 rounded-md right-8">
                  Learn More
                </span>
              </a>
            </li>
            <li className="flex has-tooltip relative mb-3">
              <a href="www.google.com" className="flex cursor-pointer ">
                <span className="self-center font-semibold mr-2">
                  {" "}
                  TypeScript{" "}
                </span>
                <SiTypescript size={30} />
                <span className="tooltip p-1 rounded-md right-5">
                  Learn More
                </span>
              </a>
            </li>
            <li className="flex has-tooltip relative mb-3">
              <a href="www.google.com" className="flex cursor-pointer ">
                <span className="self-center font-semibold mr-2">
                  {" "}
                  GraphQL{" "}
                </span>
                <SiGraphql size={30} />
                <span className="tooltip p-1 rounded-md right-8">
                  Learn More
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
