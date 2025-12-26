import React from "react";
import { NavLink } from "react-router-dom";

function BottomNav() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-medium"
      : "text-gray-500";

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t md:hidden">
      <ul className="flex justify-around py-2">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/stats" className={linkClass}>
          Stats
        </NavLink>
        <NavLink to="/profile" className={linkClass}>
          Profile
        </NavLink>
      </ul>
    </nav>
  );
}

export default BottomNav;
