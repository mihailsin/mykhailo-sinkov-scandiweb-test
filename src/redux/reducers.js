import { createReducer } from "@reduxjs/toolkit";
import { changeFilter, changeCurrency } from "./actions";
import { combineReducers } from "@reduxjs/toolkit";

const categoryFilterReducer = createReducer("all", {
  [changeFilter]: (state, action) => action.payload,
});

const currencyReducer = createReducer(null, {
  [changeCurrency]: (state, action) => action.payload,
});

const rootReducer = combineReducers({
  filter: categoryFilterReducer,
  currency: currencyReducer,
});

export { rootReducer };
