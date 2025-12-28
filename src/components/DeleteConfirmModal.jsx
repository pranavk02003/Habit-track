import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/habitsSlice";

const DeleteConfirmModal = ({ isOpen, onClose, habitId }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleDelete = () => {
    dispatch(deleteHabit(habitId));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm">
        <h2 className="text-lg font-semibold mb-3">Delete Habit</h2>

        <p className="text-gray-600 mb-5">
          Are you sure you want to delete this habit?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;