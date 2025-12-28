import React from "react";
import { useSelector } from "react-redux";

const ProgressRing = () => {
  const habits = useSelector((state) => state.habits.list);

  const total = habits.length;
  const completed = habits.filter(h => h.completed).length;

  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <h2 className="text-lg font-semibold mb-2">Today’s Progress</h2>

      <div className="relative w-24 h-24 mx-auto">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="#2563eb"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${percentage * 2.51} 251`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
          {percentage}%
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        {completed} of {total} habits completed
      </p>
    </div>
  );
};

export default ProgressRing;