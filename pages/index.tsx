import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar";
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
      <div className=" ">
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
