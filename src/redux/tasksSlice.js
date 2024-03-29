import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./tasksOps";

const slice = createSlice({
  name: "task",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
      }),
});

export default slice.reducer;
