import {createAction, createReducer} from "@reduxjs/toolkit";

export type initialStateType = {
    value: number,
    minSizeOfValue:number,
    maxSizeOfValue:number,
}
const initialState:initialStateType = {
    value:0,
    minSizeOfValue:0,
    maxSizeOfValue:10,
}
export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')

export const counterReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase(increment,(state)=>{
            state.value ++
        })
        .addCase(decrement,(state)=>{
            state.value --
        })
})