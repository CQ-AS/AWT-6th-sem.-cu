import { createSlice } from "@reduxjs/toolkit";

interface TodoType{
    id:string,
    text:string,
    completed:boolean
}

interface TodoState{
    items:TodoType[];
}

const initialState:TodoState={
    items:[]
}


export const TodoSlice = createSlice(
    {
        name:"todos",
        initialState,
        reducers:{
        addTodo:(state,action)=>{
            state.items.push(action.payload)
        } ,
        toggleTodo:(state,action)=>{
            const todo=state.items.find(todo=>todo.id ===action.payload);
            if(todo) todo.completed=!todo.completed;
        },
        removeTodo:(state,action)=>{
            state.items=state.items.filter(todo => todo.id!==action.payload)
        }
        }
})

export const {addTodo,removeTodo,toggleTodo}=TodoSlice.actions
export default TodoSlice.reducer