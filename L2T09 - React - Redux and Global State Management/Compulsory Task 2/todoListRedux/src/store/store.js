//store.js
import { configureStore } from "@reduxjs/toolkit";
import todoState from "./todoState";
import.meta.env;

const store = configureStore({
  reducer: {
    todo: todoState,
    // ...more reducers can be added here.
  },
  // other store option
  middleware: [],
  devTools: import.meta.env.NODE_ENV !== "production",
});
export default store;
