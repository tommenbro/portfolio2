import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Development from "./components/Development";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import More from "./components/More";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
