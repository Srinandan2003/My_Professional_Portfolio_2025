import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GitHubActivity from "./components/GitHubActivity";
import ThreeBackground from "./components/ThreeBackground"; // Import the new background

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <ThreeBackground /> {/* Use the new background */}

        <NavBar />

        <div className="container mx-auto px-8 pt-16">
          <section id="home">
            <Hero />
          </section>

          <section id="technologies">
            <Technologies />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="github-activity" className="py-16">
            <h2 className="text-4xl font-bold mb-8 text-center">GitHub Activity</h2>
            <div className="mx-auto max-w-5xl">
              <GitHubActivity username="Srinandan2003" />
            </div>
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;