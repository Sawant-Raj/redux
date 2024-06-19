import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./reducer/ui-slice";
import cartReducer from "./reducer/cart-slice";

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
});

export default store;
