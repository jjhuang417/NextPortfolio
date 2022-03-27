// Library import
import Head from 'next/head';
import React from 'react';

// Component Import
import NavBar from '../components/NavBar.jsx';

// Style import
import Tailwind from '../tailwind.config.js';

export default function Home() {
  const tailwindColors = Tailwind.theme.colors;

  return (
    <div className="bg-background">
      <NavBar></NavBar>
      <span className="text-lg text-secondary">Hi, my name is Jesse Huang</span>
      {/* <style jsx global>{`
        body {
          background-color: #121212;
          color: ${tailwindColors.primary};
        }
      `}
      </style> */}
    </div>
  )
}
