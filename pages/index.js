// Library import
import Head from 'next/head';
import React from 'react';

// Component Import
import NavBar from '../components/NavBar.jsx';

// Style import
import Tailwind from '../tailwind.config.js';

export default function Home() {
  const tailwindColors = Tailwind.theme.colors;

  const hiMy = `
    text-secondary
    text-xl
    md:text-4xl
  `;

  const nameStyling = `
    text-primary
    text-4xl
    md:text-6xl
  `;

  const interestStyle = `
    text-ternary
    text-3xl
    md:text-5xl
  `;

  const paragraphStyling = `
  text-primary
  text-6xl
  md:text-8xl
`;

  return (
    <div className="bg-background">
      <NavBar></NavBar>
      <main className="flex flex-row justify-center ">
        <section className="flex flex-col justify-center">
          <span className={hiMy}>Hi, my name is</span>
          <span className={nameStyling}>Jesse Huang.</span>
          <span className={interestStyle}>I love building cool things with code.</span>
        </section>
      </main>
    </div>
  )
}
