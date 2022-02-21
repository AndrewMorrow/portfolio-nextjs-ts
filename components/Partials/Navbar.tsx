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
    bookInterview: false,
  };
  const [activeItem, setActiveItem] = useState(initialState);

  const handleActiveChange = (item: string, isActive: boolean) => {
    setActiveItem({ ...initialState, [item]: isActive });
  };

  useScrollPosition(({ prevPos, currPos }) => {
    // console.log("y", currPos.y);
    if (-currPos.y >= 0 && -currPos.y <= 850) {
      handleActiveChange("aboutMe", true);
    } else if (-currPos.y >= 850) {
      handleActiveChange("projects", true);
    } else {
      handleActiveChange("aboutMe", false);
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
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    className="hidden lg:block h-8 w-auto"
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
                      "  text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      activeItem.aboutMe
                        ? "text-gray-900 border-indigo-500"
                        : "border-transparent"
                    )}
                    onClick={() => handleActiveChange("aboutMe", true)}
                  >
                    About Me
                  </a>
                  <a
                    href="#contact"
                    className={classNames(
                      "text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      activeItem.contact
                        ? "text-gray-900 border-indigo-500"
                        : "border-transparent"
                    )}
                    onClick={() => handleActiveChange("contact", true)}
                  >
                    Contact
                  </a>
                  <a
                    href="#projects"
                    className={classNames(
                      "text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      activeItem.projects
                        ? "text-gray-900 border-indigo-500"
                        : "border-transparent"
                    )}
                    onClick={() => handleActiveChange("projects", true)}
                  >
                    Projects
                  </a>
                  <a
                    href="https://calendly.com/andrewmorrow"
                    target="_blank"
                    rel="noreferrer"
                    className={classNames(
                      "text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                      activeItem.bookInterview
                        ? "text-gray-900 border-indigo-500"
                        : "border-transparent"
                    )}
                    onClick={() => handleActiveChange("bookInterview", true)}
                  >
                    Book an Interview
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* mobile nav */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About Me
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contact
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Book an Interview
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
