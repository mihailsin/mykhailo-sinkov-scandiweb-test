import { createReducer } from "@reduxjs/toolkit";
import {
  changeFilter,
  changeCurrency,
  linkTo,
  addProductInCart,
  removeProductFromCart,
  incrementQuantity,
  decrementQuantity,
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
  [removeProductFromCart]: (state, action) =>
    state.filter((product) => product.uniqueId !== action.payload),
  [incrementQuantity]: (state, action) => {
    state.find(
      (product) => product.uniqueId === action.payload.uniqueId
    ).quantity += action.payload.value;
  },
  [decrementQuantity]: (state, action) => {
    state.find(
      (product) => product.uniqueId === action.payload.uniqueId
    ).quantity -= action.payload.value;
  },
});

const rootReducer = combineReducers({
  filter: categoryFilterReducer,
  currency: currencyReducer,
  productId: linkReducer,
  productsInCart: cartReducer,
});

export { rootReducer };
