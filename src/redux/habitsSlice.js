import { createSlice } from "@reduxjs/toolkit";

const habitsSlice = createSlice({
  name: "habits",
  initialState: {
    list: [],
  },
  reducers: {
    addHabit: (state, action) => {
      state.list.push(action.payload);
    },
    toggleHabit: (state, action) => {
      const habit = state.list.find(h => h.id === action.payload);
      if (habit) habit.completed = !habit.completed;
    },
    deleteHabit: (state, action) => {
      state.list = state.list.filter(h => h.id !== action.payload);
    },
  },
});

export const { addHabit, toggleHabit, deleteHabit } = habitsSlice.actions;
export default habitsSlice.reducer;