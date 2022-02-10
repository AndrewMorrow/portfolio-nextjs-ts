import { url } from "inspector";
import Image from "next/image";
import React from "react";
import laptopImage from "../public/images/LaptopSmerrimentquest.png";

export default function ProjectItem() {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-wrap relative w-full sm:w-3/4 md:w-1/2 h-96 px-4">
        {/* <Image
          className="  "
          src={laptopImage}
          alt="merriment"
          width={600}
          height={400}
          
        /> */}
        <div className="bg-[url('/images/LaptopSmerrimentquest.png')] bg-no-repeat  bg-contain w-min min-w-full">
          <div className="absolute bottom-10 right-2 lg:top-32 lg:-right-6">
            <Image
              className="object-contain "
              src="/images/iPhone12merrimentquest.png"
              alt="Image alt here"
              height={200}
              width={100}
            />
          </div>
          <div className="absolute bottom-10 left-2 md:bottom-15 md:-left-10 lg:top-20 lg:-left-24">
            <Image
              className="object-contain"
              src="/images/iPadPro11_merrimentquest.png"
              alt="Image alt here"
              height={250}
              width={180}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
