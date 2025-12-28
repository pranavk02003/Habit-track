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
  },
});

// ✅ EXPORT ACTION
export const { addHabit } = habitsSlice.actions;

// ✅ EXPORT REDUCER
export default habitsSlice.reducer;