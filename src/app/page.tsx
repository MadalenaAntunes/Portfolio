import Image from "next/image";
import NavBar from "../components/NavBar";
import FullStackDev from "../components/FullStackDev";
import About from "../components/About";
import Skills from "../components/Skills";
import MyProjects from "../components/MyProjects";
import Testimonials from "../components/Testimonials";
import LetsWork from "../components/LetsWork";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <FullStackDev />
      <About />
      <Skills />
      <MyProjects />
      <Testimonials />
      <LetsWork />
    </div>
  );
}
