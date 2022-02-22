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
    <main id="aboutMe" className="flex  py-20 md:py-24">
      <section className="w-1/2">
        <h2 className="font-bold text-xl mb-2">About Me</h2>
        <p className="mb-5">
          I currently work with JavaScript, jQuery, Bootstrap and React on a
          daily basis. I enjoy expanding my knowledge through learning and
          teaching different techologies. Outside of coding I also have a
          passion for cooking and gardening.
        </p>
        <div className="mb-5">
          <h3 className="font-semibold mb-1">
            Section 508 Trusted Tester Conformance
          </h3>
          <p>
            I am a 508 accessibility certified through the Department of
            Homeland Security.{" "}
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">
            Public Trust Security Clearance
          </h3>
          <p>
            I have public trust security clearance through the Department of
            Homeland Security.
          </p>
        </div>
      </section>
      <section className="flex flex-col w-1/2 pl-10 pr-3">
        <h3 className="text-xl font-bold mb-3 ">Technology Proficiencies</h3>
        <ul className="flex flex-col ">
          <li className="flex  mb-3">
            <a
              href="www.google.com"
              className="flex cursor-pointer has-tooltip relative"
            >
              <span className="self-center font-semibold mr-2">HTML</span>{" "}
              <FaHtml5 size={30} />
              <span className="tooltip p-1 rounded-md left-1/2 translate-x-12 min-w-max">
                Click to learn more
              </span>
            </a>
          </li>
          <li className="flex  mb-3">
            <a
              href="www.google.com"
              className="flex cursor-pointer has-tooltip relative"
            >
              <span className="self-center font-semibold mr-2"> CSS </span>
              <FaCss3Alt size={30} />
              <span className="tooltip p-1 rounded-md left-1/2 translate-x-10 min-w-max">
                Click to learn more
              </span>
            </a>
          </li>
          <li className="flex  mb-3">
            <a
              href="www.google.com"
              className="flex cursor-pointer has-tooltip relative"
            >
              <span className="self-center font-semibold mr-2">
                {" "}
                JavaScript{" "}
              </span>
              <SiJavascript size={30} />
              <span className="tooltip p-1 rounded-md left-1/2 translate-x-16 min-w-max">
                Click to learn more
              </span>
            </a>
          </li>
          <li className="flex  mb-3">
            <a
              href="www.google.com"
              className="flex cursor-pointer has-tooltip relative"
            >
              <span className="self-center font-semibold mr-2"> NodeJS </span>
              <FaNodeJs size={30} />
              <span className="tooltip p-1 rounded-md left-1/2 translate-x-14 min-w-max">
                Click to learn more
              </span>
            </a>
          </li>
          <li className="flex  mb-3">
            <a
              href="www.google.com"
              className="flex cursor-pointer has-tooltip relative"
            >
              <span className="self-center font-semibold mr-2"> ReactJS </span>
              <FaReact size={30} />
              <span className="tooltip p-1 rounded-md left-1/2 translate-x-14 min-w-max">
                Click to learn more
              </span>
            </a>
          </li>
          <li className="flex mb-3">
            <a
              href="www.google.com"
              className="flex cursor-pointer has-tooltip relative"
            >
              <span className="self-center font-semibold mr-2"> MySQL </span>
              <SiMysql size={30} />
              <span className="tooltip p-1 rounded-md left-1/2 translate-x-14 min-w-max">
                Click to learn more
              </span>
            </a>
          </li>
          <li className="flex mb-3">
            <a
              href="www.google.com"
              className="flex cursor-pointer has-tooltip relative"
            >
              <span className="self-center font-semibold mr-2"> MongoDB </span>
              <SiMongodb size={30} />
              <span className="tooltip p-1 rounded-md left-1/2 translate-x-14 min-w-max">
                Click to learn more
              </span>
            </a>
          </li>
          <li className="flex  mb-3">
            <a
              href="www.google.com"
              className="flex cursor-pointer has-tooltip relative"
            >
              <span className="self-center font-semibold mr-2">
                {" "}
                TypeScript{" "}
              </span>
              <SiTypescript size={30} />
              <span className="tooltip p-1 rounded-md left-1/2 translate-x-16 min-w-max">
                Click to learn more
              </span>
            </a>
          </li>
          <li className="flex  mb-3">
            <a
              href="www.google.com"
              className="flex cursor-pointer has-tooltip relative"
            >
              <span className="self-center font-semibold mr-2"> GraphQL </span>
              <SiGraphql size={30} />
              <span className="tooltip p-1 rounded-md left-1/2 translate-x-14 min-w-max">
                Click to learn more
              </span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
