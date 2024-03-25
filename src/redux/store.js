import { configureStore } from "@reduxjs/toolkit";
import { balanceReducer } from "./balanceSlice";
import { langReducer } from "./localeSlice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    locale: langReducer,
  },
});
