import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    score: 0,
    maxScore:
      window.localStorage.getItem("ga-bestScore") != null
        ? window.localStorage.getItem("ga-bestScore")
        : "0",
    timesPlayed:
      window.localStorage.getItem("ga-timesPlayed") != null
        ? window.localStorage.getItem("ga-timesPlayed")
        : "0",
  },
  reducers: {
    addScore: (state) => {
      state.score += 1;

      if (state.score > state.maxScore) {
        state.maxScore = state.score;
        window.localStorage.setItem("ga-bestScore", state.maxScore);
      }
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { addScore, resetScore } = userSlice.actions;

export default userSlice.reducer;
