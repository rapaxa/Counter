import {expect, test} from 'vitest'
import {counterReducer, decrement, increment, initialStateType} from "./counter-reducer.ts";
const initialState:initialStateType = {
    value: 1,
    minSizeOfValue:0,
    maxSizeOfValue:2
}
test('add 1 in counter 1 + 1 = 2', () => {
    const newCounter = counterReducer(initialState,increment())
    expect(newCounter.value).toBe(2)
})
test('add 1 in counter 1 - 1 = 0', () => {
    const newCounter = counterReducer(initialState,decrement())
    expect(newCounter.value).toBe(0)
})