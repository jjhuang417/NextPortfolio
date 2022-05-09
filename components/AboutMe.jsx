// Library imports
import React from "react";

export default function AboutMe() {
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
    <div className={sectionOuterDiv}>
      <span className={sectionHeader}>
        I. <span className="text-ternary">About Me</span>
      </span>
    </div>
  );
}
