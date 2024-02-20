import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./features/coins/coinsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
        coins: coinsReducer,
    },
  });
};
