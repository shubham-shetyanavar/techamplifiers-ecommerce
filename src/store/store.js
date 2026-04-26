import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./Slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});
