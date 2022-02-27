import Image from "next/image";

/* This example requires Tailwind CSS v2.0+ */
export default function Header() {
  return (
    <header className="mx-auto max-w-7xl py-20 sm:py-20 ">
      <h1 className="font-playfair text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
        Andrew Morrow
      </h1>
      <h2 className="text-md font-extrabold tracking-tight md:text-lg lg:text-xl ">
        Full Stack Web Developer
      </h2>
      <p className="mt-6 max-w-3xl text-lg  font-light">
        Dedicated developer with a passion for teaching looking to enhance a
        coding career with a first-class dev team in a challenging programming
        position. Excels at and enjoys learning new technologies and paradigms
        as well as teaching them to others.
      </p>
    </header>
  );
}
