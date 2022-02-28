/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const initialState = {
    aboutMe: false,
    projects: false,
    contact: false,
  };
  const [activeItem, setActiveItem] = useState(initialState);

  const handleActiveChange = (item: string, isActive: boolean) => {
    setActiveItem({ ...initialState, [item]: isActive });
  };

  useScrollPosition(({ prevPos, currPos }) => {
    // console.log("y", currPos.y);
    if (-currPos.y >= 0 && -currPos.y <= 850) {
      handleActiveChange("aboutMe", true);
    } else if (-currPos.y >= 850 && -currPos.y <= 1150) {
      handleActiveChange("projects", true);
    } else if (-currPos.y >= 1150) {
      handleActiveChange("contact", true);
    }
  });

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     setScrollPosition(position);
  //     console.log(scrollPosition);
  // };

  // useEffect(() => {
  //     window.addEventListener('scroll', handleScroll, { passive: true });

  //     return () => {
  //         window.removeEventListener('scroll', handleScroll);
  //     };
  // }, []);

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-slate-800 backdrop-blur-2xl "
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src="/images/android-chrome-512x512.png"
                    alt="Workflow"
                    width={45}
                    height={45}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#aboutMe"
                    className={classNames(
                      "   inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-300",
                      activeItem.aboutMe
                        ? "border-blue-500 font-bold text-white"
                        : "border-transparent text-gray-400"
                    )}
                    onClick={() => handleActiveChange("aboutMe", true)}
                  >
                    About Me
                  </a>

                  <a
                    href="#projects"
                    className={classNames(
                      " inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-300",
                      activeItem.projects
                        ? "border-blue-500 font-bold text-white"
                        : "border-transparent text-gray-400"
                    )}
                    onClick={() => handleActiveChange("projects", true)}
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className={classNames(
                      " inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-300",
                      activeItem.contact
                        ? "border-blue-500 font-bold text-white"
                        : "border-transparent text-gray-400"
                    )}
                    onClick={() => handleActiveChange("contact", true)}
                  >
                    Contact
                  </a>

                  <a
                    href="/documents/Andrew_Morrow_Resume_2022.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className=" self-center rounded-md bg-blue-600 p-2 transition-all hover:animate-pulse hover:bg-blue-500"
                  >
                    <button className="">View Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* mobile nav */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#aboutMe"
                className={classNames(
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium  hover:border-gray-300 hover:bg-gray-50",
                  activeItem.aboutMe
                    ? "border-blue-600 bg-gray-200 font-bold text-black"
                    : "border-transparent text-gray-400"
                )}
                onClick={() => handleActiveChange("aboutMe", true)}
              >
                About Me
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#projects"
                className={classNames(
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium  hover:border-gray-300 hover:bg-gray-50",
                  activeItem.projects
                    ? "border-blue-600 bg-gray-200 font-bold text-black"
                    : "border-transparent text-gray-400"
                )}
                onClick={() => handleActiveChange("projects", true)}
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#contact"
                className={classNames(
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium  hover:border-gray-300 hover:bg-gray-50",
                  activeItem.contact
                    ? "border-blue-600 bg-gray-200 font-bold text-black"
                    : "border-transparent text-gray-400"
                )}
                onClick={() => handleActiveChange("contact", true)}
              >
                Contact
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/documents/Andrew_Morrow_Resume_2022.pdf"
                className="ml-3 inline-block h-10 self-center rounded-md bg-blue-600 p-2 pl-3 pr-4"
              >
                View Resume
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
