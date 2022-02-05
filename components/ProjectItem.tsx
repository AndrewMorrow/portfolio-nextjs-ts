import Image from "next/image";
import React from "react";

export default function ProjectItem() {
  return (
    <div className="w-full">
      {/* Column 1 */}
      <div className="col1">
        <div className="h-20 w-full ">
          <Image
            className="object-contain h-10 w-10"
            src="/images/LaptopSmerrimentquest.png"
            alt="Image alt here"
            height={800}
            width={600}
          />
        </div>
        Column 1
      </div>
      {/* Column 2 */}
      <div className="col2"> Column 2</div>
    </div>
  );
}
