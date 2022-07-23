import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlide = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        }
    }
})

export const {increment} = counterSlide.actions

export default counterSlide.reducer