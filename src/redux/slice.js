// 1. Setup todo slice
// todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const processPaymentSlice = createSlice({
  name: "processPayment",
  initialState: [],
  reducers: {
    updateItemPayment(state, action) {
      return action.payload;
    },
  },
});
const { actions, reducer } = processPaymentSlice;
export const { updateItemPayment } = actions;
export default reducer;
