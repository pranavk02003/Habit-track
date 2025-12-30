import React from "react";
import { useDispatch } from "react-redux";
import { toggleHabit } from "../redux/habitsSlice";

const HabitCard = ({ habit, onDelete }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-white font-medium p-4 rounded-xl shadow">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => dispatch(toggleHabit(habit.id))}
        />
        
        <p className={habit.completed ? "line-through text-gray-400" : ""}>
          {habit.title}
        </p>
      </div>

      <button
        onClick={() => onDelete(habit.id)}
        className="text-red-500 text-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default HabitCard;