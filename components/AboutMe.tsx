import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTypescript,
} from "react-icons/si";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import TechnologyItem from "./TechnologyItem";
import { useState } from "react";

const technologies = [
  { id: 1, name: "HTML", icon: "FaHtml5" },
  { id: 2, name: "CSS", icon: "FaCss3Alt" },
  { id: 2, name: "JavaScript", icon: "SiJavascript" },
  { id: 2, name: "NodeJS", icon: "FaNodeJs" },
  { id: 2, name: "ReactJS", icon: "FaReact" },
  { id: 2, name: "MySQL", icon: "SiMysql" },
  { id: 2, name: "MongoDB", icon: "SiMongodb" },
  { id: 2, name: "TypeScript", icon: "SiTypescript" },
  { id: 2, name: "GraphQL", icon: "SiGraphql" },
];

export default function AboutMe() {
  const [isShown, setIsShown] = useState(false);

  return (
    <main id="aboutMe" className="flex py-20 md:py-24 gap-6">
      <section className="w-2/3 sm:pr-20 lg:pr-32">
        <h2 className="font-bold text-xl mb-2">About Me</h2>
        <p className="mb-5 ">
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
      <section className="flex flex-col ">
        <h3 className="text-xl font-bold mb-3 ">Technology Proficiencies</h3>
        <ul className="flex flex-col bg-gray-500 bg-opacity-5 ">
          {technologies.map((technology) => (
            <TechnologyItem
              key={technology.id}
              name={technology.name}
              icon={technology.icon}
            />
          ))}
          
        </ul>
      </section>
    </main>
  );
}
