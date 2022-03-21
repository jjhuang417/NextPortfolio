import React from 'react';

export default function NavBar() {
  return (
    <div className="NavBarDiv" name="Wrapping">
      <div className="About">About</div>
      <style jsx>{`
        .NavBarDiv {
          border-color: red;
        }
      `}
      </style>
    </div>
  );
}
