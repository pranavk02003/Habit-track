import React from "react";
import ProgressRing from "../components/ProgressRing";

const Stats = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24">
      <h1 className="text-2xl font-bold mb-6">Statistics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Weekly */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="font-semibold mb-4">This Week</h2>
          <div className="flex justify-center mb-2">
            <ProgressRing progress={70} />
          </div>
          <p className="text-gray-600">Weekly Completion</p>
        </div>

        {/* Monthly */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="font-semibold mb-4">This Month</h2>
          <div className="flex justify-center mb-2">
            <ProgressRing progress={45} />
          </div>
          <p className="text-gray-600">Monthly Completion</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
