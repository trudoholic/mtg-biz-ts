import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface PageState {
  start: number
  pages: number
}

const initialState: PageState = {
  start: 0,
  pages: 0,
};

export const pageSize = 10;

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setStart: (state, action: PayloadAction<number>) => {
      state.start = action.payload;
    },
    setPages: (state, action: PayloadAction<number>) => {
      state.pages = action.payload;
    },
  },
});

export const { setStart, setPages } = pageSlice.actions;

export default pageSlice.reducer;
