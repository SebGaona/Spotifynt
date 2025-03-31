import { configureStore } from "@reduxjs/toolkit";
import librarySlice from "./slices/librarySlice";

const store = configureStore({
  reducer: {
    library: librarySlice,
  },
});

export default store;
