import Image from "next/image";
import laptopImage from "../public/images/LaptopSmerrimentquest.png";

export default function ProjectImages() {
  return (
    <div className="flex flex-wrap relative w-full h-96 px-4 ">
      <div className="bg-[url('/images/LaptopSmerrimentquest.png')] bg-no-repeat  bg-contain w-min min-w-full">
        <div className="absolute bottom-10 right-0 md:bottom-16 lg:bottom-0">
          <Image
            className="object-contain "
            src="/images/iPhone12merrimentquest.png"
            alt="Image alt here"
            height={200}
            width={100}
          />
        </div>
        <div className="absolute bottom-10 left-0 md:bottom-16 lg:bottom-0 ">
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
  );
}
