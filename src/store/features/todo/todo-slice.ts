import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "learn redux" },
    { id: 2, title: "learn typescript" },
  ],
  reducers: {
    // actions
    addTodo: () => {},
  },
});

export default todoSlice.reducer;

export const { addTodo } = todoSlice.actions;
