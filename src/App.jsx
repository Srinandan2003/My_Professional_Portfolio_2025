import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GitHubActivity from "./components/GitHubActivity"; // Add this import

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,#0d0d0d,#1a1a1a,#333333)]"></div>
          </div>
        </div>

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

          {/* GitHub Activity Section */}
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