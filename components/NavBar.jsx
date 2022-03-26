// Library import
import React from 'react';

// Style import
import Tailwind from '../tailwind.config.js';

export default function NavBar() {

  // Styling
  const navTextStyle = `
    text-sm
    border
  `;

  return (
    <div className="flex flex-row border sm:h-5 md:h-16" name="NavBarWrapping">
      <div className={navTextStyle}>About</div>
      <div className={navTextStyle}>Project</div>
      <div className="text-sm border">Resume</div>
    </div>
  );
}
