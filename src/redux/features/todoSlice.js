/* eslint-disable no-console */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoItems: [],
  inProgressItems: [],
  completeItems: [],
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
    addInProgress: (state, action) => {
      state.inProgressItems.push(action.payload);
    },
    addComplete: (state, action) => {
      state.completeItems.push(action.payload);
    },

    moveItem: (state, action) => {
      const { sourceColumn, destinationColumn, sourceIndex, destinationIndex } =
        action.payload;

      let add;
      let todo = state.todoItems;
      let progress = state.inProgressItems;
      let done = state.completeItems;

      if (sourceColumn === "todo") {
        add = todo[sourceIndex];
        todo.splice(sourceIndex, 1);
      }
      if (sourceColumn === "in-progress") {
        add = progress[sourceIndex];
        progress.splice(sourceIndex, 1);
      }
      if (sourceColumn === "complete") {
        add = done[sourceIndex];
        done.splice(sourceIndex, 1);
      }

      if (destinationColumn === "todo") {
        todo.splice(destinationIndex, 0, add);
      } else if (destinationColumn === "in-progress") {
        progress.splice(destinationIndex, 0, add);
      } else {
        done.splice(destinationIndex, 0, add);
      }

      state.todoItems = todo;
      state.inProgressItems = progress;
      state.completeItems = done;
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
    editComplete: (state, action) => {
      const completeItem = state.completeItems.find(
        (item) => item.id === action.payload.id
      );
      if (completeItem) {
        completeItem.title = action.payload.title;
        completeItem.description = action.payload.description;
        completeItem.date = action.payload.date;
      }
    },
    deleteTodo: (state, action) => {
      state.todoItems = state.todoItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    deleteInProgress: (state, action) => {
      state.inProgressItems = state.inProgressItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    deleteComplete: (state, action) => {
      state.completeItems = state.completeItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    saveAssign: (state, action) => {
      let { id, assignee, destinationColumn, track } = action.payload;
      if (destinationColumn === "todo" || track == true) {
        const updatedTodoItems = state.todoItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              assign: assignee,
              isTodo: destinationColumn === "todo" || true,
            };
          }
          return item;
        });

        state.todoItems = updatedTodoItems;
      }
      if (destinationColumn === "in-progress" || track == true) {
        const updatedProgressItems = state.inProgressItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              assign: assignee,
              isTodo: destinationColumn === "in-progress" || true,
            };
          }
          return item;
        });

        state.inProgressItems = updatedProgressItems;
      }
      if (destinationColumn === "complete" || track == true) {
        const updatedCompleteItems = state.completeItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              assign: assignee,
              isTodo: destinationColumn === "complete" || true,
            };
          }
          return item;
        });

        state.completeItems = updatedCompleteItems;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  addInProgress,
  moveItem,
  deleteTodo,
  deleteInProgress,
  editInProgress,
  editTodo,
  addComplete,
  editComplete,
  deleteComplete,
  saveAssign,
} = todoSlice.actions;

export default todoSlice.reducer;
