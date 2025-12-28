import React from "react";
function HabitCard({ title }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">Daily habit</p>
    </div>
  );
}

export default HabitCard;