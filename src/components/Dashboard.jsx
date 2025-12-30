import React from "react";
import ProgressRing from "./ProgressRing";

const Dashboard = () => {
  return (
    <div className=" bg-white rounded-xl shadow p-4 mb-6 flex items-center gap-4">
      
      <ProgressRing progress={65} />

      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          Today’s Progress
        </h3>
        <p className="text-sm text-gray-500">
          You’ve completed 65% of your habits today
        </p>
      </div>

    </div>
  );
};

export default Dashboard;