import { url } from "inspector";
import Image from "next/image";
import React from "react";
import laptopImage from "../public/images/LaptopSmerrimentquest.png";
import ProjectImages from "./ProjectImages";

export default function ProjectItem() {
  return (
    <div className="w-screen max-w-7xl mx-auto">
      <div className="sm:flex mx-8 gap-3">
        <div className="sm:w-1/2">
          <div className="">
            <ProjectImages />
          </div>
        </div>
        <div className="sm:w-1/2">
          <h1 className="text-3xl">Project Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae
            provident deserunt magnam eligendi eos reprehenderit ipsam
            voluptatibus et quisquam inventore porro tempore, cumque magni, in
            velit quam maxime odit.
          </p>
        </div>
      </div>
    </div>
  );
}
