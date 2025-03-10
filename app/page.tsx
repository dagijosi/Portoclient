"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import First from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <First />
      <About />
      <Projects />
      <Skills/>
      <Contact/>
    </div>
  );
}
