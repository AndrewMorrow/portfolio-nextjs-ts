import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";
import projectData from "../../public/db.json";

export default function Projects(props: any): JSX.Element {
  // console.log(props);
  // interface Project {
  //   name: string;
  //   // icons: [{ name: string; tip: string; size: number }];
  //   githubRepo: string;
  //   deployedLink: string;
  //   imgSrc: string;
  //   altText: string;
  //   flipped: number;
  // }

  return (
    <section id="projects" className="py-20 md:py-16">
      <h2 className="mb-2 text-center font-playfair text-2xl font-bold">
        View My Work
      </h2>
      <hr className="mb-4 w-2/4 translate-x-2/4 opacity-25" />

      <div className=" gap-4">
        {projectData.map((project, i: number) => (
          <ProjectItem key={i} flipped={i % 2} project={project} />
        ))}
      </div>
    </section>
  );
}

// export async function getStaticProps(context: any) {

//   return {
//     props: {  }, // will be passed to the page component as props
//   };
// }
