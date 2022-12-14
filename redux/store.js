import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import todoReducer from "./todoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
