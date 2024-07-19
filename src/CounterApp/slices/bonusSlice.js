import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bonus: 0,
};

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.bonus += 1;
    },
  },
});

export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
