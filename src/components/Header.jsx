import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b p-4   bg-gradient-to-br bg-[#f97316] text-white shadow-lg">
      <h1 className="text-4xl font-extrabold text-white-300">
  Habito 
</h1>

      <nav className="hidden md:flex gap-6 mt-2">
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
