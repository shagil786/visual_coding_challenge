import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  midAreaLists: [
    {
      id: "midAreaList-0",
      comps: ["MOVE"],
    },
  ],
};

// Create slice
const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    updateList: (state, action) => {
      state.midAreaLists = action.payload;
    },
    addList: (state) => {
      const oldList = state.midAreaLists;
      const newListAdd = {
        id: `midAreaList-${state.midAreaLists.length}`,
        comps: ["MOVE"],
      };
      oldList.push(newListAdd);
      state.midAreaLists = oldList;
    },
  },
});

// Export actions
export const { updateList, addList } = listSlice.actions;

// Export reducer
export default listSlice.reducer;
