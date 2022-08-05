import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    score: 0,
    maxScore: 0,
  },
  reducers: {
    addScore: (state) => {
      state.score += 1;
    },
    setMaxScore: (state) => {
      state.maxScore = state.score;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { addScore, setMaxScore, resetScore } = userSlice.actions;

export default userSlice.reducer;
