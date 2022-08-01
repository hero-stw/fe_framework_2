import { numLength, random } from "@/commons";
import { createSlice } from "@reduxjs/toolkit";

interface IProductState {
    a: number,
    b: number
}
const initialState: IProductState = {
    a: 0,
    b: 0
};

export const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        randomNumber: (state) => {
            state.a = numLength(3, 9),
            state.b = numLength(2, 8)
        }
    }
})

export const { randomNumber } = numberSlice.actions

export default numberSlice.reducer