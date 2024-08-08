import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  repeat: {},
  wait: {},
};

// Create slice
const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setRepeat: (state, action) => {
      state.repeat = action.payload.value;
    },
    setWait: (state, action) => {
      state.wait = action.payload.value;
    },
  },
});

// Export actions
export const { setRepeat, setWait } = eventSlice.actions;

// Export reducer
export default eventSlice.reducer;
