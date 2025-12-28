import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/habitsSlice";

const AddHabitModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleAdd = () => {
    if (title.trim() === "") return;
    dispatch(addHabit(title));
    setTitle("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm">
        <h2 className="text-lg font-semibold mb-4">Add New Habit</h2>

        <input
          type="text"
          placeholder="Habit name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHabitModal;