import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import AboutCardSection from "../components/AboutCardSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useRef, useState } from "react";

const Home: NextPage = () => {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

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
    if (projectsRef.current && contactRef.current) {
      if (
        -currPos.y >= 0 &&
        -currPos.y <= projectsRef?.current?.offsetTop - 100
      ) {
        handleActiveChange("aboutMe", true);
      } else if (
        -currPos.y >= projectsRef?.current?.offsetTop - 100 &&
        -currPos.y <= projectsRef.current.offsetHeight + 600
      ) {
        handleActiveChange("projects", true);
      } else if (-currPos.y >= contactRef.current.offsetTop - 900) {
        handleActiveChange("contact", true);
      }
    }
  });

  return (
    <div className="min-h-full min-w-full bg-slate-900">
      <Head>
        <title>Andrew Morrow | Web Developer</title>
        <meta name="description" content="Andrew Morrow Portfolio" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Navbar2
        activeItem={activeItem}
        handleActiveChange={handleActiveChange}
      />
      {/* <div className="bg-[url('/images/wave-haikei.svg')] aspect-[960/540] w-100% bg-no-repeat bg-center bg-cover"></div> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        {/* <AboutMe /> */}
        <Technologies />
        <AboutCardSection />
        <div id="projects">
          <Projects ref={projectsRef} />
        </div>
      </div>
      <Footer ref={contactRef} />
    </div>
  );
};

export default Home;
