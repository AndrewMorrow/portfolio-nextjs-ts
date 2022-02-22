import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import BookInterview from "../components/BookInterview";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar";
import ProjectItem from "../components/Projects/ProjectItem";
import Projects from "../components/Projects/Projects";
import ScrollAction from "../components/ScrollAction";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Andrew Morrow | Web Developer</title>
        <meta name="description" content="Andrew Morrow Portfolio" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Navbar2 />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <AboutMe />
        {/* <ScrollAction /> */}
        <div id="projects">
          <Projects />
        </div>
        {/* <BookInterview /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
