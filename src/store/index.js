import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./store";

const store = configureStore({
  reducer: { store: storeReducer },
});

export default store;
