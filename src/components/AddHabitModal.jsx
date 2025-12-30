import React from "react";
import  { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/habitsSlice";

const AddHabitModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  if (!isOpen) return null;

  const handleAdd = () => {
    if (!title.trim()) return;

    dispatch(
      addHabit({
        id: Date.now(),
        title: title.trim(),
        completed: false,
      })
    );

    setTitle("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-80">
        <h2 className="text-lg font-semibold mb-4">Add New Habit</h2>

        <input
          type="text"
          placeholder="Habit name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-2 mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1 text-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-1 bg-blue-600 text-white rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHabitModal;