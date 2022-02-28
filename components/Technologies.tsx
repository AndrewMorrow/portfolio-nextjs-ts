import TechnologyItem from "./TechnologyItem";

const technologies = [
  { id: 1, name: "HTML", icon: "FaHtml5" },
  { id: 2, name: "CSS", icon: "FaCss3Alt" },
  { id: 2, name: "JavaScript", icon: "SiJavascript" },
  { id: 2, name: "NodeJS", icon: "FaNodeJs" },
  { id: 2, name: "ReactJS", icon: "FaReact" },
  { id: 2, name: "MongoDB", icon: "SiMongodb" },
  { id: 2, name: "GraphQL", icon: "SiGraphql" },
  { id: 2, name: "TypeScript", icon: "SiTypescript" },
  { id: 2, name: "MySQL", icon: "SiMysql" },
];

export default function Technologies() {
  return (
    <section className="mb-16 py-10 text-center">
      <h3 className="mb-1 p-2 font-playfair text-2xl md:text-3xl font-bold">
        Technology Proficiencies
      </h3>
      {/* <hr className="mb-6 w-1/2 translate-x-1/2 opacity-25" /> */}
      <hr className="mb-6 opacity-25 md:w-1/2 md:translate-x-1/2" />
      <ul className="flex flex-wrap justify-center gap-4 sm:justify-evenly sm:gap-2">
        {technologies.map((technology, i) => (
          <TechnologyItem
            key={i}
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