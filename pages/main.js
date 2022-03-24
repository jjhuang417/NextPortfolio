import React from 'react';

// Component Import
import NavBar from '../components/NavBar.jsx';

export default function main () {
  return (
    <div className="container">
      <NavBar></NavBar>
      <span>Hi, my name is Jesse Huang</span>
      <style jsx global>{`
        body {
          background-color: #121212;
          color: #BB86FC;
        }
      `}
      </style>
    </div>
  );
}