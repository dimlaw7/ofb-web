import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = () => {
  return configureStore({
    reducer: {
      user: userReducer,
    },
  });
};
