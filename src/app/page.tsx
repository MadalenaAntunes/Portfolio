import Image from "next/image";
import NavBar from "../components/NavBar";
import FullStackDev from "../components/FullStackDev";
import About from "../components/About";
import Skills from "../components/Skills";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <FullStackDev />
      <About />
      <Skills />
    </div>
  );
}
