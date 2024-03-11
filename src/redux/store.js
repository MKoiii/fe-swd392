// 2. Setup redux store
// store.js
import { configureStore } from "@reduxjs/toolkit";
import processPaymentSlice from "./slice";
export const store = configureStore({
  reducer: {
    processPayment: processPaymentSlice,
  },
});
