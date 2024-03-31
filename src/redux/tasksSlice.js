import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, updateTask } from "./tasksOps";
import { selectTextFilter } from "./filterSlice";

const handlePending = (state) => {
  state.error = false;
  state.loading = true;
};
const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const slice = createSlice({
  name: "task",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(updateTask.pending, handlePending)
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        const taskIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[taskIndex] = action.payload;
      })
      .addCase(updateTask.rejected, handleRejected),
});

export default slice.reducer;

export const selectLoading = (state) => state.tasks.loading;

export const selectError = (state) => state.tasks.error;

export const selectTasks = (state) => state.tasks.items;

// export const selectVisibleTasks = (state) => {
//   console.log("selectVisibleTasks");
//   const tasks = selectTasks(state);
//   const filter = selectTextFilter(state);

//   return tasks.filter((task) =>
//     task.text.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const selectVisibleTasks = createSelector(
  [selectTasks, selectTextFilter],
  (tasks, textFilter) => {
    console.log("selectVisibleTasks");

    return tasks.filter((task) =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);
