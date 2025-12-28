import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b p-4">
      <h1 className="text-4xl font-bold text-blue-600">
  Habit Tracker
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
