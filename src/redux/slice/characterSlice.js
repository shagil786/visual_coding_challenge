import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  characters: [{ id: "sprite0", angle: 0 }],
  active: "sprite0",
};

// Create slice
const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacterAngle: (state, action) => {
      state.characters[0].angle = action.payload;
    },
    setActive: (state) => {
      // Create a new character with a unique ID
      const newCharacter = {
        id: `sprite${state.characters.length}`,
        angle: 0,
      };

      // Update the characters array with the new character
      state.characters.push(newCharacter);
    },
  },
});

// Export actions
export const { setCharacterAngle, setActive } = characterSlice.actions;

// Export reducer
export default characterSlice.reducer;
