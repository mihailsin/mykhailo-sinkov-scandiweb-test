import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("categoryFilter/value");

const changeCurrency = createAction("currency/value");

const linkTo = createAction("link/value");

const addProductInCart = createAction("cart/addProduct");
const removeProductFromCart = createAction("cart/removeProduct");
const incrementQuantity = createAction("cart/incrementQuantity", (id) => ({
  payload: {
    uniqueId: id,
    value: 1,
  },
}));
const decrementQuantity = createAction("cart/decrementQuantity", (id) => ({
  payload: {
    uniqueId: id,
    value: 1,
  },
}));
export {
  changeCurrency,
  changeFilter,
  linkTo,
  addProductInCart,
  removeProductFromCart,
  incrementQuantity,
  decrementQuantity,
};
