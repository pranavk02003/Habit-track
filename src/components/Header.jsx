import React from "react";

function Header() {
  return (
    <header className="w-full px-4 py-3 border-b border-gray-200 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Habit Tracker</h1>

      <div className="hidden md:flex gap-4 text-sm">
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">Stats</span>
        <span className="cursor-pointer">Profile</span>
      </div>
    </header>
  );
}

export default Header;