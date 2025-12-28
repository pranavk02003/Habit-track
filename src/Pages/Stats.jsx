import React from "react";
import { useSelector } from "react-redux";
import ProgressRing from "../components/ProgressRing";

const Stats = () => {
  const habits = useSelector((state) => state.habits.list);

  const total = habits.length;
  const completed = habits.filter((h) => h.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-2xl font-bold">Your Progress</h1>

      {/* Progress Ring */}
      <ProgressRing percentage={percentage} />

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <p className="text-gray-500 text-sm">Total Habits</p>
          <p className="text-2xl font-bold">{total}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 text-center">
          <p className="text-gray-500 text-sm">Completed</p>
          <p className="text-2xl font-bold">{completed}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        Completion Rate: <span className="font-semibold">{percentage}%</span>
      </p>
    </div>
  );
};

export default Stats;