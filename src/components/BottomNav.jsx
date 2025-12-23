import React from "react";

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t md:hidden">
      <ul className="flex justify-around py-2 text-sm">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Stats</li>
        <li className="cursor-pointer">Profile</li>
      </ul>
    </nav>
  );
}

export default BottomNav;