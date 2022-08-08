import { configureStore } from "@reduxjs/toolkit";

import animeCoverReducer from "../slices/animeCoverSlice";
import userReducer from "../slices/userSlice";
import coverListReducer from "../slices/coverListSlice";

export default configureStore({
  reducer: {
    animeCover: animeCoverReducer,
    user: userReducer,
    coverList: coverListReducer,
  },
});
