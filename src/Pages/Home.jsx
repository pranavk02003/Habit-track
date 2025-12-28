import React from "react";
import { useState } from "react";
import HabitCard from "../components/HabitCard";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/habitsSlice";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [habitName, setHabitName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!habitName.trim()) return;
    dispatch(addHabit({ title: habitName }));
    setHabitName("");
    setIsOpen(false);
  };

  return (
    <div>
       <div className="p-4 pb-24 max-w-md mx-auto">
        <h2 className="text-xl font-semibold">Your Habits</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Habit
        </button>
      </div>

      <div className="grid gap-4">
        <HabitCard title="Drink Water" />
        <HabitCard title="Exercise" />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-4 rounded w-80">
            <h3 className="mb-2 font-medium">New Habit</h3>
            <input
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              className="border w-full p-2 mb-3"
              placeholder="Habit name"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;