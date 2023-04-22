import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // actions
    addTodo: () => {},
  },
});

export default todoSlice.reducer;

export const { addTodo } = todoSlice.actions;
