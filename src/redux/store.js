import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./habitsSlice";

export const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});