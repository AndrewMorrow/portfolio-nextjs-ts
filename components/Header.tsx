import Image from "next/image";

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="relative ">
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
          Andrew Morrow
        </h1>
        <h2 className="text-md md:text-lg lg:text-xl font-extrabold tracking-tight  ">
          Full Stack Web Developer
        </h2>
        <p className="mt-6 text-xl text-gray-500 max-w-3xl">
          Dedicated developer with a passion for teaching looking to enhance a
          coding career with a first-class dev team in a challenging programming
          position. Excels at and enjoys learning new technologies and paradigms
          as well as teaching them to others.
        </p>
      </div>
    </div>
  );
}
