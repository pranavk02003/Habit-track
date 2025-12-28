import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import HabitCard from "../components/HabitCard";
import AddHabitButton from "../components/AddHabitButton";
import AddHabitModal from "../components/AddHabitModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

const Home = () => {
  const habits = useSelector((state) => state.habits.list);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  return (
    <div className="p-4 min-h-screen relative">
      {habits.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No habits yet. Add your first habit 🚀
        </p>
      )}

      <div className="space-y-3">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onDelete={(id) => setDeleteId(id)}
          />
        ))}
      </div>

      <AddHabitButton onClick={() => setIsAddOpen(true)} />

      <AddHabitModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
      />

      <DeleteConfirmModal
        isOpen={deleteId !== null}
        habitId={deleteId}
        onClose={() => setDeleteId(null)}
      />
    </div>
  );
};

export default Home;