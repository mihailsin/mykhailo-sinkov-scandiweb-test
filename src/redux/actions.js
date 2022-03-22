import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("categoryFilter/value");
const changeCurrency = createAction("currency/value");
const linkTo = createAction("link/value");

export { changeCurrency, changeFilter, linkTo };
