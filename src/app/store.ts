import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "../model/counter-reducer.ts";
import {loadState, saveState} from "./localStorage.ts";

const persistedState = loadState()

// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
    counter: counterReducer,
})

// создание store
export const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
        counter: persistedState || undefined
    },
})
store.subscribe(() => {
    saveState(store.getState().counter)
})
// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store