import React from "react";
import { useDispatch } from "react-redux";
import { toggleHabit } from "../redux/habitsSlice";

const HabitCard = ({ habit }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded flex justify-between items-center">
      <span className={habit.completed ? "line-through text-gray-400" : ""}>
        {habit.title}
      </span>

      <button
        onClick={() => dispatch(toggleHabit(habit.id))}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        ✓
      </button>
    </div>
  );
};

export default HabitCard;
