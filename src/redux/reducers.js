import { createReducer } from "@reduxjs/toolkit";
import {
  changeFilter,
  changeCurrency,
  linkTo,
  addProductInCart,
} from "./actions";
import { combineReducers } from "@reduxjs/toolkit";

const categoryFilterReducer = createReducer("all", {
  [changeFilter]: (state, action) => action.payload,
});

const currencyReducer = createReducer("USD", {
  [changeCurrency]: (state, action) => action.payload,
});

const linkReducer = createReducer("#", {
  [linkTo]: (state, action) => action.payload,
});

const cartReducer = createReducer([], {
  [addProductInCart]: (state, action) => [...state, action.payload],
});

const rootReducer = combineReducers({
  filter: categoryFilterReducer,
  currency: currencyReducer,
  productId: linkReducer,
  productsInCart: cartReducer,
});

export { rootReducer };
