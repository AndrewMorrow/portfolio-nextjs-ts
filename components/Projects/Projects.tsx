import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";
import projectData from "../../public/db.json";

export default function Projects() {
  // interface Project {
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

  return (
    <>
      <div className="">
        {projectData.map((project, i) => (
          <ProjectItem key={i} flipped={i % 2} project={project} />
        ))}
      </div>
    </>
  );
}

// export async function getStaticProps(context: any) {
//   const projectDataReq = await fetch()
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
