import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/slice";
import filterReducer from "./filterSlice";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    filters: filterReducer,
  },
});
