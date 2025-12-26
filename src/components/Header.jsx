import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600";

  return (
    <header className="w-full px-4 py-3 border-b flex items-center justify-between">
      <h1 className="text-xl font-semibold">Habit Tracker</h1>

      <nav className="hidden md:flex gap-6 text-sm">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/stats" className={linkClass}>
          Stats
        </NavLink>
        <NavLink to="/profile" className={linkClass}>
          Profile
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
