// Library import
import React from 'react';

// Style import
import Tailwind from '../tailwind.config.js';

export default function NavBar() {
  // Tailwind custom
  const tailwindColors = Tailwind.theme.colors;

  // Styling
  const navWrappingStyle = `
    flex
    flex-row
    border
    border-primary
    w-screen
    h-12
    sm:h-16
    justify-end
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
      <div className="flex flex-row w-80 justify-evenly" name="OtherPageWrapper">
        <div className={navTextStyle}>About</div>
        <div className={navTextStyle}>Project</div>
        <button className={resumeButton}>Resume</button>
      </div>
    </div>
  );
}
