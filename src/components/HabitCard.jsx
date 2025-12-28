import React from "react";

const HabitCard = ({ title }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
      
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-sm text-gray-500">
          Daily habit
        </p>
      </div>

      <button className="w-10 h-10 rounded-full border border-blue-500 text-blue-500 font-bold">
        ✓
      </button>

    </div>
  );
};

export default HabitCard;
