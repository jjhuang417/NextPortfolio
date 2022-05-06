// Library import
import Head from "next/head";
import React from "react";

// Component Import
import NavBar from "../components/NavBar.jsx";

// Style import
import Tailwind from "../tailwind.config.js";

export default function Home() {
  const tailwindColors = Tailwind.theme.colors;

  const outerDiv = `
    flex
    flex-row
    justify-center
    mt-8
  `;

  const innerDiv= `
    flex
    flex-col
    justify-center
  `;

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
    text-ternary/[.7]
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
      <main className={outerDiv}>
        <div className={innerDiv}>
          <span className={hiMy}>Hi, my name is</span>
          <span className={nameStyling}>Jesse Huang.</span>
          <span className={interestStyle}>
            I love building things with code.
          </span>
          <p className={paragraphStyling}>
            I am a fullstack software engineer and I specialize in web
            development. I have built a wide range of web apps from games to
            utility apps.
          </p>
        </div>
      </main>
      {/* This is where the next section with pics will be */}
      <section className={outerDiv}>
        <div className={innerDiv}>

        </div>
      </section>
    </div>
  );
}
