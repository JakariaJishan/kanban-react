import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload);
    },
    ondrag: (state, action) => {
      return action.payload
    },
    
    
  },
});

// Action creators are generated for each case reducer function
export const { add,ondrag } = todoSlice.actions;

export default todoSlice.reducer;
