import { createSlice } from "@reduxjs/toolkit";
import { random } from "lodash";

// Initial state
const initialState = {
  appInitiated: false,
  firstLoadCompleted: false,
  appId: random(100, 100000000),
};

// Create slice
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    appInitiated: (state) => {
      state.appInitiated = true;
    },
    firstLoadCompleted: (state) => {
      state.firstLoadCompleted = true;
    },
  },
});

// Export actions
export const { appInitiated, firstLoadCompleted } = appSlice.actions;

// Export reducer
export default appSlice.reducer;
