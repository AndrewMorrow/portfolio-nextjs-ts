import Image from "next/image";

/* This example requires Tailwind CSS v2.0+ */
export default function Header() {
  return (
    <header id="aboutMe" className="mx-auto max-w-7xl py-14 sm:py-16 ">
      <h1 className="text-center font-playfair text-3xl font-extrabold tracking-tight sm:text-left md:text-4xl lg:text-5xl ">
        <span className="bg-gradient-to-r from-slate-100 to-blue-600 bg-clip-text text-transparent">
          Andrew Morrow
        </span>
      </h1>
      <h2 className="text-md text-center font-extrabold tracking-tight sm:text-left md:text-lg lg:text-xl">
        Full Stack Web Developer
      </h2>
      <p className="mt-6 max-w-3xl text-center  text-lg font-light sm:text-left">
        Dedicated developer with a passion for teaching looking to enhance a
        coding career with a first-class dev team in a challenging programming
        position. Excels at and enjoys learning new technologies and paradigms
        as well as teaching them to others.
      </p>
    </header>
  );
}
