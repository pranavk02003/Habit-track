import React from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/habitsSlice";

const AddHabitButton = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const title = prompt("Enter habit name");
    if (title) {
      dispatch(addHabit(title));
    }
  };

  return (
    <button
      onClick={handleAdd}
      className="fixed bottom-20 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg"
    >
      + Add Habit
    </button>
  );
};

export default AddHabitButton;