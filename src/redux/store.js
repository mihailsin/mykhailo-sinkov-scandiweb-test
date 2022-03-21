import { configureStore } from "@reduxjs/toolkit";
import { categoryFilterReducer } from "./reducers";

const store = configureStore({
  reducer: {
    filter: categoryFilterReducer,
  },
});

export default store;
