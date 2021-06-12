import { createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import Todo from "../src/component/Todo";
import store from "../src/store/Todo";



export default function Home() {
  return (
    <>
    <h1>redux-toolkit test</h1>
    <Provider store={store}>
      <Todo />
    </Provider>
    </>
  )
}
