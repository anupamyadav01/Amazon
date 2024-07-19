import { configureStore } from "@reduxjs/toolkit";
import amazonSlice from "../slices/amazonSlice";

const store = configureStore({
  reducer: {
    amazon: amazonSlice,
  },
});

export default store;
