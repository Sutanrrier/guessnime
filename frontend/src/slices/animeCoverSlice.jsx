import { createSlice } from "@reduxjs/toolkit";

export const animeCoverSlice = createSlice({
  name: "animeCover",
  initialState: {
    id: "",
    title: "",
    urlCover: "",
    url0: "",
    url1: "",
    url2: "",
    url3: "",
    url4: "",
  },
  reducers: {
    activeAnime: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.urlCover = action.payload.urlCover;
      state.url0 = action.payload.url0;
      state.url1 = action.payload.url1;
      state.url2 = action.payload.url2;
      state.url3 = action.payload.url3;
      state.url4 = action.payload.url4;
    },
  },
});

export const { activeAnime } = animeCoverSlice.actions;

export default animeCoverSlice.reducer;
