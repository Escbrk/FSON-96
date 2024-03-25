import { createAction, createReducer } from "@reduxjs/toolkit";

export const deposit = createAction("balance/deposit");

export const withdraw = createAction("balance/withdraw");

export const balanceReducer = createReducer(
  { value: 0, items: [1, 2, 3, 4, 5] },
  (builder) => {
    builder
      .addCase("balance/deposit", (state, action) => {
        state.value += action.payload;

        // state.items = state.items.filter((item) => item > 2);
      })
      .addCase("balance/withdraw", (state, action) => {
        state.value -= action.payload;
      });
  }
);

export const balanceReducer1 = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "balance/withdraw":
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
