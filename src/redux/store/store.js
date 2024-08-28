import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "../state/CounterSlice";
import TodoReducer from "../state/todo/TodoSlice";

export default configureStore({
    reducer: {
        counter: counterSlice,
        todo: TodoReducer
    }
})