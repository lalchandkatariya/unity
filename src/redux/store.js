// import { thunk } from "redux-thunk";
import { reducer } from "./reducer";
// import { applyMiddleware, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: reducer });

// export const store = createStore(reducer, applyMiddleware(thunk));
