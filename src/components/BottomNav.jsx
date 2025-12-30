import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-gradient-to-br bg-[#f97316] text-white shadow-lg p-3 flex justify-around md:hidden">
      <Link to="/">Home</Link>
      <Link to="/stats">Stats</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default BottomNav;
