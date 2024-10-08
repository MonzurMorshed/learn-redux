import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        value:[]
    },
    reducers: {
        AddTodo: (state,action) => {
            state.value.push(action.payload);
        },
        RemoveTodo: (state,action) => {
            state.value.splice(action.payload,1);
        },
        EditTodo: (state,action) => {
            state.value.splice(['index'],1,action.payload['task']);
        }
    }
})

export const {AddTodo, RemoveTodo, EditTodo} = TodoSlice.actions
export default TodoSlice.reducer;