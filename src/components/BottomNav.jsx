import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white p-3 flex justify-around md:hidden">
      <Link to="/">Home</Link>
      <Link to="/stats">Stats</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default BottomNav;
