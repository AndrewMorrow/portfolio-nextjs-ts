import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import AboutMe2 from "../components/AboutMe2";
import BookInterview from "../components/BookInterview";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar";
import ProjectImages from "../components/Projects/ProjectImages";
import ProjectItem from "../components/Projects/ProjectItem";
import Projects from "../components/Projects/Projects";
import ScrollAction from "../components/ScrollAction";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Head>
        <title>Andrew Morrow | Web Developer</title>
        <meta name="description" content="Andrew Morrow Portfolio" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Navbar2 />
      {/* <div className="bg-[url('/images/wave-haikei.svg')] aspect-[960/540] w-100% bg-no-repeat bg-center bg-cover"></div> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <AboutMe />
        <AboutMe2 />
        {/* <ScrollAction /> */}
        <div id="projects">
          <Projects />
        </div>
        {/* <BookInterview /> */}
        {/* <Contact /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
