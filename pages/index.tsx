import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Partials/Header";
import Navbar from "../components/Partials/Navbar";
import Navbar2 from "../components/Partials/Navbar";
import ProjectItem from "../components/Projects/ProjectItem";
import Projects from "../components/Projects/Projects";
import ScrollAction from "../components/ScrollAction";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Andrew Morrow | Web Developer</title>
        <meta name="description" content="Andrew Morrow Portfolio" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Navbar2 />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        {/* <ScrollAction /> */}
        <div id="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;
