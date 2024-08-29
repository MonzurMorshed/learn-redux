import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "../state/CounterSlice";
import TodoSlice from "../state/todo/TodoSlice";

export default configureStore({
    reducer: {
        counter: counterSlice,
        todo: TodoSlice
    }
})