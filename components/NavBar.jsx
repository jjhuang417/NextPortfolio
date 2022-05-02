// Library imports
import React from 'react';
import Image from 'next/image';

// Style imports
import Tailwind from '../tailwind.config.js';

export default function NavBar() {
  // Styling
  const navWrappingStyle = `
    flex
    flex-row
    border-primary
    justify-between
    w-screen
    md:h-16
    items-center
    bg-background
  `;

  const navTextStyle = `
    text-lg
    sm:text-xl
    text-primary
    p-2
  `;

  const resumeButton = `
    text-secondary
    text-lg
    sm:text-xl
    border
    rounded-lg
    p-2
  `;

  return (
    <div className={navWrappingStyle} name="NavBarWrapper">
      <div className="flex flex-row">
        <Image
          alt="Logo"
          src="/JH.png"
          width={60}
          height={60}
        />
      </div>
      <div className="flex flex-row justify-end">
        <div
          className="flex flex-row w-80 justify-evenly"
          name="OtherPageWrapper">
          <a className={navTextStyle}>About</a>
          <a className={navTextStyle}>Project</a>
          <a rel="noopener noreferrer" target="_blank" href="https://pdfhost.io/v/9qXAcJLma_Jesse_Huang_Software_Engineer_Resume" className={resumeButton}>Resume</a>
        </div>
      </div>
    </div>
  );
}
