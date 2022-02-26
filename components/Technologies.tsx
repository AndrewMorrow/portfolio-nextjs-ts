import TechnologyItem from "./TechnologyItem";

const technologies = [
  { id: 1, name: "HTML", icon: "FaHtml5" },
  { id: 2, name: "JavaScript", icon: "SiJavascript" },
  { id: 2, name: "CSS", icon: "FaCss3Alt" },
  { id: 2, name: "NodeJS", icon: "FaNodeJs" },
  { id: 2, name: "ReactJS", icon: "FaReact" },
  { id: 2, name: "MongoDB", icon: "SiMongodb" },
  { id: 2, name: "GraphQL", icon: "SiGraphql" },
  { id: 2, name: "TypeScript", icon: "SiTypescript" },
  { id: 2, name: "MySQL", icon: "SiMysql" },
];

export default function Technologies() {
  return (
    <section className="mb-20 p-8 text-center">
      <h3 className="mb-3 text-xl font-bold ">Technology Proficiencies</h3>
      <ul className="flex flex-wrap justify-center gap-4 sm:justify-evenly sm:gap-2">
        {technologies.map((technology, i) => (
          <TechnologyItem
            key={technology.id}
            name={technology.name}
            icon={technology.icon}
            flipped={i % 2}
          />
        ))}
      </ul>
      <div className=" "></div>
    </section>
  );
}
