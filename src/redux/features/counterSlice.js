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
      const todoItem = state.todoItems.find(
        (item) => item.id === action.payload.id
      );
      if (todoItem) {
        todoItem.title = action.payload.title;
        todoItem.description = action.payload.description;
        todoItem.date = action.payload.date;
      }
    },
    deleteItem:(state,action)=>{
      state.todoItems = state.todoItems.filter((item) => item.id !== action.payload.id);
    }
  },
});

// Action creators are generated for each case reducer function
export const { add, ondrag, editItem, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
