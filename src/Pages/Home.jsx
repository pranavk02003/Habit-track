import React from "react";
import { useSelector } from "react-redux";
import HabitCard from "../components/HabitCard";
import AddHabitButton from "../components/AddHabitButton";

const Home = () => {
  const habits = useSelector((state) => state.habits.list);

  return (
    <div className="p-4 space-y-3 relative min-h-screen">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}

      
      <AddHabitButton />
    </div>
  );
};

export default Home;