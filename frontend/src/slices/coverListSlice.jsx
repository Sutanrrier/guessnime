import { createSlice } from "@reduxjs/toolkit";

export const coverListSlice = createSlice({
  name: "coverList",
  initialState: {
    covers: [],
  },
  reducers: {
    makeCoverList: (state, action) => {
      state.covers = action.payload;
    },
  },
});

export const { makeCoverList } = coverListSlice.actions;

export default coverListSlice.reducer;
