import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../components/models/todo";

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        setTodos: (state, action: PayloadAction<Todo[]>) => {
            state = action.payload;
            return state;
        },
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload);
            return state;
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state = state.filter((todo: Todo) => (todo.id !== action.payload));
            return state;
        },
        editTodo: (state, action: PayloadAction<Todo>) => {
            state = state.map((todo: Todo) => (todo.id === action.payload.id ? action.payload : todo));
            return state;
        },
    }
})

export const { setTodos, addTodo, removeTodo,editTodo } = todoSlice.actions;

export default todoSlice.reducer;