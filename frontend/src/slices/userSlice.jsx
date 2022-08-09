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

      state.score > state.maxScore
        ? (state.maxScore = state.score)
        : state.maxScore;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { addScore, resetScore } = userSlice.actions;

export default userSlice.reducer;
