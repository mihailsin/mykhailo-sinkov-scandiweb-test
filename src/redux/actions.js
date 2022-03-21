import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("categoryFilter/value");
const changeCurrency = createAction("currency/value");

export { changeCurrency, changeFilter };
