import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./actions";

const categoryFilterReducer = createReducer("all", {
  [changeFilter]: (state, action) => action.payload,
});

export { categoryFilterReducer };
