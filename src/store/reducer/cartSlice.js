import { createSlice } from "@reduxjs/toolkit";

const initialState = { isCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCart = !state.isCart;
    },
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
