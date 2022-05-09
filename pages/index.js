// Library import
import Head from "next/head";
import React from "react";

// Component Import
import NavBar from "../components/NavBar.jsx";
import Intro from "../components/Intro.jsx";

// Style import
import Tailwind from "../tailwind.config.js";

export default function Home() {
  const sectionOuterDiv = `
    flex
    flex-row
    mt-72
    md:mt-76
    mx-28
    md:mx-40
  `;

  const sectionHeader = `
    text-secondary
    text-2xl
    md:text-4xl
  `;

  return (
    <div className="bg-background">
      <NavBar />
      <Intro />
      <div className={sectionOuterDiv}>
        <span
          className={sectionHeader}
        >
          I. <span className="text-ternary">About Me</span>
        </span>
      </div>
    </div>
  );
}
