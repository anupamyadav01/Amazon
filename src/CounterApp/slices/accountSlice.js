import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 12,
};

export const amountSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = amountSlice.actions;
export default amountSlice.reducer;
