import { random } from "@/Commons";
import { createSlice } from "@reduxjs/toolkit";

interface IProductState {
    correctResult: any[];
}
const initialState: IProductState = {
    correctResult: []
};

export const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        saveCorrectResult: (state, actions) => {
            state.correctResult = actions.payload
        }
    }
})

export const { saveCorrectResult} = resultSlice.actions

export default resultSlice.reducer