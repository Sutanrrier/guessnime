import { configureStore } from "@reduxjs/toolkit";
import animeCoverReducer from "../slices/animeCoverSlice";

export default configureStore({
  reducer: {
    animeCover: animeCoverReducer,
  },
});
