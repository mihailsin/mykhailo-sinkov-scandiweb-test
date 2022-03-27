import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("categoryFilter/value");
const changeCurrency = createAction("currency/value");
const linkTo = createAction("link/value");
const addProductInCart = createAction("cart/addProduct");
const removeProductFromCart = createAction("cart/removeProduct");

export {
  changeCurrency,
  changeFilter,
  linkTo,
  addProductInCart,
  removeProductFromCart,
};
