import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import { reducer } from "./reducers";
// import thunk from "redux-thunk";

// export const store = createStore(reducer);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  //   //   middleware: [thunk],
  //   devTools: process.env.NODE_ENV !== "production",
  // preloadedState: {},
  enhancers: [],
});
