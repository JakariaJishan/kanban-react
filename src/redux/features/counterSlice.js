import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoItems: [],
  inProgressItems: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todoItems.push(action.payload);
    },
    addInProgress:(state,action) =>{
      state.inProgressItems.push(action.payload)
    },
    moveItem: (state, action) => {
      const { itemId, sourceColumn, destinationColumn } = action.payload;

      const sourceItems =
        sourceColumn === "todo" ? state.todoItems : state.inProgressItems;
      const destinationItems =
        destinationColumn === "todo" ? state.todoItems : state.inProgressItems;

      const itemIndex = sourceItems.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        const [item] = sourceItems.splice(itemIndex, 1);
        destinationItems.push(item);
      }
    },
    editTodo: (state, action) => {
      const todoItem = state.todoItems.find(
        (item) => item.id === action.payload.id
      );
      if (todoItem) {
        todoItem.title = action.payload.title;
        todoItem.description = action.payload.description;
        todoItem.date = action.payload.date;
      }
    },
    editInProgress: (state, action) => {
      const inProgressItem = state.inProgressItems.find(
        (item) => item.id === action.payload.id
      );
      if (inProgressItem) {
        inProgressItem.title = action.payload.title;
        inProgressItem.description = action.payload.description;
        inProgressItem.date = action.payload.date;
      }
    },
    deleteTodo: (state, action) => {
        state.todoItems = state.todoItems.filter(
          (item) => item.id !== action.payload.id
        );
     
    },
    deleteInProgress: (state, action) => {
        state.todoItems = state.todoItems.filter(
          (item) => item.id !== action.payload.id
        );
     
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo,addInProgress,moveItem,deleteTodo,deleteInProgress,editInProgress,editTodo } = todoSlice.actions;

export default todoSlice.reducer;
