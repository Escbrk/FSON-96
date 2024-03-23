import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { balanceReducer } from "./balanceSlice";
import { langReducer } from "./localeSlice";

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: langReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
