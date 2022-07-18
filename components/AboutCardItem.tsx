import DynamicIcon from "./DynamicIcon";

const cards = [
  {
    id: 1,
    title: "Section 508 Trusted Tester Conformance",
    icon: "IoAccessibility",
    desc: (
      <p>
        I am a 508 accessibility certified through the{" "}
        <a
          href="https://www.dhs.gov/trusted-tester"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline visited:text-purple-400"
        >
          trusted tester training
        </a>{" "}
        offered by the Department of Homeland Security. Which deals with the
        latest accessibility standards and design.
      </p>
    ),
  },
  {
    id: 2,
    title: "Public Trust Security Clearance",
    icon: "RiShieldStarFill",
    desc: "I have public trust security clearance through the Department of Homeland Security. This states that trust and security are of upmost importance to me and the company I am working for.",
  },
  {
    id: 3,
    title: "Mentorship and Lifelong Learning",
    icon: "GiBookCover",
    desc: " I currently mentor students through Trilogy Education from prestigious colleges around the world. These students continuously present new technologies and challenges that keep me learning and adapting.",
  },
];

export default function AboutCardItem() {
  const handleAnchorInput = (string: string) => {
    const newString = string.replace(
      "trusted tester training",
      `${(<a>trusted tester training</a>)}`
    );

    console.log(newString);
    return newString;
  };
  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative h-max w-72 rounded-lg bg-slate-800 p-6"
        >
          <span className="absolute left-1/2 flex h-24 w-24 -translate-y-full -translate-x-1/2 items-center  justify-center rounded-full border-8 border-slate-900 bg-slate-900">
            <i className="justify-center">
              <DynamicIcon size={30} icon={card.icon} />
            </i>
          </span>
          <h2 className="mb-2 mt-2 border-b border-slate-50 border-opacity-10 p-2 text-center font-bold">
            {" "}
            {card.title}
          </h2>
          <p className=" p-2 text-center font-extralight">{card.desc}</p>
        </div>
      ))}
    </>
  );
}
