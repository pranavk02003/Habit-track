import React from "react";
import { useDispatch } from "react-redux";
import { toggleHabit } from "../redux/habitsSlice";

const HabitCard = ({ habit, onDelete }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white border rounded-xl p-4 flex justify-between items-center shadow-sm">
      <div>
        <p
          className={`text-lg ${
            habit.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {habit.title}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(toggleHabit(habit.id))}
          className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 font-bold"
        >
          ✓
        </button>

        <button
          onClick={() => onDelete(habit.id)}
          className="text-red-500 hover:text-red-700 text-xl"
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default HabitCard;