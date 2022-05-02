// Library import
import Head from "next/head";
import React from "react";

// Component Import
import NavBar from "../components/NavBar.jsx";

// Style import
import Tailwind from "../tailwind.config.js";

export default function Home() {
  const tailwindColors = Tailwind.theme.colors;

  const hiMy = `
    text-secondary
    text-xl
    md:text-4xl
    mt-8
    mb-3
    mx-28
    md:mx-40
  `;

  const nameStyling = `
    text-primary
    text-4xl
    md:text-6xl
    my-3
    mx-28
    md:mx-40
  `;

  const interestStyle = `
    text-ternary
    text-4xl
    md:text-6xl
    my-3
    ml-28
    mr-16
    md:mx-40
  `;

  const paragraphStyling = `
    text-ternary
    text-l
    md:text-xl
    my-3
    ml-28
    mr-16
    md:mx-40
  `;

  return (
    <div className="bg-background">
      <NavBar></NavBar>
      <main className="flex flex-row justify-center mt-8">
        <section className="flex flex-col justify-center">
          <span className={hiMy}>Hi, my name is</span>
          <span className={nameStyling}>Jesse Huang.</span>
          <span className={interestStyle}>
            I love building things with code.
          </span>
          <span className={paragraphStyling}>
            I am a fullstack software engineer and I specialize in web
            development. I have built a wide range of web apps from games to
            credit tracker.
          </span>
        </section>
      </main>
    </div>
  );
}
