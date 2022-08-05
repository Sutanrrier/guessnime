import { configureStore } from "@reduxjs/toolkit";
import animeCoverReducer from "../slices/animeCoverSlice";
import userReducer from "../slices/userSlice";

export default configureStore({
  reducer: {
    animeCover: animeCoverReducer,
    user: userReducer,
  },
});
