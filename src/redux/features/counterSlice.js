import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoItems: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todoItems.push(action.payload);
    },
    ondrag: (state, action) => {
      return action.payload;
    },
    editItem: (state, action) => {
      console.log(action.payload);
      const todoItem = state.todoItems.find(
        (item) => item.id === action.payload.id
      );
      if (todoItem) {
        todoItem.title = action.payload.title;
        todoItem.description = action.payload.description;
        todoItem.date = action.payload.date;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, ondrag, editItem } = todoSlice.actions;

export default todoSlice.reducer;
