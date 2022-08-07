import { random } from "@/commons";
import { createSlice } from "@reduxjs/toolkit";

interface IResultState {
    correctResult: string;
    marginOfError: string;
    duration: any[];
    inputValue: string,
    start: number,
    avgTime: number,
    sumError:number,
    percent: number
}
const initialState: IResultState = {
    correctResult: '',
    marginOfError: '',
    duration: [],
    inputValue:'',
    start: 0,
    avgTime: 0,
    sumError:0,
    percent:0
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
            state.duration.push(actions.payload)
        },
        saveInputValue: (state, actions) => {
            state.inputValue = actions.payload
        },
        saveStart: (state, actions) => {
            state.start = actions.payload
        },
        saveAvgTime: (state, actions) => {
            state.avgTime = actions.payload
        },
        saveSumError:  (state, actions) => {
            state.sumError = actions.payload
        },
        savePercent:  (state, actions) => {
            state.percent = actions.payload
        }
    }
})

export const { saveCorrectResult, saveMarginOfError, saveDuration, saveInputValue, saveStart, saveAvgTime, saveSumError, savePercent} = resultSlice.actions

export default resultSlice.reducer