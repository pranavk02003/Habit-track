import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, title: "Drink Water", completed: false },
    { id: 2, title: "Exercise", completed: true },
    { id: 3, title: "Read Book", completed: false },
  ],
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    toggleHabit: (state, action) => {
      const habit = state.list.find(h => h.id === action.payload);
      if (habit) habit.completed = !habit.completed;
    },

    addHabit: (state, action) => {
      state.list.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
  },
});

export const { toggleHabit, addHabit } = habitsSlice.actions;
export default habitsSlice.reducer;