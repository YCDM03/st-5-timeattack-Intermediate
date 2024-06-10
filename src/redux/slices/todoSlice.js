import { createSlice } from "@reduxjs/toolkit";

// TODO: todoSlice 를 작성하세요.
const todoSlice = createSlice({
  name: "todos",
  initialState: [{ id: 0, title: "", content: "", isDone: false }],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((e) => {
        return e.id !== action.payload;
      });
    },
    changeDone: (state, action) => {
      const arr = state.filter((e) => {
        return e.id !== action.payload.id;
      });

      return [...arr, action.payload];
    },
  },
});

export const { addTodo, deleteTodo, changeDone } = todoSlice.actions;
export default todoSlice.reducer;
