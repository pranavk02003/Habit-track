import React from "react";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HabitCard from "../components/HabitCard";
import AddHabitButton from "../components/AddHabitButton";
import AddHabitModal from "../components/AddHabitModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import ProgressRing from "../components/ProgressRing";
import LoginReminderModal from "../components/LoginReminderModal";

const Home = () => {
  const habits = useSelector((state) => state.habits.list);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showLoginReminder, setShowLoginReminder] = useState(false);
  useEffect(() => {
  setShowLoginReminder(true);
}, []);
  const navigate = useNavigate();
  const total = habits.length;
  const completed = habits.filter((h) => h.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  const today = new Date();

const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "short",
  year: "numeric",
});

  return (
    <div className="p-4 min-h-screen relative">

      {/* ===== DASHBOARD ===== */}
      <div className="mb-6 bg-neutral-50 p-4 rounded-xl shadow">
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-lg font-semibold">Today’s Progress</h2>

      {/* Date */}
      <p className="text-sm text-gray-400">{formattedDate}</p>

      <p className="text-sm text-gray-500 mt-1">
        {completed} of {total} habits completed
      </p>
    </div>

    <ProgressRing percentage={percentage} />
  </div>
</div>
      

      {/* ===== EMPTY STATE ===== */}
      {habits.length === 0 && (
        <div className="text-center mt-20 text-gray-400">
          <p className="text-lg font-medium">No habits yet</p>
          <p className="text-sm">Start building consistency ✨</p>
        </div>
      )}

      {/* ===== HABIT LIST ===== */}
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
      <LoginReminderModal
  isOpen={showLoginReminder}
  onClose={() => setShowLoginReminder(false)}
/>
    </div>
  );
};

export default Home;