import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
  name: "library",
  initialState: {
    library: [],
  },
  reducers: {
    addToLibrary: (state, action) => {
      state.library.push(action.payload);
    },
    removeFromLibrary: (state, action) => {
      state.library = state.library.filter(
        (song) => song.id !== action.payload
      );
    },
  },
});

export const { addToLibrary, removeFromLibrary } = librarySlice.actions;
export default librarySlice.reducer;
