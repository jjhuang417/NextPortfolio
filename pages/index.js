// Library import
import Head from "next/head";
import React from "react";

// Component Import
import NavBar from "../components/NavBar.jsx";
import Intro from "../components/Intro.jsx"

// Style import
import Tailwind from "../tailwind.config.js";

export default function Home() {
  const tailwindColors = Tailwind.theme.colors;

  const outerDiv = `
    flex
    flex-row
    justify-center
    mt-24
  `;

  const sectionOuterDiv = `
    flex
    flex-row
    mt-72
    md:mt-76
    mx-28
    md:mx-40
  `;

  const sectionHeader = `
    text-4xl
    md:text-6xl
  `;

  return (
    <div className="bg-background">
      <NavBar />
      <main className={outerDiv}>
        <Intro />
        
      </main>
    </div>
  );
}

{/* <section className={sectionOuterDiv}>
        <div className={innerDiv}>
          <span className={sectionHeader}>
            <span className="text-secondary">
              I. <span className="text-ternary">About Me</span>
            </span>
          </span>
          <p className={paragraphStyling}>Hello</p>
        </div>
      </section> */}