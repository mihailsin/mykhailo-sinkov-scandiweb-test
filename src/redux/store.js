import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

const store = configureStore({
  reducer: {
    userOptions: rootReducer,
  },
});

export default store;
