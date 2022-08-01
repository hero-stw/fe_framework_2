import { random } from "@/Commons";
import { createSlice } from "@reduxjs/toolkit";

interface IResultState {
    correctResult: string;
    marginOfError: string;
    duration: string;
    inputValue: string
}
const initialState: IResultState = {
    correctResult: '',
    marginOfError: '',
    duration:'',
    inputValue:''
};

export const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        saveCorrectResult: (state, actions) => {
            state.correctResult = actions.payload
        },
        saveMarginOfError: (state, actions) => {
            state.marginOfError = actions.payload
        },
        saveDuration: (state, actions) => {
            state.duration = actions.payload
        },
        saveInputValue: (state, actions) => {
            state.inputValue = actions.payload
        }
    }
})

export const { saveCorrectResult, saveMarginOfError, saveDuration, saveInputValue} = resultSlice.actions

export default resultSlice.reducer