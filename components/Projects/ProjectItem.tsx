import { url } from "inspector";
import Image from "next/image";
import React from "react";
import laptopImage from "../public/images/LaptopSmerrimentquest.png";
import ProjectImages from "./ProjectImages";

export default function ProjectItem() {
  return (
    <div className="sm:flex gap-4 lg:gap-0">
      <div className="sm:w-1/2 text-center mb-3">
        {/* <ProjectImages /> */}
        <Image
          src="/images/merrimentquestCollage.png"
          alt="merrimentcollage"
          width={500}
          height={300}
        />
      </div>
      <div className="sm:w-1/2">
        <h1 className="text-3xl mb-2">Project Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae
          provident deserunt magnam eligendi eos reprehenderit ipsam
          voluptatibus et quisquam inventore porro tempore, cumque magni, in
          velit quam maxime odit.
        </p>
        <div></div>
      </div>
    </div>
  );
}
