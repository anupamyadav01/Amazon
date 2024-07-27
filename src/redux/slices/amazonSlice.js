import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  user: null,
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      // if item is already add in cart then increase only quantity
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload,
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity -= 1;
      }
    },
    getQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      return item.quantity;
    },
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },

    //  sign out user
    signOut: (state) => {
      state.user = null;
    },
  },
});

export const {
  addToCart,
  resetCart,
  deleteItem,
  incrementQuantity,
  decrementQuantity,
  setUserInfo,
  signOut,
} = amazonSlice.actions;
export default amazonSlice.reducer;
