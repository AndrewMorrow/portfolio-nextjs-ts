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
      <div className="flex justify-evenly py-8">
        <div className="w-1/2">
          <h2 className="font-bold text-xl ">About Me</h2>
          <p className="">
            I currently work with JavaScript, jQuery, Bootstrap and React on a
            daily basis. I enjoy expanding my knowledge through learning and
            teaching different techologies. Outside of coding I also have a
            passion for cooking and gardening.
          </p>
        </div>
        <div className="flex flex-col ">
          <h3 className="text-xl font-bold mb-3">Technology Proficiencies</h3>
          <ul className="flex flex-col gap-y-3">
            <li className="flex ">
              <span className="self-center font-semibold mr-2">HTML</span>{" "}
              <FaHtml5 size={30} />
            </li>
            <li className="flex ">
              <span className="self-center font-semibold mr-2"> CSS </span>
              <FaCss3Alt size={30} />
            </li>
            <li className="flex ">
              <span className="self-center font-semibold mr-2">
                {" "}
                JavaScript{" "}
              </span>

              <SiJavascript size={30} />
            </li>
            <li className="flex ">
              <span className="self-center font-semibold mr-2"> NodeJS </span>
              <FaNodeJs size={30} />
            </li>
            <li className="flex ">
              <span className="self-center font-semibold mr-2"> ReactJS </span>
              <FaReact size={30} />
            </li>
            <li className="flex ">
              <span className="self-center font-semibold mr-2"> MySQL </span>
              <SiMysql size={30} />
            </li>
            <li className="flex ">
              <span className="self-center font-semibold mr-2"> MongoDB </span>
              <SiMongodb size={30} />
            </li>
            <li className="flex ">
              <span className="self-center font-semibold mr-2">
                {" "}
                TypeScript{" "}
              </span>
              <SiTypescript size={30} />
            </li>
            <li className="flex ">
              <span className="self-center font-semibold mr-2"> GraphQL </span>
              <SiGraphql size={30} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
