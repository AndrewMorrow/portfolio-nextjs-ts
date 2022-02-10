import { url } from "inspector";
import Image from "next/image";
import React from "react";
import laptopImage from "../public/images/LaptopSmerrimentquest.png";

export default function ProjectItem() {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex relative p-10 w-[32rem] h-min">
        <Image className="  " src={laptopImage} alt="merriment" />
        <span className="absolute top-44 right-0">
          <Image
            className="object-contain "
            src="/images/iPhone12merrimentquest.png"
            alt="Image alt here"
            height={150}
            width={250}
          />
        </span>
        <span className="absolute top-32 ">
          <Image
            className="object-contain"
            src="/images/iPadPro11_merrimentquest.png"
            alt="Image alt here"
            height={200}
            width={200}
          />
        </span>
      </div>
    </div>
  );
}
