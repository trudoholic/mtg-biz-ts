import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface LangState {
  value: "ru" | "en"
}

const initialState: LangState = {
  value: "ru",
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      const lang = action.payload;
      if ("ru" === lang || "en" === lang) {
        state.value = lang;
      }
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
