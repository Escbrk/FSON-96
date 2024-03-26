import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "locale",
  initialState: {
    lang: "en",
    updatedAt: Date.now(),
  },
  reducers: {
    // changeLang(state, action) {
    //   state.lang = action.payload;
    // },
    changeLang: {
      reducer: (state, action) => {
        state.lang = action.payload.value;
        state.updatedAt = action.payload.time;
      },
      prepare: (value) => {
        return {
          payload: {
            value,
            time: Date.now(),
          },
        };
      },
    },
  },
});

export const selectLang = (state) => state.locale.lang;

export const selectUpdated = (state) => state.locale.updatedAt;

export const { changeLang } = slice.actions;

export default slice.reducer;
