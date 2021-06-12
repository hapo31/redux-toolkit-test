import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";

type Todo = {
  id: number;
  name: string;
  done: boolean;
};

type TodoState = {
  todos: Todo[];
};

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] } as TodoState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    done: (state, action: PayloadAction<{id: number, done: boolean}>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index >= 0) {
        state.todos[index].done = action.payload.done;
      }
    }
  }
});

export const { add, done } = todoSlice.actions;

const reducers = combineReducers({
  todo: todoSlice.reducer
});

export default createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
