import React from "react";
import Dashboard from "../components/Dashboard";
import HabitCard from "../components/HabitCard";
import AddHabitButton from "../components/AddHabitButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-4 pb-24">

      {/* DASHBOARD */}
      <Dashboard />

      {/* PAGE TITLE */}
      <h1 className="text-xl font-bold text-gray-800 mb-4">
        Your Habits
      </h1>

      {/* HABIT LIST */}
      <div className="space-y-3">
        <HabitCard title="Drink Water" />
        <HabitCard title="Exercise" />
      </div>

      {/* ADD BUTTON */}
      <AddHabitButton />
    </div>
  );
};

export default Home;