import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payload: value,
  };
};

export const withdraw = (value) => {
  return {
    type: "balance/withdraw",
    payload: value,
  };
};

export const changeLang = (newLang) => {
  return {
    type: "locale/changeLang",
    payload: newLang,
  };
};

const initialState = {
  balance: {
    value: 0,
    // a: 5,
    // b: 10,
  },
  locale: {
    lang: "en",
  },
};

const balanceReducer = (state = { value: 0 }, action) => {
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

const langReducer = (state = { lang: "en" }, action) => {
  switch (action.type) {
    case "locale/changeLang":
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        balance: {
          // ...state.balance,
          value: state.balance.value + action.payload,
        },
      };
    case "balance/withdraw":
      return {
        ...state,
        balance: {
          value: state.balance.value - action.payload,
        },
      };
    case "locale/changeLang":
      return {
        ...state,
        locale: {
          ...state.locale,
          lang: action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = createStore(rootReducer, composeWithDevTools());
