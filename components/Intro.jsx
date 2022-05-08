// Library imports
import React from "react";

export default function Intro() {
  const innerDiv = `
    flex
    flex-col
    justify-center
  `;

  const introText = `
    text-primary
    text-xl
    md:text-4xl
    mt-8
    mb-3
    mx-28
    md:mx-40
  `;

  const nameStyling = `
    text-secondary
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
    <div className={innerDiv}>
      <span className={introText}>Hi, my name is</span>
      <span className={nameStyling}>Jesse Huang.</span>
      <span className={interestStyle}>
        I am passionate about building cool things.
      </span>
      <p className={paragraphStyling}>
        I am a fullstack software engineer and I specialize in web development.
        I have built a wide range of web apps from games to finance apps.
      </p>
    </div>
  );
}
