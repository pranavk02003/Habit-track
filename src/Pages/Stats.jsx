import React from "react";
import ProgressRing from "../components/ProgressRing";

const Stats = () => {
  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Your Progress</h2>

      <div className="flex justify-center mt-8">
        <ProgressRing progress={65} />
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        You’ve completed 65% of your habits today
      </p>
    </div>
  );
};

export default Stats;

