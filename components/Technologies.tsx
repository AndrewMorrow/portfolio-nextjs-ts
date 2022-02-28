import TechnologyItem from "./TechnologyItem";

const technologies = [
  {
    id: 1,
    name: "HTML",
    icon: "FaHtml5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 2,
    name: "CSS",
    icon: "FaCss3Alt",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 2,
    name: "JavaScript",
    icon: "SiJavascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { id: 2, name: "NodeJS", icon: "FaNodeJs", href: "https://nodejs.org/en/" },
  { id: 2, name: "ReactJS", icon: "FaReact", href: "https://reactjs.org/" },
  {
    id: 2,
    name: "MongoDB",
    icon: "SiMongodb",
    href: "https://www.mongodb.com/",
  },
  { id: 2, name: "GraphQL", icon: "SiGraphql", href: "https://graphql.org/" },
  {
    id: 2,
    name: "TypeScript",
    icon: "SiTypescript",
    href: "https://www.typescriptlang.org/",
  },
  { id: 2, name: "MySQL", icon: "SiMysql", href: "https://www.mysql.com/" },
];

export default function Technologies() {
  return (
    <section className="mb-16 py-10 text-center">
      <h3 className="mb-1 p-2 font-playfair text-2xl lg:text-3xl font-bold">
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
            href={technology.href}
            flipped={i % 2}
          />
        ))}
      </ul>
      <div className=" "></div>
    </section>
  );
}
