import React from "react";

const AddHabitButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-4 z-50 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-full shadow-lg md:bottom-10"
    >
      + Add Habit
    </button>
  );
};

export default AddHabitButton;