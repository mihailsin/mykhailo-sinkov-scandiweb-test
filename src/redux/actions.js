import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("categoryFilter/value");
const changeCurrency = createAction("currency/value");
const linkTo = createAction("link/value");
const addProductInCart = createAction("cart/product");

export { changeCurrency, changeFilter, linkTo, addProductInCart };
