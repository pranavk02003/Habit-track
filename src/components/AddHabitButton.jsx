import React from "react";
const AddHabitButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-4 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700"
    >
      + Add Habit
    </button>
  );
};

export default AddHabitButton;